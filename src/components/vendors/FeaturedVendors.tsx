import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Award, Briefcase, CheckCircle, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { GradientMesh, DecorativeShapes } from '../decorative/GradientMesh';
import { getFeaturedVendors, type VendorData } from '../../data/vendors';
import { getServiceBySlug } from '../../data/services';
import VendorModal from './VendorModal';

export default function FeaturedVendors() {
  const vendors = getFeaturedVendors();
  const [selectedVendor, setSelectedVendor] = useState<VendorData | null>(null);

  return (
    <section className="relative py-20 sm:py-28 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      <VendorModal vendor={selectedVendor} onClose={() => setSelectedVendor(null)} />
      <GradientMesh />
      <DecorativeShapes />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-amber-50 to-orange-50 text-amber-700 rounded-full mb-4 hover:shadow-sm transition-shadow border border-amber-200/50">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">In-House Approved Vendors</span>
          </div>
          <h2 className="gradient-text text-3xl sm:text-4xl font-bold mb-4">
            Meet Our Tier 1 Specialists
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Every vendor on our platform is personally vetted, approved, and performance-tracked by the Head Held High team. These are not directories — these are partners we stand behind.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {vendors.map((vendor) => {
            const service = getServiceBySlug(vendor.serviceSlug);
            const ServiceIcon = service?.icon;

            return (
              <div
                key={vendor.id}
                onClick={() => setSelectedVendor(vendor)}
                className="group relative bg-gradient-to-br from-white to-gray-50/50 rounded-2xl border border-gray-200/60 overflow-hidden hover:shadow-2xl hover:border-teal-300/60 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-600/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className={`h-3 bg-gradient-to-r ${service?.gradient || 'from-gray-400 to-gray-600'} group-hover:h-4 transition-all`} />
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                  <span className="text-xs font-medium text-white bg-gray-800/70 px-2 py-1 rounded-full backdrop-blur-sm">
                    Click for details
                  </span>
                </div>

                <div className="p-5 relative z-10">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h3 className="text-base font-bold text-gray-900 group-hover:text-teal-600 transition-colors">
                          {vendor.name}
                        </h3>
                        {vendor.verified && (
                          <div className="flex items-center gap-1 px-2 py-0.5 bg-green-50 rounded-full border border-green-200/50">
                            <CheckCircle className="w-3 h-3 text-green-600" />
                            <span className="text-xs font-semibold text-green-700">Verified</span>
                          </div>
                        )}
                      </div>
                      <span className="inline-block px-2 py-0.5 bg-teal-50 text-teal-700 text-xs font-semibold rounded-full border border-teal-200/50 mb-2">
                        {vendor.badge}
                      </span>
                      <p className="text-xs text-gray-500 leading-relaxed">{vendor.tagline}</p>
                    </div>
                    {ServiceIcon && service && (
                      <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center flex-shrink-0 ml-2 group-hover:scale-110 transition-transform shadow-md`}>
                        <ServiceIcon className="w-5 h-5 text-white" />
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {vendor.expertise.slice(0, 3).map((skill, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gradient-to-r from-teal-50 to-cyan-50 text-teal-700 text-xs font-medium rounded-lg border border-teal-200/50">
                        {skill}
                      </span>
                    ))}
                    {vendor.expertise.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-lg border border-gray-200/60">
                        +{vendor.expertise.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-2 mb-4 py-3 border-t border-gray-200/40">
                    <div className="flex items-center gap-2 p-2 bg-teal-50/60 rounded-xl">
                      <Award className="w-4 h-4 text-teal-600 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-gray-500">Experience</p>
                        <p className="text-sm font-bold text-gray-900">{vendor.yearsInBusiness}+ Yrs</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-cyan-50/60 rounded-xl">
                      <Briefcase className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-gray-500">Projects</p>
                        <p className="text-sm font-bold text-gray-900">{vendor.projectsCompleted}+</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200/40">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-gray-400" />
                      <span className="text-xs text-gray-600">{vendor.location}</span>
                    </div>
                    <div className="flex items-center gap-1 px-2 py-1 bg-amber-50 rounded-full border border-amber-200/50">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span className="text-xs font-bold text-gray-900">{vendor.rating}</span>
                      <span className="text-xs text-gray-500">({vendor.totalReviews})</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-2 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl border border-teal-200/50 mb-3">
                    <ShieldCheck className="w-4 h-4 text-teal-600 flex-shrink-0" />
                    <span className="text-xs font-semibold text-teal-700">In-House HOC Approved</span>
                  </div>

                  <div className="flex gap-2">
                    {service && (
                      <Link
                        to={`/services/${vendor.serviceSlug}`}
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 text-center px-3 py-2 bg-gray-50 border border-gray-200/60 text-gray-700 font-semibold rounded-xl hover:border-teal-500/60 hover:text-teal-600 hover:bg-teal-50/30 transition-all text-xs"
                      >
                        View Service
                      </Link>
                    )}
                    <Link
                      to="/contact"
                      state={{ service: vendor.serviceName, vendor: vendor.name }}
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-teal-500/30 transition-all text-xs group/btn hover:-translate-y-0.5"
                    >
                      Contact
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-teal-500/30 transition-all duration-300 hover:-translate-y-1 group"
          >
            Get Matched With a Specialist
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
