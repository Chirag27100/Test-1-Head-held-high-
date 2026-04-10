import { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';

const faqs = [
  {
    question: 'What does "B2B end-to-end" mean at HOC?',
    answer: 'It means we don\'t just connect you with a vendor and step back. HOC actively manages the engagement — from requirement scoping and specialist matching to milestone tracking and final delivery sign-off. You have one accountable partner throughout.',
  },
  {
    question: 'Who are your specialists? Are they employees of HOC?',
    answer: 'Our specialists are independent domain experts and firms — not HOC employees. However, they are personally vetted, approved, and performance-tracked by our founding team before being admitted to our network. We call them "In-House Approved" because we stand behind every single one.',
  },
  {
    question: 'What types of businesses do you serve?',
    answer: 'We work exclusively with B2B clients — enterprises, developers, corporates, manufacturers, and business owners across Bengaluru and 15+ cities in India. We do not serve individual consumer requests. Our minimum engagement typically involves a meaningful project scope.',
  },
  {
    question: 'How quickly can you connect me with a specialist?',
    answer: 'For most requirements, we respond within 24 hours with a matched specialist. For urgent or complex requirements, contact us directly via phone or chat and we can expedite the process.',
  },
  {
    question: 'Which service categories do you cover?',
    answer: 'We currently cover 9 categories: Event Management, Fabrication, Financial Services, Interior Design, Para Legal Assistance, Property Consulting, Travel Management, Turnkey Construction, and Construction Material Supply. Each category has dedicated in-house approved specialists.',
  },
  {
    question: 'Is there a cost to engage HOC?',
    answer: 'The initial consultation is free. For project engagements, our fee structure is discussed upfront and transparently — there are no hidden referral commissions or surprise costs. We align our incentives with successful project delivery.',
  },
  {
    question: 'Can I use the chatbot to submit my requirement?',
    answer: 'Yes. Our AI assistant can capture your requirement, answer questions about our services and specialists, and route your enquiry directly to our team. It\'s the fastest way to get started outside of a direct call.',
  },
  {
    question: 'What if the specialist doesn\'t perform?',
    answer: 'This is where HOC\'s model is fundamentally different from a directory or marketplace. Because we actively manage delivery, performance issues are caught early. If a specialist underperforms, HOC takes responsibility for remediation — including replacing the specialist if necessary.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-50 text-teal-700 rounded-full mb-4 border border-teal-200/60">
            <span className="text-sm font-semibold">Common Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Everything B2B decision-makers ask before engaging HOC. Still have a question? Use the chat assistant or contact us directly.
          </p>
        </div>

        <div className="space-y-2 mb-12">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`bg-white rounded-xl border transition-all duration-200 overflow-hidden ${isOpen ? 'border-teal-300 shadow-sm' : 'border-gray-200 hover:border-teal-200'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-semibold text-gray-900 text-sm sm:text-base">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-teal-600' : ''}`} />
                </button>
                <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                  <div className="px-5 pb-5">
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Chat CTA */}
        <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl p-8 text-center text-white">
          <MessageCircle className="w-10 h-10 mx-auto mb-4 opacity-80" />
          <p className="font-bold text-lg mb-2">Still have questions?</p>
          <p className="text-teal-100 text-sm mb-5">Our assistant can answer any question about HOC, our specialists, and how we work — instantly.</p>
          <button
            onClick={() => {
              const el = document.querySelector('[data-chatbot-trigger]') as HTMLButtonElement;
              el?.click();
            }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-teal-700 font-bold rounded-xl hover:shadow-lg transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            Open Chat Assistant
          </button>
        </div>
      </div>
    </section>
  );
}
