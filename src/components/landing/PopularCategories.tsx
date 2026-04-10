import { Link } from 'react-router-dom';
import { ArrowRight, HelpCircle } from 'lucide-react';

const questionCards = [
  {
    question: 'Need someone to organize your next big event?',
    answer: 'Find professional event management services',
    link: '/services/event-management',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    question: 'Need custom fabrication or exterior cladding work?',
    answer: 'Connect with fabrication specialists',
    link: '/services/fabrication',
    gradient: 'from-zinc-500 to-gray-700',
  },
  {
    question: 'Looking for financial planning, loans or insurance?',
    answer: 'Get matched with finance experts',
    link: '/services/Financial Services',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    question: 'Want to renovate or redesign your space?',
    answer: 'Explore interior design professionals',
    link: '/services/Interior Designers',
    gradient: 'from-fuchsia-500 to-pink-600',
  },
  {
    question: 'Looking for legal documentation or government liaison support?',
    answer: 'Connect with para-legal experts',
    link: '/services/Para Legal Assistance',
    gradient: 'from-slate-600 to-gray-700',
  },
  {
    question: 'Searching for property consultation or real estate advisory?',
    answer: 'Discover property advisors',
    link: '/services/Property Consultants',
    gradient: 'from-cyan-600 to-teal-700',
  },
  {
    question: 'Planning a corporate or leisure trip?',
    answer: 'Explore travel management services',
    link: '/services/Travel Consultants',
    gradient: 'from-sky-500 to-blue-600',
  },
  {
    question: 'Planning a construction or civil project?',
    answer: 'Browse turnkey construction specialists',
    link: '/services/Turnkey Constructions',
    gradient: 'from-orange-500 to-amber-600',
  },
  {
    question: 'Need bulk construction materials supplied to site?',
    answer: 'Get reliable material supply partners',
    link: '/services/construction-material',
    gradient: 'from-stone-500 to-amber-700',
  },
];

export default function PopularCategories() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full mb-6">
            <HelpCircle className="w-4 h-4 text-amber-600" />
            <span className="text-sm font-semibold text-amber-700">What are you looking for?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Tell Us What You Need
          </h2>
          <p className="text-lg text-gray-600">
            Select the service that matches your requirements and get connected with an in-house approved specialist instantly
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {questionCards.map((card, index) => (
            <Link
              key={index}
              to={card.link}
              className="group relative bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-transparent hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-3">
                  <HelpCircle className="w-6 h-6 text-teal-600 group-hover:text-white transition-colors flex-shrink-0 mt-1" />
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-white transition-colors">
                    {card.question}
                  </h3>
                </div>
                <div className="flex items-center justify-between pl-10">
                  <p className="text-sm text-gray-600 group-hover:text-white/90 transition-colors">
                    {card.answer}
                  </p>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-2 transition-all flex-shrink-0 ml-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/vendors"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-teal-500/50 hover:scale-105 transition-all duration-300"
          >
            Browse All Vendors
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
