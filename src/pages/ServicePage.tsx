import { useParams, Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getServiceBySlug } from '../data/services';
import { getVendorsByServiceSlug } from '../data/vendors';
import ServiceHero from '../components/services/ServiceHero';
import ServiceFeatures from '../components/services/ServiceFeatures';
import ServiceCTA from '../components/services/ServiceCTA';
import { Star, MapPin, Award, Briefcase, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;
  const vendors = slug ? getVendorsByServiceSlug(slug) : [];

  if (!service) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <ServiceHero service={service} />
      <ServiceFeatures service={service} />

      {vendors.length > 0 && (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-50 text-teal-700 rounded-full mb-4 border border-teal-200/50">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-sm font-semibold">In-House HOC Approved</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Our {service.name} Specialist{vendors.length > 1 ? 's' : ''}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                These are not listed vendors — they are personally vetted, approved, and managed by the Head Held High team to ensure Tier 1 delivery for every B2B engagement.
              </p>
            </div>

            <div className={`grid gap-6 ${vendors.length === 1 ? 'max-w-md mx-auto' : 'sm:grid-cols-2 lg:grid-cols-3'}`}>
              {vendors.map((vendor) => {
                const Icon = service.icon;
                return (
                  <div key={vendor.id} className="group bg-gradient-to-br from-gray-900 via-gray-900 to-teal-950 rounded-2xl overflow-hidden shadow-xl border border-white/10 hover:border-teal-500/40 transition-all duration-300 hover:-translate-y-1">
                    <div className={`h-2 bg-gradient-to-r ${service.gradient}`} />
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 flex-wrap mb-1">
                            <h3 className="text-lg font-bold text-white">{vendor.name}</h3>
                            {vendor.verified && (
                              <div className="flex items-center gap-1 px-2 py-0.5 bg-green-500/20 rounded-full border border-green-500/30">
                                <CheckCircle className="w-3 h-3 text-green-400" />
                                <span className="text-xs font-semibold text-green-400">Verified</span>
                              </div>
                            )}
                          </div>
                          <span className="inline-block px-2 py-0.5 bg-teal-500/20 text-teal-300 text-xs font-semibold rounded-full border border-teal-500/30 mb-2">
                            {vendor.badge}
                          </span>
                          <p className="text-gray-400 text-sm leading-relaxed">{vendor.tagline}</p>
                        </div>
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center flex-shrink-0 ml-3 shadow-lg`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {vendor.expertise.slice(0, 4).map((skill, idx) => (
                          <span key={idx} className="px-2 py-1 bg-white/10 text-gray-300 text-xs font-medium rounded-lg border border-white/10">
                            {skill}
                          </span>
                        ))}
                        {vendor.expertise.length > 4 && (
                          <span className="px-2 py-1 bg-white/5 text-gray-500 text-xs font-medium rounded-lg border border-white/10">
                            +{vendor.expertise.length - 4} more
                          </span>
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-2 mb-4 py-3 border-t border-white/10">
                        <div className="flex items-center gap-2 p-2 bg-white/5 rounded-xl">
                          <Award className="w-4 h-4 text-teal-400 flex-shrink-0" />
                          <div>
                            <p className="text-xs text-gray-500">Experience</p>
                            <p className="text-sm font-bold text-white">{vendor.yearsInBusiness}+ Yrs</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 p-2 bg-white/5 rounded-xl">
                          <Briefcase className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          <div>
                            <p className="text-xs text-gray-500">Projects</p>
                            <p className="text-sm font-bold text-white">{vendor.projectsCompleted}+</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-gray-500" />
                          <span className="text-xs text-gray-400">{vendor.location}</span>
                        </div>
                        <div className="flex items-center gap-1 px-2 py-1 bg-amber-500/10 rounded-full border border-amber-500/20">
                          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          <span className="text-xs font-bold text-white">{vendor.rating}</span>
                          <span className="text-xs text-gray-500">({vendor.totalReviews})</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 px-3 py-2 bg-teal-500/10 rounded-xl border border-teal-500/20 mb-4">
                        <ShieldCheck className="w-4 h-4 text-teal-400 flex-shrink-0" />
                        <span className="text-xs font-semibold text-teal-300">In-House HOC Approved Specialist</span>
                      </div>

                      <Link
                        to="/contact"
                        state={{ service: vendor.serviceName, vendor: vendor.name }}
                        className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-teal-500/30 transition-all text-sm group/btn hover:-translate-y-0.5"
                      >
                        Engage This Specialist
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <ServiceCTA service={service} />
    </>
  );
}
