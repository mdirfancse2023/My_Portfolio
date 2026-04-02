import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2, Bot, User } from "lucide-react";
import ReactMarkdown from "react-markdown";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat`;

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi! I'm Irfan's AI assistant. Ask me anything about his skills, projects, or experience!" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Lock body scroll when chat is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const tokenQueueRef = useRef<string[]>([]);
  const isAnimatingRef = useRef(false);
  const assistantContentRef = useRef("");

  const animateTokens = () => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;

    const flush = () => {
      if (tokenQueueRef.current.length === 0) {
        isAnimatingRef.current = false;
        return;
      }
      // Flush bigger chunks for speed
      const chunk = tokenQueueRef.current.splice(0, Math.min(8, tokenQueueRef.current.length)).join("");
      assistantContentRef.current += chunk;
      const snap = assistantContentRef.current;
      setMessages(prev => {
        const updated = [...prev];
        updated[updated.length - 1] = { role: "assistant", content: snap };
        return updated;
      });
      requestAnimationFrame(() => setTimeout(flush, 8));
    };
    flush();
  };

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input.trim() };
    const conversation = [...messages, userMessage];

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    tokenQueueRef.current = [];
    assistantContentRef.current = "";

    const setAssistantContent = (content: string) => {
      assistantContentRef.current = content;
      setMessages(prev => {
        const updated = [...prev];
        updated[updated.length - 1] = { role: "assistant", content };
        return updated;
      });
    };

    const fallbackToNonStreaming = async () => {
      const fallbackResp = await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ messages: conversation, stream: false }),
      });

      if (!fallbackResp.ok) {
        const errorData = await fallbackResp.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to get response");
      }

      const data = await fallbackResp.json().catch(() => ({}));
      setAssistantContent(data.content || "Sorry, I couldn't read the response. Please try again.");
    };

    try {
      const resp = await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ messages: conversation, stream: true }),
      });

      if (!resp.ok) {
        const errorData = await resp.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to get response");
      }

      setMessages(prev => [...prev, { role: "assistant", content: "" }]);

      if (!resp.body || typeof resp.body.getReader !== "function") {
        await fallbackToNonStreaming();
        return;
      }

      try {
        const reader = resp.body.getReader();
        const decoder = new TextDecoder();
        let textBuffer = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          textBuffer += decoder.decode(value, { stream: true });

          let newlineIndex: number;
          while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
            let line = textBuffer.slice(0, newlineIndex);
            textBuffer = textBuffer.slice(newlineIndex + 1);

            if (line.endsWith("\r")) line = line.slice(0, -1);
            if (line.startsWith(":") || line.trim() === "") continue;
            if (!line.startsWith("data: ")) continue;

            const jsonStr = line.slice(6).trim();
            if (jsonStr === "[DONE]") break;

            try {
              const parsed = JSON.parse(jsonStr);
              const content = parsed.choices?.[0]?.delta?.content;
              if (content) {
                for (const ch of content) tokenQueueRef.current.push(ch);
                animateTokens();
              }
            } catch {
              textBuffer = line + "\n" + textBuffer;
              break;
            }
          }
        }

        const waitForAnimation = () => new Promise<void>(resolve => {
          const check = () => {
            if (tokenQueueRef.current.length === 0) resolve();
            else setTimeout(check, 50);
          };
          check();
        });

        await waitForAnimation();
      } catch {
        await fallbackToNonStreaming();
      }
    } catch (error) {
      console.error("Chat error:", error);
      const message = error instanceof Error ? error.message : "Sorry, I encountered an error. Please try again.";
      setMessages(prev => [
        ...prev.filter(m => m.content !== ""),
        { role: "assistant", content: message }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-14 right-4 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:opacity-90 transition-all flex items-center justify-center glow-effect"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-[7.5rem] left-4 right-4 sm:left-auto sm:right-4 z-50 w-auto sm:w-[350px] h-[400px] sm:h-[500px] bg-background border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-scale-in" onTouchMove={(e) => e.stopPropagation()}>
          {/* Header */}
          <div className="p-4 border-b border-border bg-primary/5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Bot size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Irfan's AI Assistant</h3>
                <p className="text-xs text-muted-foreground">Ask me anything!</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4" style={{ overscrollBehavior: "contain" }}>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.role === "assistant" && (
                  <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Bot size={14} className="text-primary" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm ${
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-md"
                      : "bg-secondary rounded-bl-md"
                  }`}
                >
                  {msg.content ? (
                    msg.role === "assistant" ? (
                      <div className="prose prose-sm prose-invert max-w-none [&>p]:mb-1 [&>ul]:mb-1 [&>ol]:mb-1 [&>h1]:text-sm [&>h2]:text-sm [&>h3]:text-sm">
                        <ReactMarkdown>{msg.content}</ReactMarkdown>
                      </div>
                    ) : (
                      msg.content
                    )
                  ) : (
                    isLoading && idx === messages.length - 1 && (
                      <Loader2 size={14} className="animate-spin" />
                    )
                  )}
                </div>
                {msg.role === "user" && (
                  <div className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <User size={14} />
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about skills, projects..."
                className="flex-1 px-4 py-2 bg-secondary rounded-xl border border-border focus:border-primary focus:outline-none text-[16px]"
                style={{ fontSize: "16px" }}
                disabled={isLoading}
              />
              <button
                onClick={sendMessage}
                disabled={isLoading || !input.trim()}
                className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {isLoading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChatbot;
