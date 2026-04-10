import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'How does Head Held High work?',
    answer: 'Simply submit your project requirements through our contact form. Our team reviews your needs and matches you with 3-5 pre-vetted vendors who specialize in your service category. You receive competitive quotes within 24 hours and can choose the vendor that best fits your budget and timeline.',
  },
  {
    question: 'Is there any cost to use Head Held High?',
    answer: 'No! Head Held High is completely free for clients. We earn a small commission from vendors only when you successfully complete a project. There are no upfront fees, no subscription costs, and no obligation to accept any quotes.',
  },
  {
    question: 'How are vendors verified?',
    answer: 'All vendors on our platform undergo a rigorous vetting process including license verification, insurance validation, background checks, portfolio review, and client reference verification. We only work with established professionals who meet our quality standards.',
  },
  {
    question: 'What if I\'m not satisfied with the vendor?',
    answer: 'We offer a satisfaction guarantee on all projects. If you experience issues with your vendor, contact your dedicated project coordinator immediately. We will work to resolve the situation, and if necessary, find you an alternative vendor at no additional cost.',
  },
  {
    question: 'How quickly will I receive quotes?',
    answer: 'Most clients receive their first quote within 12-18 hours. The full set of 3-5 competitive quotes typically arrives within 24 hours of submitting your requirements. For urgent projects, we offer expedited matching within 6 hours.',
  },
  {
    question: 'Can I work with vendors outside my city?',
    answer: 'Yes! While many services are location-based (like construction or event management), others like finance advisory, legal services, and design work can be done remotely. We match you with the best vendor for your needs, whether local or nationwide.',
  },
  {
    question: 'What happens after I choose a vendor?',
    answer: 'Once you select a vendor, we facilitate the introduction and provide a dedicated project coordinator who stays with you throughout the project. We help with contract review, milestone tracking, and ensure smooth communication between you and your vendor.',
  },
  {
    question: 'Do you offer payment protection?',
    answer: 'Yes, for projects over $5,000, we offer optional escrow services to protect both parties. Payment is released to the vendor only after you approve completed milestones. This ensures quality work and gives you peace of mind.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-50 text-amber-700 rounded-full mb-4">
            <HelpCircle className="w-4 h-4" />
            <span className="text-sm font-semibold">Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Everything you need to know about finding and working with vendors through our platform.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden hover:border-teal-300 transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-semibold text-gray-900 text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-teal-600' : ''
                    }`}
                  />
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="px-5 pb-5 pt-0">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-8 border border-teal-100">
          <p className="text-gray-700 font-medium mb-4">
            Still have questions? Our team is here to help!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+1234567890"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-teal-600 font-semibold rounded-lg border border-teal-200 hover:bg-teal-50 transition-colors"
            >
              Call +1 (234) 567-890
            </a>
            <a
              href="mailto:hello@headheldhigh.com"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
