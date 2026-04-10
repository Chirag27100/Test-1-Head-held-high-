import { useParams, Navigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { getServiceBySlug } from '../data/services';
import { getVendorsByServiceSlug, VendorData } from '../data/vendors';
import ServiceHero from '../components/services/ServiceHero';
import ServiceFeatures from '../components/services/ServiceFeatures';
import ServiceCTA from '../components/services/ServiceCTA';
import {
  Star, MapPin, Award, Briefcase, CheckCircle,
  ArrowRight, ShieldCheck, X, ExternalLink
} from 'lucide-react';

function VendorModal({
  vendor,
  service,
  onClose,
}: {
  vendor: VendorData;
  service: ReturnType<typeof getServiceBySlug>;
  onClose: () => void;
}) {
  if (!service) return null;
  const Icon = service.icon;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      <div
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto z-10"
        style={{ animation: 'popIn 0.25s cubic-bezier(0.34,1.56,0.64,1) both' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`h-2 rounded-t-3xl bg-gradient-to-r ${service.gradient}`} />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-500 hover:text-gray-800"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-7">
          <div className="flex items-start gap-4 mb-6">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}>
              <Icon className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1 min-w-0 pt-1">
              <div className="flex items-center gap-2 flex-wrap mb-1.5">
                <h2 className="text-xl font-bold text-gray-900">{vendor.name}</h2>
                {vendor.verified && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-200">
                    <CheckCircle className="w-3 h-3" />
                    Verified
                  </span>
                )}
              </div>
              <span className="inline-block px-2.5 py-0.5 bg-teal-50 text-teal-700 text-xs font-semibold rounded-full border border-teal-200">
                {vendor.badge}
              </span>
            </div>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed mb-6 p-4 bg-gray-50 rounded-2xl border border-gray-100">
            {vendor.description}
          </p>

          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="flex flex-col items-center p-3 bg-teal-50 rounded-2xl border border-teal-100">
              <Award className="w-5 h-5 text-teal-600 mb-1" />
              <p className="text-lg font-bold text-gray-900">{vendor.yearsInBusiness}+</p>
              <p className="text-[11px] text-gray-500 font-medium uppercase tracking-wide text-center">Yrs Exp</p>
            </div>
            <div className="flex flex-col items-center p-3 bg-cyan-50 rounded-2xl border border-cyan-100">
              <Briefcase className="w-5 h-5 text-cyan-600 mb-1" />
              <p className="text-lg font-bold text-gray-900">{vendor.projectsCompleted}+</p>
              <p className="text-[11px] text-gray-500 font-medium uppercase tracking-wide text-center">Projects</p>
            </div>
            <div className="flex flex-col items-center p-3 bg-amber-50 rounded-2xl border border-amber-100">
              <Star className="w-5 h-5 fill-amber-400 text-amber-400 mb-1" />
              <p className="text-lg font-bold text-gray-900">{vendor.rating}</p>
              <p className="text-[11px] text-gray-500 font-medium uppercase tracking-wide text-center">{vendor.totalReviews} Reviews</p>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Areas of Expertise</p>
            <div className="flex flex-wrap gap-2">
              {vendor.expertise.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-gray-50 text-gray-700 text-xs font-medium rounded-full border border-gray-200 hover:border-teal-300 hover:bg-teal-50 hover:text-teal-700 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 mb-6 text-sm text-gray-500">
            <MapPin className="w-4 h-4 text-gray-400" />
            <span>{vendor.location}</span>
          </div>

          <div className="flex items-center gap-2.5 px-4 py-3 bg-teal-50 rounded-2xl border border-teal-200 mb-6">
            <ShieldCheck className="w-5 h-5 text-teal-600 flex-shrink-0" />
            <span className="text-sm font-semibold text-teal-700">In-House HOC Approved Specialist</span>
          </div>

          <Link
            to="/contact"
            state={{ service: vendor.serviceName, vendor: vendor.name }}
            className="w-full flex items-center justify-center gap-2 px-4 py-3.5 bg-gray-900 hover:bg-teal-700 text-white font-semibold rounded-2xl transition-all duration-200 text-sm group/btn"
          >
            Engage This Specialist
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>

      <style>{`
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.85) translateY(20px); }
          to   { opacity: 1; transform: scale(1)    translateY(0);     }
        }
      `}</style>
    </div>
  );
}

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;
  const vendors = slug ? getVendorsByServiceSlug(slug) : [];
  const [selectedVendor, setSelectedVendor] = useState<VendorData | null>(null);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <ServiceHero service={service} />
      <ServiceFeatures service={service} />

      {vendors.length > 0 && (
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-50/60 via-white to-white pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 text-teal-700 rounded-full mb-5 border border-teal-200">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-sm font-semibold tracking-wide">In-House HOC Approved</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                Our {service.name} Specialist{vendors.length > 1 ? 's' : ''}
              </h2>
              <p className="text-gray-500 leading-relaxed text-base">
                These are not listed vendors — they are personally vetted, approved, and managed by
                the Head Held High team to ensure Tier 1 delivery for every B2B engagement.
              </p>
            </div>

            <div className={`grid gap-8 ${vendors.length === 1 ? 'max-w-lg mx-auto' : 'sm:grid-cols-2 lg:grid-cols-3'}`}>
              {vendors.map((vendor) => {
                const Icon = service.icon;
                return (
                  <div
                    key={vendor.id}
                    className="group relative bg-white rounded-2xl border border-gray-200 hover:border-teal-300 shadow-sm hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-300 hover:-translate-y-1.5 flex flex-col overflow-hidden cursor-pointer"
                    onClick={() => setSelectedVendor(vendor)}
                  >
                    <div className={`h-1.5 w-full bg-gradient-to-r ${service.gradient}`} />

                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-start gap-4 mb-5">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center flex-shrink-0 shadow-md`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap mb-1">
                            <h3 className="text-base font-bold text-gray-900 leading-snug">{vendor.name}</h3>
                            {vendor.verified && (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-200">
                                <CheckCircle className="w-3 h-3" />
                                Verified
                              </span>
                            )}
                          </div>
                          <span className="inline-block px-2.5 py-0.5 bg-teal-50 text-teal-700 text-xs font-semibold rounded-full border border-teal-200">
                            {vendor.badge}
                          </span>
                        </div>
                      </div>

                      <p className="text-gray-500 text-sm leading-relaxed mb-5 border-l-2 border-teal-200 pl-3">
                        {vendor.tagline}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {vendor.expertise.slice(0, 4).map((skill, idx) => (
                          <span key={idx} className="px-2.5 py-1 bg-gray-50 text-gray-600 text-xs font-medium rounded-lg border border-gray-200">
                            {skill}
                          </span>
                        ))}
                        {vendor.expertise.length > 4 && (
                          <span className="px-2.5 py-1 bg-teal-50 text-teal-600 text-xs font-semibold rounded-lg border border-teal-200">
                            +{vendor.expertise.length - 4} more
                          </span>
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-3 mb-5">
                        <div className="flex items-center gap-2.5 p-3 bg-gray-50 rounded-xl border border-gray-100">
                          <Award className="w-4 h-4 text-teal-500 flex-shrink-0" />
                          <div>
                            <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wide">Experience</p>
                            <p className="text-sm font-bold text-gray-800">{vendor.yearsInBusiness}+ Yrs</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2.5 p-3 bg-gray-50 rounded-xl border border-gray-100">
                          <Briefcase className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                          <div>
                            <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wide">Projects</p>
                            <p className="text-sm font-bold text-gray-800">{vendor.projectsCompleted}+</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mb-5 pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-gray-400" />
                          <span className="text-xs text-gray-500">{vendor.location}</span>
                        </div>
                        <div className="flex items-center gap-1.5 px-2.5 py-1 bg-amber-50 rounded-full border border-amber-200">
                          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          <span className="text-xs font-bold text-amber-700">{vendor.rating}</span>
                          <span className="text-xs text-amber-500/70">({vendor.totalReviews})</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 px-3.5 py-2.5 bg-teal-50 rounded-xl border border-teal-200 mb-5">
                        <ShieldCheck className="w-4 h-4 text-teal-600 flex-shrink-0" />
                        <span className="text-xs font-semibold text-teal-700">In-House HOC Approved Specialist</span>
                      </div>

                      <div className="mt-auto">
                        <button
                          className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gray-900 hover:bg-teal-700 text-white font-semibold rounded-xl transition-all duration-200 text-sm group/btn"
                          onClick={(e) => { e.stopPropagation(); setSelectedVendor(vendor); }}
                        >
                          View Full Profile
                          <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-200" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {selectedVendor && (
        <VendorModal
          vendor={selectedVendor}
          service={service}
          onClose={() => setSelectedVendor(null)}
        />
      )}

      <ServiceCTA service={service} />
    </>
  );
}
