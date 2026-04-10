import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Loader2 } from 'lucide-react';

const SYSTEM_PROMPT = `You are a helpful assistant for VendorHub — a platform that connects clients with trusted, pre-vetted vendors across multiple service categories. Answer questions based on the information below. Be concise, friendly, and helpful.

## About VendorHub
VendorHub is your single destination for trusted vendor services across multiple industries. We connect you with verified professionals who deliver results.

**Contact:**
- Email: hello@vendorhub.com
- Phone: +1 (234) 567-890
- Address: 123 Business Ave, Suite 100

## How It Works
1. Submit your project requirements through the contact form
2. Our team reviews your needs and matches you with 3-5 pre-vetted vendors
3. You receive competitive quotes within 24 hours
4. Choose the vendor that best fits your budget and timeline

## Pricing
VendorHub is completely FREE for clients. We earn a small commission from vendors only when you successfully complete a project. No upfront fees, no subscription costs, no obligation.

## Vendor Verification
All vendors undergo: license verification, insurance validation, background checks, portfolio review, and client reference verification.

## Services Offered
1. Industrial Visit - Bridging academia and industry. Curated factory tours, educational programs, corporate tie-ups, custom itineraries.
2. Waste Management - Sustainable solutions. Waste auditing, recycling programs, compliance management, green certifications.
3. Travel - Curated journeys. Corporate travel, holiday packages, visa assistance, group tours.
4. Event Management - Full-service event planning. Corporate events, social celebrations, exhibition management, technical production.
5. Para Legal - Expert legal support. Document preparation, legal research, compliance assistance, litigation support.
6. Property - Real estate services. Property sales, leasing, property management, investment advisory.
7. Finance - Strategic financial solutions. Tax planning, business loans, accounting services, investment advisory.
8. Civil - Construction services. Structural design, site development, road construction, project management.
9. Interior Design - Spaces that inspire. Residential design, commercial spaces, 3D visualization, turnkey execution.
10. Fabrication - Precision engineering. CNC machining, welding services, sheet metal work, custom fabrication.

## FAQs
- Cost: Free for clients. Commission only from vendors on project completion.
- Quotes: First quote within 12-18 hours, full set within 24 hours. Urgent: 6 hours.
- Satisfaction: Dedicated project coordinator. Issues resolved or alternative vendor found at no cost.
- Payment protection: Escrow available for projects over $5,000.
- Remote vendors: Available for finance, legal, design and other non-location-based services.`;

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi! 👋 I'm VendorHub's assistant. Ask me anything about our services, how we work, pricing, or how to get started!",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showBubble, setShowBubble] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  useEffect(() => {
    if (isOpen) {
      setShowBubble(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => setShowBubble(true), 600);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input.trim() };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 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',
        },
        body: JSON.stringify({
          model: 'llama3-8b-8192',
          max_tokens: 500,
          temperature: 0.7,
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...newMessages.map((m) => ({ role: m.role, content: m.content })),
          ],
        }),
      });

      if (!response.ok) {
        const errText = await response.text();
        throw new Error(`API error ${response.status}: ${errText}`);
      }

      const data = await response.json();
      const reply = data?.choices?.[0]?.message?.content;

      if (!reply) throw new Error('Empty response from API');

      setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Unknown error';
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: `Sorry, I ran into an issue: ${errorMsg}. Please try again or contact hello@vendorhub.com.`,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat Window */}
      <div
        className={`transition-all duration-300 ease-in-out origin-bottom-right ${
          isOpen
            ? 'opacity-100 scale-100 pointer-events-auto'
            : 'opacity-0 scale-90 pointer-events-none'
        }`}
      >
        <div className="w-[350px] sm:w-[380px] h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-teal-600 to-cyan-600 px-4 py-3.5 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm leading-tight">VendorHub Assistant</p>
                <p className="text-teal-100 text-xs">Ask me anything</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
            >
              <X className="w-3.5 h-3.5 text-white" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'assistant' && (
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Bot className="w-3 h-3 text-white" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-br from-teal-600 to-cyan-600 text-white rounded-br-sm'
                      : 'bg-white text-gray-700 shadow-sm border border-gray-100 rounded-bl-sm'
                  }`}
                >
                  {msg.content}
                </div>
                {msg.role === 'user' && (
                  <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <User className="w-3 h-3 text-gray-600" />
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-2 justify-start">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Bot className="w-3 h-3 text-white" />
                </div>
                <div className="bg-white border border-gray-100 shadow-sm px-4 py-3 rounded-2xl rounded-bl-sm">
                  <Loader2 className="w-4 h-4 text-teal-500 animate-spin" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-gray-100">
            <div className="flex items-center gap-2 bg-gray-50 rounded-xl border border-gray-200 px-3 py-2 focus-within:border-teal-400 focus-within:ring-1 focus-within:ring-teal-100 transition-all">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your question..."
                className="flex-1 bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none"
                disabled={isLoading}
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || isLoading}
                className="w-7 h-7 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center disabled:opacity-40 hover:opacity-90 transition-opacity flex-shrink-0"
              >
                <Send className="w-3.5 h-3.5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bubble Tooltip */}
      {showBubble && !isOpen && (
        <div className="flex items-center gap-2 animate-bounce-gentle">
          <div className="bg-white text-gray-700 text-sm font-medium px-4 py-2 rounded-full shadow-lg border border-gray-200 whitespace-nowrap">
            💬 Ask me anything!
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
        aria-label="Open chat"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>
    </div>
  );
}
