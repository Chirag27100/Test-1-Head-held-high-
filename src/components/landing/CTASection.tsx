import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Clock, MessageCircle } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-teal-600 via-teal-700 to-cyan-800 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-black/10 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Have a Complex B2B Problem?
          <br />
          <span className="text-cyan-200">Let's Solve It Together.</span>
        </h2>
        <p className="text-teal-100 text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
          Share your requirement — our team will match you with the right Tier 1 specialist and manage delivery end-to-end. No obligation. Response within 24 hours.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-teal-700 font-bold rounded-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group text-lg"
          >
            Request a Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <button
            onClick={() => {
              const el = document.querySelector('[data-chatbot-trigger]') as HTMLButtonElement;
              el?.click();
            }}
            className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white/10 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 text-lg backdrop-blur-sm"
          >
            <MessageCircle className="w-5 h-5" />
            Chat With Us Now
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 text-teal-100">
          {[
            { icon: ShieldCheck, text: 'All Specialists In-House Verified' },
            { icon: Clock, text: 'Response in 24 Hours' },
            { icon: ArrowRight, text: 'Free Initial Consultation' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <item.icon className="w-4 h-4 text-cyan-300" />
              <span className="text-sm font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
