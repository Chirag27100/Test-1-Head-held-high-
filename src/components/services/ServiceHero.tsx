import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, ShieldCheck } from 'lucide-react';
import type { Service } from '../../data/services';

interface ServiceHeroProps {
  service: Service;
}

export default function ServiceHero({ service }: ServiceHeroProps) {
  const Icon = service.icon;

  return (
    <section className="relative pt-32 pb-20 sm:pb-28 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${service.image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-900/85 to-gray-800/80" />

      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-20 -right-20 w-72 h-72 bg-gradient-to-br ${service.gradient} opacity-10 rounded-full blur-3xl`} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/#services" className="hover:text-white transition-colors">Services</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-teal-400">{service.name}</span>
        </div>

        <div className="max-w-3xl">
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6`}>
            <Icon className="w-7 h-7 text-white" />
          </div>

          {service.inHouse && (
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/20 border border-teal-400/40 rounded-full mb-5">
              <ShieldCheck className="w-4 h-4 text-teal-300" />
              <span className="text-sm font-semibold text-teal-300">Managed In-House by HOC</span>
            </div>
          )}

          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {service.name}
          </h1>
          <p className="text-xl text-teal-300 font-medium mb-4">
            {service.tagline}
          </p>
          <p className="text-gray-300 leading-relaxed text-lg mb-8 max-w-2xl">
            {service.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              state={{ service: service.name }}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-teal-500/25 transition-all duration-300 hover:-translate-y-0.5 group"
            >
              Get a Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+919448200842"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              Talk to an Expert
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
