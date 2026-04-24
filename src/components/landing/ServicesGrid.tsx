import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { services } from '../../data/services';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const serviceImages: Record<string, string> = {
  'event-management': 'https://images.pexels.com/photos/3321793/pexels-photo-3321793.jpeg?auto=compress&cs=tinysrgb&w=600',
  'fabrication': 'https://images.pexels.com/photos/2381463/pexels-photo-2381463.jpeg?auto=compress&cs=tinysrgb&w=600',
  'Financial Services': 'https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=600',
  'Interior Designers': 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
  'Para Legal Assistance': 'https://images.pexels.com/photos/3771097/pexels-photo-3771097.jpeg?auto=compress&cs=tinysrgb&w=600',
  'Property Consultants': 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600',
  'Travel Consultants': 'https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=600',
  'Turnkey Constructions': 'https://images.pexels.com/photos/261327/pexels-photo-261327.jpeg?auto=compress&cs=tinysrgb&w=600',
  'construction-material': 'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=600',
  'industrial-visit': 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600',
  'pet-industry': 'https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=600',
};

export default function ServicesGrid() {
  const { elementRef, hasIntersected } = useIntersectionObserver();

  return (
    <section ref={elementRef} id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-50 text-teal-700 rounded-full mb-5 border border-teal-200/60">
            <span className="text-sm font-semibold">11 Service Categories</span>
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
                  {/* Verified / In-House badge */}
                  {service.inHouse ? (
                    <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1.5 bg-teal-600/95 rounded-full shadow-sm border border-teal-400/60">
                      <ShieldCheck className="w-3.5 h-3.5 text-white" />
                      <span className="text-xs font-bold text-white tracking-wide">In-House</span>
                    </div>
                  ) : (
                    <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1.5 bg-white/95 rounded-full shadow-sm border border-teal-200/80">
                      <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                      <span className="text-xs font-bold text-teal-700 tracking-wide">Verified</span>
                    </div>
                  )}
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
