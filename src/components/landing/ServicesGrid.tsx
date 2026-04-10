import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { services } from '../../data/services';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const serviceImages: Record<string, string> = {
  'event-management': 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600',
  'fabrication': 'https://images.pexels.com/photos/3846508/pexels-photo-3846508.jpeg?auto=compress&cs=tinysrgb&w=600',
  'Financial Services': 'https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=600',
  'Interior Designers': 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
  'Para Legal Assistance': 'https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=600',
  'Property Consultants': 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600',
  'Travel Consultants': 'https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=600',
  'Turnkey Constructions': 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=600',
  'construction-material': 'https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=600',
};

export default function ServicesGrid() {
  const { elementRef, hasIntersected } = useIntersectionObserver();

  return (
    <section ref={elementRef} id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-50 text-teal-700 rounded-full mb-5 border border-teal-200/60">
            <span className="text-sm font-semibold">9 Service Categories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Whatever You Need Done — We Have the Right Expert
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            From building your home to planning your next event, managing your finances or handling legal paperwork — our verified specialists cover every need.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...services].sort((a, b) => a.name.localeCompare(b.name)).map((service, index) => {
            const Icon = service.icon;
            const img = serviceImages[service.slug] || service.image;
            return (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className={`group block relative rounded-2xl overflow-hidden border border-gray-200/80 hover:border-teal-400/60 hover:shadow-2xl transition-all duration-300 bg-white ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={img}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/20 to-transparent" />
                  {/* Icon badge */}
                  <div className={`absolute top-4 left-4 w-11 h-11 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  {/* Verified badge */}
                  <div className="absolute top-4 right-4 px-2 py-1 bg-white/90 rounded-full text-xs font-semibold text-teal-700 border border-teal-200/60">
                    ✓ Verified
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-base font-bold text-gray-900 mb-1 group-hover:text-teal-600 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                        {service.tagline}
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-teal-600 flex items-center justify-center flex-shrink-0 transition-colors">
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className={`text-center mt-12 transition-all duration-700 delay-500 ${hasIntersected ? 'opacity-100' : 'opacity-0'}`}>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-teal-500/30 transition-all duration-300 hover:-translate-y-1 group"
          >
            Request a Free Quote
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
