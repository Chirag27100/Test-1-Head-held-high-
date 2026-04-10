import { Link } from 'react-router-dom';
import { Users, ArrowRight, Sparkles } from 'lucide-react';
import { GradientMesh, DecorativeShapes } from '../decorative/GradientMesh';

export default function FeaturedVendors() {
  return (
    <section className="relative py-20 sm:py-28 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      <GradientMesh />
      <DecorativeShapes />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-amber-50 to-orange-50 text-amber-700 rounded-full mb-4 hover:shadow-sm transition-shadow border border-amber-200/50">
            <Sparkles className="w-4 h-4 animate-float" style={{ animationDuration: '2s' }} />
            <span className="text-sm font-semibold">Featured Vendors</span>
          </div>
          <h2 className="gradient-text text-3xl sm:text-4xl font-bold mb-4">
            Meet Our Top-Rated Professionals
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Handpicked vendors with proven track records, verified credentials, and exceptional client satisfaction ratings.
          </p>
        </div>

        <div className="text-center py-10">
          <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="w-8 h-8 text-teal-500" />
          </div>
          <p className="text-gray-500 mb-6">Our verified vendor network is being onboarded. Check back soon!</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-teal-500/40 transition-all duration-300 hover:-translate-y-1 group"
          >
            Get Matched Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
