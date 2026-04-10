import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Briefcase, Phone, Search } from 'lucide-react';
import { services } from '../../data/services';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredResults, setFilteredResults] = useState<typeof services>([]);
  const location = useLocation();
  const isHome = location.pathname === '/';

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

  const navBg = scrolled || !isHome
    ? 'bg-white/95 backdrop-blur-md shadow-md'
    : 'bg-white/80 backdrop-blur-md shadow-sm';
  const textColor = scrolled || !isHome ? 'text-gray-700' : 'text-gray-700';
  const logoColor = scrolled || !isHome ? 'text-gray-900' : 'text-gray-900';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          <Link to="/" className={`flex items-center gap-2.5 ${logoColor} transition-colors`}>
            <div className="w-9 h-9 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">Head Held High</span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            <Link
              to="/"
              className={`px-4 py-2 rounded-lg text-sm font-medium ${textColor} hover:bg-white/10 transition-all`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`px-4 py-2 rounded-lg text-sm font-medium ${textColor} hover:bg-white/10 transition-all`}
            >
              About
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium ${textColor} hover:bg-white/10 transition-all`}
              >
                Services <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>

              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200 ${
                  servicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
              >
                <div className="w-[540px] bg-white rounded-xl shadow-xl border border-gray-200 p-4 grid grid-cols-2 gap-1">
                  {services.map((service) => {
                    const Icon = service.icon;
                    return (
                      <Link
                        key={service.slug}
                        to={`/services/${service.slug}`}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-md bg-teal-50 flex items-center justify-center flex-shrink-0">
                          <Icon className={`w-4 h-4 ${service.color}`} />
                        </div>
                        <span className="text-sm font-medium text-gray-700 group-hover:text-teal-600 transition-colors">
                          {service.name}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            <Link
              to="/vendors"
              className={`px-4 py-2 rounded-lg text-sm font-medium ${textColor} hover:bg-white/10 transition-all`}
            >
              Vendors
            </Link>

            <Link
              to="/contact"
              className={`px-4 py-2 rounded-lg text-sm font-medium ${textColor} hover:bg-white/10 transition-all`}
            >
              Contact
            </Link>

            <div className="relative">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium border transition-all ${
                  scrolled || !isHome
                    ? 'bg-teal-50 border-teal-200 text-teal-600 hover:bg-teal-100'
                    : 'bg-white/20 border-white/30 text-white hover:bg-white/30'
                }`}
              >
                <Search className="w-4 h-4" />
                <span className="hidden sm:inline">Search</span>
              </button>

              {searchOpen && (
                <div className={`absolute right-0 top-full mt-2 w-72 transition-all duration-200 ${
                  searchOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}>
                  <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-3">
                    <input
                      type="text"
                      placeholder="Search services or vendors..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all text-sm"
                      autoFocus
                    />
                    {filteredResults.length > 0 && (
                      <div className="mt-3 space-y-1 max-h-64 overflow-y-auto">
                        {filteredResults.map((service) => {
                          const Icon = service.icon;
                          return (
                            <Link
                              key={service.slug}
                              to={`/services/${service.slug}`}
                              onClick={() => {
                                setSearchOpen(false);
                                setSearchQuery('');
                              }}
                              className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-teal-50 transition-colors group"
                            >
                              <div className="w-8 h-8 rounded-md bg-teal-50 flex items-center justify-center flex-shrink-0 group-hover:bg-teal-100">
                                <Icon className={`w-4 h-4 ${service.color}`} />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 group-hover:text-teal-600 transition-colors">{service.name}</p>
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

            <a
              href="tel:+1234567890"
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium ${textColor} hover:bg-white/10 transition-all`}
            >
              <Phone className="w-4 h-4" />
              Call Us
            </a>

            <Link
              to="/contact"
              className="ml-3 px-6 py-2.5 bg-teal-600 text-white text-sm font-semibold rounded-lg hover:bg-teal-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Get Started
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg ${textColor} hover:bg-white/10 transition-colors`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-4 py-3 space-y-1">
          <Link to="/" className="block px-4 py-2.5 text-gray-700 hover:bg-gray-50 rounded-lg text-sm font-medium">
            Home
          </Link>

          <Link to="/about" className="block px-4 py-2.5 text-gray-700 hover:bg-gray-50 rounded-lg text-sm font-medium">
            About
          </Link>

          <button
            onClick={() => setServicesOpen(!servicesOpen)}
            className="flex items-center justify-between w-full px-4 py-2.5 text-gray-700 hover:bg-gray-50 rounded-lg text-sm font-medium"
          >
            Services
            <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
          </button>

          {servicesOpen && (
            <div className="pl-4 space-y-0.5">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={service.slug}
                    to={`/services/${service.slug}`}
                    className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg text-sm"
                  >
                    <Icon className="w-4 h-4" />
                    {service.name}
                  </Link>
                );
              })}
            </div>
          )}

          <Link to="/vendors" className="block px-4 py-2.5 text-gray-700 hover:bg-gray-50 rounded-lg text-sm font-medium">
            Vendors
          </Link>

          <Link to="/contact" className="block px-4 py-2.5 text-gray-700 hover:bg-gray-50 rounded-lg text-sm font-medium">
            Contact
          </Link>

          <div className="px-4 py-2.5">
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all text-sm"
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
                      className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-teal-50 transition-colors group"
                    >
                      <Icon className={`w-4 h-4 ${service.color}`} />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">{service.name}</p>
                        <p className="text-xs text-gray-500 truncate">{service.tagline}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <a href="tel:+1234567890" className="flex items-center gap-2 px-4 py-2.5 text-gray-700 hover:bg-gray-50 rounded-lg text-sm font-medium">
            <Phone className="w-4 h-4" />
            Call Us
          </a>

          <div className="pt-2 px-2">
            <Link
              to="/contact"
              className="block text-center px-5 py-2.5 bg-teal-600 text-white text-sm font-semibold rounded-lg"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
