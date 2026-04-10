import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative py-20 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-1/4 w-72 h-72 bg-teal-500 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-10 left-1/3 w-60 h-60 bg-cyan-500 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border border-teal-400/50 rounded-full mb-6 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-teal-300 animate-float" style={{ animationDuration: '2s' }} />
          <span className="text-sm font-semibold text-teal-300">Limited Time Offer</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Ready to Find Your Perfect Service Partner?
        </h2>
        <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto">
          Join hundreds of businesses that trust our platform to connect them with certified, professional vendors.
        </p>

        <div className="space-y-3 mb-10 max-w-md mx-auto text-left">
          {[
            'Receive matched vendors within 24 hours',
            'All vendors are background-checked and insured',
            'No obligation to proceed',
            'Ongoing support throughout your project',
          ].map((benefit, idx) => (
            <div key={benefit} className="flex items-start gap-3 text-white group hover:translate-x-1 transition-transform">
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-teal-400 to-cyan-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4 text-white" />
              </div>
              <span className="group-hover:text-teal-300 transition-colors">{benefit}</span>
            </div>
          ))}
        </div>

        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 shadow-xl hover:-translate-y-1 group"
        >
          Get Started Today
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
