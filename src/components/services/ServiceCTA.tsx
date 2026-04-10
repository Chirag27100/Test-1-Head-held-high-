import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Service } from '../../data/services';
import { services } from '../../data/services';

interface ServiceCTAProps {
  service: Service;
}

export default function ServiceCTA({ service }: ServiceCTAProps) {
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <>
      <section className={`py-16 bg-gradient-to-r ${service.gradient}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started with {service.name}?
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Share your requirements and our team will connect you with the best vendor for your needs.
          </p>
          <Link
            to="/contact"
            state={{ service: service.name }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 group"
          >
            Request a Quote
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Explore Other Services
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {related.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="bg-white rounded-xl p-5 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${s.gradient} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">{s.name}</h4>
                  <p className="text-xs text-gray-500">{s.tagline}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
