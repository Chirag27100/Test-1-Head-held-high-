import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Clock, MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

const rotatingProblems = [
  'Construction Projects',
  'Legal & Compliance',
  'Financial Planning',
  'Interior Fit-Outs',
  'Event Execution',
  'Property Transactions',
  'Travel Management',
  'Fabrication Works',
];

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => { setIsVisible(true); }, []);

  useEffect(() => {
    const current = rotatingProblems[currentIndex];
    const speed = deleting ? 40 : 90;
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (displayed.length < current.length) {
          setDisplayed(current.slice(0, displayed.length + 1));
        } else {
          setTimeout(() => setDeleting(true), 2200);
        }
      } else {
        if (displayed.length > 0) {
          setDisplayed(current.slice(0, displayed.length - 1));
        } else {
          setDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % rotatingProblems.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [displayed, deleting, currentIndex]);

  return (
    <section className="relative min-h-[92vh] flex items-center bg-gradient-to-br from-gray-950 via-gray-900 to-teal-950 overflow-hidden pt-20">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/8 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/30 rounded-full mb-8">
              <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-teal-300">India's B2B Specialist Marketplace — Bengaluru & Beyond</span>
            </div>
          </div>

          {/* Headline */}
          <div className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6">
              Tier 1 Specialists for
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 min-h-[1.2em] inline-block">
                {displayed}
                <span className="inline-block w-0.5 h-[0.85em] bg-teal-400 ml-1 animate-pulse align-middle" />
              </span>
            </h1>
          </div>

          {/* Sub-headline */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl">
              Head Held High connects enterprises with in-house approved, Tier 1 specialists — managing end-to-end B2B service delivery across 9 categories so complex problems get resolved efficiently.
            </p>
          </div>

          {/* CTAs */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} flex flex-col sm:flex-row gap-4 mb-12`}>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-teal-500/40 transition-all duration-300 hover:-translate-y-1 group text-lg"
            >
              Request a Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button
              onClick={() => {
                const el = document.querySelector('[data-chatbot-trigger]') as HTMLButtonElement;
                el?.click();
              }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/15 transition-all duration-300 text-lg backdrop-blur-sm"
            >
              <MessageCircle className="w-5 h-5 text-teal-400" />
              Talk to Our Assistant
            </button>
          </div>

          {/* Trust signals */}
          <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} flex flex-wrap gap-6`}>
            {[
              { icon: ShieldCheck, text: 'All Specialists In-House Verified' },
              { icon: Clock, text: 'Response Within 24 Hours' },
              { icon: ArrowRight, text: 'End-to-End B2B Delivery' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-gray-400">
                <item.icon className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Floating stat cards */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'} absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4`}>
          {[
            { value: '18+', label: 'Years Leadership\nExperience' },
            { value: '500+', label: 'Verified B2B\nClients' },
            { value: '2000+', label: 'Projects\nDelivered' },
            { value: '9', label: 'Service\nCategories' },
          ].map((stat, i) => (
            <div key={i} className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl px-5 py-4 text-center hover:bg-white/10 hover:border-teal-500/30 transition-all">
              <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">{stat.value}</div>
              <div className="text-xs text-gray-400 mt-1 whitespace-pre-line leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
