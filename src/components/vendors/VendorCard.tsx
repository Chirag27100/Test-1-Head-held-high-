import { Link } from 'react-router-dom';
import { Star, MapPin, Award, Briefcase, CheckCircle, ArrowRight, MessageCircle } from 'lucide-react';
import type { Vendor } from '../../types/vendor';
import { getServiceBySlug } from '../../data/services';

const WHATSAPP_NUMBER = '919448200842';

interface VendorCardProps {
  vendor: Vendor;
}

export default function VendorCard({ vendor }: VendorCardProps) {
  const service = getServiceBySlug(vendor.category);
  const ServiceIcon = service?.icon;

  return (
    <div className="group relative bg-gradient-to-br from-white to-gray-50/50 rounded-2xl border border-gray-200/60 overflow-hidden hover:shadow-2xl hover:border-teal-300/60 transition-all duration-300 hover:-translate-y-2">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-600/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className={`h-3 bg-gradient-to-r ${service?.gradient || 'from-gray-400 to-gray-600'} group-hover:h-4 transition-all`} />

      <div className="p-6 relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors">
                {vendor.name}
              </h3>
              {vendor.verified && (
                <div className="flex items-center gap-1 px-2 py-1 bg-green-50 rounded-full">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" title="Verified Vendor" />
                  <span className="text-xs font-semibold text-green-700">Verified</span>
                </div>
              )}
            </div>
            <p className="text-sm text-gray-500 mb-3">{vendor.tagline}</p>
          </div>
          {ServiceIcon && (
            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-125 transition-transform shadow-lg group-hover:shadow-xl`}>
              <ServiceIcon className="w-7 h-7 text-white" />
            </div>
          )}
        </div>

        <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-2">
          {vendor.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {vendor.expertise.slice(0, 3).map((skill, idx) => (
            <span
              key={idx}
              className="px-3 py-1.5 bg-gradient-to-r from-teal-50 to-cyan-50 text-teal-700 text-xs font-semibold rounded-lg border border-teal-200/50 hover:border-teal-300 hover:shadow-sm transition-all"
            >
              {skill}
            </span>
          ))}
          {vendor.expertise.length > 3 && (
            <span className="px-3 py-1.5 bg-gray-100 text-gray-600 text-xs font-medium rounded-lg border border-gray-200/60">
              +{vendor.expertise.length - 3} more
            </span>
          )}
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4 py-4 border-t border-gray-200/40">
          <div className="flex items-center gap-2 p-3 bg-gradient-to-br from-teal-50/60 to-transparent rounded-xl border border-teal-200/30 group-hover:border-teal-300/60 transition-all">
            <div className="w-9 h-9 bg-gradient-to-br from-teal-100 to-teal-50 rounded-lg flex items-center justify-center flex-shrink-0">
              <Award className="w-4 h-4 text-teal-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Experience</p>
              <p className="text-sm font-bold text-gray-900">{vendor.years_in_business}+ Years</p>
            </div>
          </div>
          <div className="flex items-center gap-2 p-3 bg-gradient-to-br from-cyan-50/60 to-transparent rounded-xl border border-cyan-200/30 group-hover:border-cyan-300/60 transition-all">
            <div className="w-9 h-9 bg-gradient-to-br from-cyan-100 to-cyan-50 rounded-lg flex items-center justify-center flex-shrink-0">
              <Briefcase className="w-4 h-4 text-cyan-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Projects</p>
              <p className="text-sm font-bold text-gray-900">{vendor.projects_completed}+</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200/40">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600">{vendor.location}</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-amber-50 to-orange-50 rounded-full border border-amber-200/50">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="text-sm font-bold text-gray-900">{vendor.rating}</span>
            <span className="text-xs text-gray-500">({vendor.total_reviews})</span>
          </div>
        </div>

        <div className="flex gap-2">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi, I'm interested in ${vendor.name}'s services. Can you help?`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[#25D366] hover:bg-[#1ebe5c] text-white font-semibold rounded-xl transition-all text-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
          <Link
            to="/contact"
            state={{ service: service?.name, vendor: vendor.name }}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-teal-500/30 transition-all text-sm group/btn hover:-translate-y-0.5"
          >
            Get Quote
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
