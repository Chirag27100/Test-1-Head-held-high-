import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { services } from '../../data/services';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { GradientMeshWarm, DecorativeShapes } from '../decorative/GradientMesh';

export default function ServicesGrid() {
  const { elementRef, hasIntersected } = useIntersectionObserver();

  return (
    <section ref={elementRef} id="services" className="relative py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      <GradientMeshWarm />
      <DecorativeShapes />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="gradient-text text-3xl sm:text-4xl font-bold mb-4">
            Professional Services Across 10+ Categories
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Every vendor in our network is certified, insured, and has passed our rigorous vetting process to ensure you receive exceptional service.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className={`group block p-6 relative bg-gradient-to-br from-white to-gray-50/50 rounded-2xl border border-gray-200/60 hover:border-teal-400/50 hover:shadow-xl transition-all duration-300 overflow-hidden ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-600/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-teal-400/20 to-cyan-400/10 rounded-full blur-2xl group-hover:blur-3xl transition-all" />
                <div className="relative z-10 flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:shadow-lg transition-all">
                    <Icon className={`w-7 h-7 ${service.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {service.tagline}
                    </p>
                  </div>
                  <div className="flex-shrink-0 mt-1">
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-teal-600 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className={`text-center mt-12 transition-all duration-700 delay-700 ${hasIntersected ? 'opacity-100' : 'opacity-0'}`}>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-teal-500/30 transition-all duration-300 shadow-lg hover:-translate-y-1 group"
          >
            Request a Service Quote
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
