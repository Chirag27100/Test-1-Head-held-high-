import { Link } from 'react-router-dom';
import { Briefcase, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { services } from '../../data/services';

export default function Footer() {
  const sorted = [...services].sort((a, b) => a.name.localeCompare(b.name));
  const firstHalf = sorted.slice(0, 6);
  const secondHalf = sorted.slice(6);

  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950 text-gray-300 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-1/3 w-72 h-72 bg-teal-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-60 h-60 bg-cyan-500 rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-2.5 text-white mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">Head Held High</span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400 mb-6">
              Your single destination for trusted vendor services across multiple industries. We connect you with verified professionals who deliver results.
            </p>
            <div className="space-y-3">
              <a href="mailto:care@headheldhigh.in" className="flex items-center gap-2 text-sm text-gray-400 hover:text-teal-400 hover:translate-x-1 transition-all group">
                <div className="w-8 h-8 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center group-hover:from-teal-500/40 group-hover:to-cyan-500/40 transition-all">
                  <Mail className="w-4 h-4" />
                </div>
                care@headheldhigh.in
              </a>
              <a href="tel:+919448200842" className="flex items-center gap-2 text-sm text-gray-400 hover:text-teal-400 hover:translate-x-1 transition-all group">
                <div className="w-8 h-8 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center group-hover:from-teal-500/40 group-hover:to-cyan-500/40 transition-all">
                  <Phone className="w-4 h-4" />
                </div>
                +91 94482 00842
              </a>
              <span className="flex items-center gap-2 text-sm text-gray-400">
                <div className="w-8 h-8 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                5th Cross Rd, Silver Oak Layout, Phase 7, J. P. Nagar, Bengaluru, Karnataka 560078
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2.5">
              {firstHalf.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-sm text-gray-400 hover:text-teal-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    <span className="group-hover:translate-x-1 transition-transform">{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">More Services</h4>
            <ul className="space-y-2.5">
              {secondHalf.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-sm text-gray-400 hover:text-teal-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    <span className="group-hover:translate-x-1 transition-transform">{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/" className="text-sm text-gray-400 hover:text-teal-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-400 hover:text-teal-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-400 hover:text-teal-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>

            <div className="mt-8">
              <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-3">Newsletter</h4>
              <p className="text-sm text-gray-400 mb-3">Stay updated with our latest services.</p>
              <div className="flex gap-2 group">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-3 py-2 bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 rounded-lg text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-teal-500 focus:bg-gray-800 transition-all group-hover:border-gray-600"
                />
                <button className="px-3 py-2 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-lg text-sm font-medium text-white hover:shadow-lg hover:shadow-teal-500/30 transition-all hover:-translate-y-0.5">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800/50 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Head Held High. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <span className="hover:text-teal-400 cursor-pointer transition-colors hover:translate-x-0.5">Privacy Policy</span>
            <span className="hover:text-teal-400 cursor-pointer transition-colors hover:translate-x-0.5">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
