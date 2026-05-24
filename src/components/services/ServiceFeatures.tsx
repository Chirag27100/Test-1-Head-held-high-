import { CheckCircle2 } from 'lucide-react';
import type { Service } from '../../data/services';

interface ServiceFeaturesProps {
  service: Service;
}

export default function ServiceFeatures({ service }: ServiceFeaturesProps) {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="inline-block px-4 py-1 bg-teal-50 text-teal-600 text-sm font-semibold rounded-full mb-4">
              What We Offer
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5">
              Comprehensive {service.name} Services
            </h2>
            <p className="text-gray-500 leading-relaxed mb-10">
              Our {service.name.toLowerCase()} services are designed to cover every aspect of your needs, delivered by experienced professionals with proven track records.
            </p>

            <div className="space-y-5">
              {service.features.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-gray-50 rounded-xl p-5 border border-gray-100 hover:border-teal-200 hover:shadow-sm transition-all duration-300"
                >
                  <h4 className="font-semibold text-gray-900 mb-1.5">{feature.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="sticky top-28">
              <div className="relative rounded-2xl overflow-hidden mb-8">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent" />
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 p-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-5">Key Benefits</h3>
                <div className="space-y-3.5">
                  {service.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center flex-shrink-0`}>
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
