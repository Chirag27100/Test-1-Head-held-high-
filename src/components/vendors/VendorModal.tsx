import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  X,
  Star,
  MapPin,
  Award,
  Briefcase,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  MessageCircle,
  MessageSquare,
} from 'lucide-react';
import type { VendorData } from '../../data/vendors';
import { getServiceBySlug } from '../../data/services';

const WHATSAPP_NUMBER = '919448200842';

interface VendorModalProps {
  vendor: VendorData | null;
  onClose: () => void;
}

export default function VendorModal({ vendor, onClose }: VendorModalProps) {
  // Close on Escape key
  useEffect(() => {
    if (!vendor) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [vendor, onClose]);

  if (!vendor) return null;

  const service = getServiceBySlug(vendor.serviceSlug);
  const ServiceIcon = service?.icon;

  return (
    // Backdrop
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      style={{ backgroundColor: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(4px)' }}
      onClick={onClose}
    >
      {/* Modal panel */}
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden animate-modal-in"
        onClick={(e) => e.stopPropagation()}
        style={{ maxHeight: '90vh', overflowY: 'auto' }}
      >
        {/* Gradient top bar */}
        <div className={`h-2 bg-gradient-to-r ${service?.gradient || 'from-teal-500 to-cyan-500'}`} />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        <div className="p-6 sm:p-8">
          {/* Header */}
          <div className="flex items-start gap-4 mb-6">
            {ServiceIcon && service && (
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}
              >
                <ServiceIcon className="w-8 h-8 text-white" />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <h2 className="text-2xl font-bold text-gray-900">{vendor.name}</h2>
                {vendor.verified && (
                  <div className="flex items-center gap-1 px-2.5 py-1 bg-green-50 rounded-full border border-green-200/60">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-xs font-semibold text-green-700">Verified</span>
                  </div>
                )}
              </div>
              <span className="inline-block px-3 py-1 bg-teal-50 text-teal-700 text-xs font-semibold rounded-full border border-teal-200/60 mb-2">
                {vendor.badge}
              </span>
              <p className="text-sm text-gray-500 leading-relaxed">{vendor.tagline}</p>
            </div>
          </div>

          {/* About */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">About</h3>
            <p className="text-gray-700 leading-relaxed text-sm">{vendor.description}</p>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="flex flex-col items-center justify-center p-4 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl border border-teal-100">
              <Award className="w-5 h-5 text-teal-600 mb-1" />
              <p className="text-xl font-bold text-gray-900">{vendor.yearsInBusiness}+</p>
              <p className="text-xs text-gray-500">Years Exp.</p>
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-gradient-to-br from-cyan-50 to-sky-50 rounded-2xl border border-cyan-100">
              <Briefcase className="w-5 h-5 text-cyan-600 mb-1" />
              <p className="text-xl font-bold text-gray-900">{vendor.projectsCompleted}+</p>
              <p className="text-xs text-gray-500">Projects</p>
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border border-amber-100">
              <Star className="w-5 h-5 fill-amber-400 text-amber-400 mb-1" />
              <p className="text-xl font-bold text-gray-900">{vendor.rating}</p>
              <p className="text-xs text-gray-500">{vendor.totalReviews} reviews</p>
            </div>
          </div>

          {/* Expertise */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Areas of Expertise
            </h3>
            <div className="flex flex-wrap gap-2">
              {vendor.expertise.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-gradient-to-r from-teal-50 to-cyan-50 text-teal-700 text-xs font-semibold rounded-lg border border-teal-200/60 hover:border-teal-300 hover:shadow-sm transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Location & HOC badge */}
          <div className="flex items-center justify-between py-4 border-t border-b border-gray-100 mb-6">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin className="w-4 h-4 text-gray-400" />
              {vendor.location}
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl border border-teal-200/60">
              <ShieldCheck className="w-4 h-4 text-teal-600" />
              <span className="text-xs font-semibold text-teal-700">In-House HOC Approved</span>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi, I'm interested in ${vendor.name}'s services. Can you help me?`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-[#25D366] hover:bg-[#1ebe5c] text-white font-semibold rounded-xl transition-all text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
            <Link
              to="/contact"
              state={{ service: vendor.serviceName, vendor: vendor.name }}
              onClick={onClose}
              className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-teal-500/30 transition-all text-sm hover:-translate-y-0.5 group"
            >
              <MessageSquare className="w-4 h-4" />
              Get a Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.93) translateY(16px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-modal-in {
          animation: modalIn 0.22s cubic-bezier(0.34, 1.56, 0.64, 1) both;
        }
      `}</style>
    </div>
  );
}
