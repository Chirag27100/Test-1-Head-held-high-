import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Award, Clock, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';
import { GradientMesh, DecorativeShapes } from '../decorative/GradientMesh';

const services = [
  'Industrial Visits',
  'Waste Management',
  'Travel Services',
  'Event Management',
  'Legal Support',
  'Property Solutions',
  'Finance Services',
  'Construction',
  'Interior Design',
  'Fabrication',
];

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const currentService = services[currentServiceIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentService.length) {
          setDisplayedText(currentService.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentService.slice(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentServiceIndex((prev) => (prev + 1) % services.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentServiceIndex]);

  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-white to-white pt-24 pb-20 overflow-hidden">
      <GradientMesh />
      <DecorativeShapes />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="absolute top-20 right-0 w-96 h-96 bg-teal-100/40 rounded-full blur-3xl -z-10 animate-float-slow"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl -z-10 animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="text-center lg:text-left max-w-2xl">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-200 rounded-full mb-6 hover:border-teal-400 transition-colors">
              <Sparkles className="w-4 h-4 text-teal-600 animate-float" style={{ animationDuration: '2s' }} />
              <span className="text-sm font-semibold text-teal-900">Trusted by 500+ Businesses</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Connect with Verified
              <br />
              <span className="gradient-text inline-block min-h-[1.2em] font-bold">
                {displayedText}
                <span className="inline-block w-0.5 h-[0.9em] bg-gradient-to-b from-teal-600 to-cyan-600 ml-1 animate-pulse align-middle"></span>
              </span>
              <br />
              Professionals
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              We match your business with pre-vetted, certified vendors across 10+ service categories. Save time, reduce risk, and get quality results from industry-leading professionals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-teal-500/30 transition-all duration-300 shadow-lg hover:-translate-y-0.5 group"
              >
                Request a Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-teal-600 hover:text-teal-600 hover:bg-teal-50 transition-all duration-300 group"
              >
                Browse Services
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl">
              {[
                { icon: Shield, title: 'Verified Vendors', desc: 'Background-checked professionals' },
                { icon: Award, title: 'Quality Guaranteed', desc: 'Industry-certified partners' },
                { icon: Clock, title: 'Fast Turnaround', desc: 'Get matched within 24 hours' },
              ].map((item, idx) => (
                <div
                  key={item.title}
                  className={`p-6 relative bg-gradient-to-br from-white to-teal-50/30 rounded-xl border border-gray-200/60 shadow-sm hover:shadow-lg hover:border-teal-300 transition-all duration-300 group overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: `${200 + idx * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-600/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-lg flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform">
                      <item.icon className="w-6 h-6 text-teal-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            </div>
          </div>

          <div className={`relative hidden lg:block ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'} transition-all duration-1000`}>
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-2xl group border-2 border-teal-200/30">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Business professionals collaborating"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:from-black/30 transition-all duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600/10 via-transparent to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-teal-500/25 to-cyan-500/20 rounded-full blur-3xl animate-float-slow"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-teal-400/20 to-cyan-400/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
