import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Team collaboration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/95 via-teal-800/90 to-gray-900/95" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full mb-8">
          <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
          <span className="text-sm font-semibold text-teal-200">Free. No Obligation. Response in 24hrs.</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Ready to Find the Right Expert?
        </h2>
        <p className="text-teal-100 text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
          Tell us what you need — whether it's building a home, planning an event, sorting your taxes, or anything in between. We'll connect you with the right specialist and manage it all the way through.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-teal-700 font-bold rounded-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group text-lg"
          >
            Get a Free Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <button
            onClick={() => (document.querySelector('[data-chatbot-trigger]') as HTMLButtonElement)?.click()}
            className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white/10 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 text-lg"
          >
            <MessageCircle className="w-5 h-5 text-teal-300" />
            Chat With Us Now
          </button>
        </div>

        {/* Mini trust grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {[
            { val: '500+', lbl: 'Happy Clients' },
            { val: '11', lbl: 'Service Categories' },
            { val: '24hrs', lbl: 'Response Time' },
            { val: 'Free', lbl: 'Consultation' },
          ].map((s, i) => (
            <div key={i} className="bg-white/10 border border-white/15 rounded-xl py-3 px-4 text-center">
              <div className="text-xl font-bold text-teal-300">{s.val}</div>
              <div className="text-xs text-teal-100 mt-0.5">{s.lbl}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
