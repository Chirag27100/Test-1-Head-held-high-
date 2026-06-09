import { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';

const faqs = [
  {
    q: 'Who can use Head Held High?',
    a: 'Anyone. We serve individuals (homeowners, families, students), small business owners, and large enterprises equally. If you need a trusted professional for any service — we can help.',
  },
  {
    q: 'Is there a cost to get a consultation?',
    a: 'The initial consultation is completely free and carries no obligation. You only move forward if you\'re happy with the specialist we match you with.',
  },
  {
    q: 'How do I know the specialist is trustworthy?',
    a: 'Every specialist on our platform is personally vetted by the HOC team — we verify credentials, review their track record, and check references before they are approved. You get someone we personally stand behind.',
  },
  {
    q: 'How quickly will I hear back?',
    a: 'We respond to all enquiries within 24 hours. For urgent requirements, use the chat assistant or call us directly — we\'ll prioritise you.',
  },
  {
    q: 'What services do you offer?',
    a: 'We cover 9 categories: Event Management, Fabrication, Financial Services, Interior Design, Para Legal Assistance, Property Consulting, Travel Management, Turnkey Construction, and Construction Material Supply.',
  },
  {
    q: 'What if I\'m not happy with the specialist?',
    a: 'HOC stays involved throughout delivery. If there\'s a performance issue, we step in to resolve it — and if needed, we find you an alternative specialist. You\'re not left dealing with it alone.',
  },
  {
    q: 'Can I use the chatbot to submit my requirement?',
    a: 'Yes — our AI assistant is available 24/7. It can answer questions, explain our services, and capture your requirement to forward to our team immediately.',
  },
  {
    q: 'Do you operate outside Bengaluru?',
    a: 'We are headquartered in Bengaluru and serve 15+ cities across India. Some services like financial advisory and legal assistance can also be handled remotely for any location.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-50 text-teal-700 rounded-full mb-5 border border-teal-200/60">
            <span className="text-sm font-semibold">Common Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Everything you need to know before reaching out. Still unsure? Chat with our assistant — it's available right now.</p>
        </div>

        <div className="space-y-2 mb-12">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className={`bg-white rounded-xl border transition-all duration-200 overflow-hidden ${isOpen ? 'border-teal-300 shadow-sm' : 'border-gray-200 hover:border-teal-200'}`}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-semibold text-gray-900 text-sm sm:text-base">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-teal-600' : ''}`} />
                </button>
                <div className={`transition-all duration-300 ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                  <p className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Chat CTA */}
        <div className="relative overflow-hidden bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl p-8 text-center text-white">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="relative">
            <MessageCircle className="w-10 h-10 mx-auto mb-4 opacity-80" />
            <p className="font-bold text-lg mb-2">Still have questions?</p>
            <p className="text-teal-100 text-sm mb-6 max-w-sm mx-auto">Our chat assistant is online right now. Ask anything about our services, specialists, or how we work.</p>
            <button
              onClick={() => (document.querySelector('[data-chatbot-trigger]') as HTMLButtonElement)?.click()}
              className="inline-flex items-center gap-2 px-7 py-3 bg-white text-teal-700 font-bold rounded-xl hover:shadow-lg transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              Chat With Our Assistant
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
