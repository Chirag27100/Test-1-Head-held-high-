import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Store, Phone, Search, ShieldCheck } from 'lucide-react';
import { services } from '../../data/services';

const sortedServices = [...services].sort((a, b) => a.name.localeCompare(b.name));

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredResults, setFilteredResults] = useState<typeof services>([]);
  const location = useLocation();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileToggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setSearchOpen(false);
  }, [location]);

  // Close mobile menu on outside click
  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (
        mobileMenuRef.current && !mobileMenuRef.current.contains(e.target as Node) &&
        mobileToggleRef.current && !mobileToggleRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    if (searchQuery.trim()) {
      const results = services.filter((service) =>
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.tagline.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredResults(results);
    } else {
      setFilteredResults([]);
    }
  }, [searchQuery]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-[#f5f0e8] shadow-xl shadow-black/20'
        : 'bg-[#f5f0e8]'
    }`}>
      {/* Top accent line */}
      <div className="h-0.5 w-full bg-gradient-to-r from-teal-400 via-cyan-300 to-teal-400" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg shadow-teal-500/30 group-hover:shadow-teal-500/50 transition-shadow">
              <Store className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight text-gray-800 group-hover:text-teal-600 transition-colors">
              Head Held High
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            <Link to="/" className="px-4 py-2 text-sm font-medium text-gray-900 hover:text-gray-950 hover:bg-black/8 rounded-lg transition-all">
              Home
            </Link>
            <Link to="/about" className="px-4 py-2 text-sm font-medium text-gray-900 hover:text-gray-950 hover:bg-black/8 rounded-lg transition-all">
              About
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-gray-900 hover:text-gray-950 hover:bg-black/8 rounded-lg transition-all">
                Services
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180 text-teal-400' : ''}`} />
              </button>

              <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ${
                servicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}>
                {/* Dropdown arrow */}
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#f5f0e8] border-l border-t border-[#e0d8c8] rotate-45" />
                <div className="w-[620px] bg-[#f5f0e8] rounded-xl shadow-2xl shadow-black/40 border border-[#e0d8c8] overflow-hidden">
                  {/* Dropdown header */}
                  <div className="px-5 py-3 bg-[#ede8de] border-b border-[#d8d0be] flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-teal-600" />
                    <span className="text-xs font-bold text-gray-800 uppercase tracking-widest">11 HOC-Approved Services</span>
                  </div>
                  <div className="p-3 grid grid-cols-2 gap-1">
                    {sortedServices.map((service) => {
                      const Icon = service.icon;
                      const colorMap: {[key: string]: string} = {
                        'text-stone-600': 'bg-stone-500',
                        'text-rose-600': 'bg-rose-500',
                        'text-zinc-600': 'bg-zinc-500',
                        'text-emerald-600': 'bg-emerald-500',
                        'text-indigo-600': 'bg-indigo-500',
                        'text-pink-600': 'bg-pink-500',
                        'text-slate-700': 'bg-slate-600',
                        'text-amber-600': 'bg-amber-500',
                        'text-teal-600': 'bg-teal-500',
                        'text-sky-600': 'bg-sky-500',
                        'text-orange-600': 'bg-orange-500',
                      };
                      const bgColor = colorMap[service.color] || 'bg-gray-500';
                      return (
                        <Link
                          key={service.slug}
                          to={`/services/${service.slug}`}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#ede8de] transition-colors group"
                        >
                          <div className={`w-10 h-10 rounded-lg ${bgColor} flex items-center justify-center flex-shrink-0 shadow-lg shadow-black/20 border border-white/60`}>
                            <Icon className="w-5 h-5 text-white drop-shadow-lg" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="text-sm font-semibold text-gray-900 group-hover:text-gray-800 transition-colors block leading-tight">
                              {service.name}
                            </span>
                            {service.inHouse && (
                              <span className="text-xs text-teal-600 font-bold">In-house</span>
                            )}
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <Link to="/vendors" className="px-4 py-2 text-sm font-medium text-gray-900 hover:text-gray-950 hover:bg-black/8 rounded-lg transition-all">
              Vendors
            </Link>
            <Link to="/contact" className="px-4 py-2 text-sm font-medium text-gray-900 hover:text-gray-950 hover:bg-black/8 rounded-lg transition-all">
              Contact
            </Link>

            {/* Search */}
            <div className="relative ml-1">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="flex items-center gap-2 px-3.5 py-2 bg-black/8 border border-black/15 text-gray-900 hover:text-gray-950 hover:bg-black/15 hover:border-black/25 rounded-lg text-sm font-medium transition-all"
              >
                <Search className="w-4 h-4" />
                <span>Search</span>
              </button>
              {searchOpen && (
                <div className="absolute right-0 top-full mt-2 w-72">
                  <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-3">
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400/40 focus:border-teal-400 transition-all text-sm"
                      autoFocus
                    />
                    {filteredResults.length > 0 && (
                      <div className="mt-2 space-y-1 max-h-64 overflow-y-auto">
                        {filteredResults.map((service) => {
                          const Icon = service.icon;
                          const colorMap: {[key: string]: string} = {
                            'text-stone-600': 'bg-stone-500',
                            'text-rose-600': 'bg-rose-500',
                            'text-zinc-600': 'bg-zinc-500',
                            'text-emerald-600': 'bg-emerald-500',
                            'text-indigo-600': 'bg-indigo-500',
                            'text-pink-600': 'bg-pink-500',
                            'text-slate-700': 'bg-slate-600',
                            'text-amber-600': 'bg-amber-500',
                            'text-teal-600': 'bg-teal-500',
                            'text-sky-600': 'bg-sky-500',
                            'text-orange-600': 'bg-orange-500',
                          };
                          const bgColor = colorMap[service.color] || 'bg-gray-500';
                          return (
                            <Link
                              key={service.slug}
                              to={`/services/${service.slug}`}
                              onClick={() => { setSearchOpen(false); setSearchQuery(''); }}
                              className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors group"
                            >
                              <div className={`w-7 h-7 rounded-md ${bgColor} flex items-center justify-center flex-shrink-0`}>
                                <Icon className="w-3.5 h-3.5 text-white" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 group-hover:text-gray-800">{service.name}</p>
                                <p className="text-xs text-gray-500 truncate">{service.tagline}</p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                    {searchQuery && filteredResults.length === 0 && (
                      <p className="text-center text-gray-500 text-sm mt-3 py-4">No services found</p>
                    )}
                  </div>
                </div>
              )}
            </div>

            <a href="tel:+919448200842" className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-gray-900 hover:text-gray-950 hover:bg-black/8 rounded-lg transition-all ml-1">
              <Phone className="w-4 h-4" />
              Call Us
            </a>

            <Link
              to="/contact"
              className="ml-2 px-5 py-2.5 bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-sm font-bold rounded-lg hover:from-teal-400 hover:to-cyan-400 transition-all duration-300 shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 hover:-translate-y-0.5"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            ref={mobileToggleRef}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-black/8 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div ref={mobileMenuRef} className={`lg:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[700px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-[#ede8de] border-t border-[#d8d0be] px-4 py-3 space-y-1">
          <Link to="/" className="block px-4 py-2.5 text-gray-700 hover:text-gray-900 hover:bg-black/8 rounded-lg text-sm font-medium">Home</Link>
          <Link to="/about" className="block px-4 py-2.5 text-gray-700 hover:text-gray-900 hover:bg-black/8 rounded-lg text-sm font-medium">About</Link>

          <button
            onClick={() => setServicesOpen(!servicesOpen)}
            className="flex items-center justify-between w-full px-4 py-2.5 text-gray-700 hover:text-gray-900 hover:bg-black/8 rounded-lg text-sm font-medium"
          >
            Services
            <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
          </button>

          {servicesOpen && (
            <div className="pl-4 space-y-0.5">
              {sortedServices.map((service) => {
                const Icon = service.icon;
                const colorMap: {[key: string]: string} = {
                  'text-stone-600': 'bg-stone-500',
                  'text-rose-600': 'bg-rose-500',
                  'text-zinc-600': 'bg-zinc-500',
                  'text-emerald-600': 'bg-emerald-500',
                  'text-indigo-600': 'bg-indigo-500',
                  'text-pink-600': 'bg-pink-500',
                  'text-slate-700': 'bg-slate-600',
                  'text-amber-600': 'bg-amber-500',
                  'text-teal-600': 'bg-teal-500',
                  'text-sky-600': 'bg-sky-500',
                  'text-orange-600': 'bg-orange-500',
                };
                const bgColor = colorMap[service.color] || 'bg-gray-500';
                return (
                  <Link
                    key={service.slug}
                    to={`/services/${service.slug}`}
                    className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-black/8 rounded-lg text-sm"
                  >
                    <div className={`w-5 h-5 rounded-md ${bgColor} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-3 h-3 text-white" />
                    </div>
                    {service.name}
                    {service.inHouse && <span className="ml-auto text-xs text-teal-600 font-semibold">In-house</span>}
                  </Link>
                );
              })}
            </div>
          )}

          <Link to="/vendors" className="block px-4 py-2.5 text-gray-700 hover:text-gray-900 hover:bg-black/8 rounded-lg text-sm font-medium">Vendors</Link>
          <Link to="/contact" className="block px-4 py-2.5 text-gray-700 hover:text-gray-900 hover:bg-black/8 rounded-lg text-sm font-medium">Contact</Link>

          <div className="px-4 py-2.5">
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-2 bg-[#f5f0e8] border border-[#d8d0be] rounded-lg text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500 transition-all text-sm"
            />
            {filteredResults.length > 0 && (
              <div className="mt-2 space-y-1 max-h-48 overflow-y-auto">
                {filteredResults.map((service) => {
                  const Icon = service.icon;
                  return (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      onClick={() => setSearchQuery('')}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-black/8 text-gray-700 hover:text-gray-900"
                    >
                      <Icon className="w-4 h-4" />
                      <p className="text-sm font-medium">{service.name}</p>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <a href="tel:+919448200842" className="flex items-center gap-2 px-4 py-2.5 text-gray-700 hover:text-gray-900 hover:bg-black/8 rounded-lg text-sm font-medium">
            <Phone className="w-4 h-4" />
            Call Us
          </a>
          <div className="pt-2 px-2">
            <Link to="/contact" className="block text-center px-5 py-2.5 bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-sm font-bold rounded-lg">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
