import { Link } from 'react-router-dom';
import { ArrowRight, Target, Users, Award, TrendingUp, Briefcase } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { elementRef, hasIntersected } = useIntersectionObserver();
  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
    >
      {children}
    </div>
  );
}

export default function About() {
  const stats = [
    { label: 'Service Categories', value: '10+' },
    { label: 'Verified Vendors', value: '500+' },
    { label: 'Projects Delivered', value: '2000+' },
    { label: 'Cities Served', value: '15+' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'We exist to resolve complex and planned business challenges efficiently — connecting enterprises with Tier 1 specialists who deliver, not just advise.',
    },
    {
      icon: Award,
      title: 'Tier 1 Quality',
      description: 'Every specialist on our platform undergoes rigorous vetting — certifications, track record, domain expertise, insurance, and verified client outcomes.',
    },
    {
      icon: Users,
      title: 'B2B-First',
      description: 'Our platform is built exclusively for business clients. We understand enterprise-grade requirements, timelines, and accountability standards.',
    },
    {
      icon: TrendingUp,
      title: 'End-to-End Ownership',
      description: 'We don\'t hand off and disappear. From scoping to delivery, we manage the entire engagement — ensuring outcomes, not just introductions.',
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-teal-600 via-teal-700 to-cyan-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-cyan-300 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white/90 text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
              <Briefcase className="w-4 h-4" />
              About Head Held High
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              One Platform.
              <br />
              <span className="text-cyan-300">Every Solution.</span>
            </h1>
            <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
              Head Held High is India's trusted B2B multi-vendor service marketplace — connecting businesses with Tier 1 specialists across civil, legal, financial, interior, travel, events, and more, to efficiently resolve complex and planned operational challenges end-to-end.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <AnimatedSection key={i} className="text-center">
                <div className="text-4xl font-bold text-teal-600 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* About the Company */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-50 text-teal-700 text-xs font-semibold rounded-full uppercase tracking-wider mb-6">
                Our Story
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Built to Solve Complex Problems, Efficiently
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Head Held High was built with one clear aim: to connect businesses with Tier 1 service providers who can efficiently resolve complex and planned operational challenges. The market for professional services in India was fragmented, unverified, and unaccountable — leaving enterprises without a reliable, end-to-end delivery partner.
                </p>
                <p>
                  We changed that. Our platform operates exclusively in the B2B space, aggregating rigorously vetted specialists across 10+ service categories — from civil construction and legal compliance to financial advisory, interior fit-outs, and beyond. Every engagement is managed end-to-end, with accountability built in at every stage.
                </p>
                <p>
                  We don't just facilitate introductions. We own the delivery outcome — connecting the right specialist to the right problem, at the right time, with full transparency and performance tracking throughout.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition-all duration-300 shadow-md hover:shadow-lg group"
              >
                Work With Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </AnimatedSection>

            <AnimatedSection>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-3xl blur-2xl opacity-60" />
                <div className="relative bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                    alt="Head Held High team"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6 grid grid-cols-2 gap-4">
                    {[
                      { label: 'Founded', value: '2022' },
                      { label: 'Headquarters', value: 'Bengaluru, IN' },
                      { label: 'Team Size', value: '50+' },
                      { label: 'Client Satisfaction', value: '98%' },
                    ].map((item, i) => (
                      <div key={i} className="text-center p-3 bg-gray-50 rounded-xl">
                        <div className="text-lg font-bold text-teal-700">{item.value}</div>
                        <div className="text-xs text-gray-500 mt-0.5">{item.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What We Stand For</h2>
            <p className="text-gray-600">Principles that drive every vendor partnership, every client interaction, every service delivered.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <AnimatedSection key={i}>
                  <div className="h-full p-6 bg-white rounded-2xl border border-gray-200/60 hover:border-teal-400/50 hover:shadow-lg transition-all duration-300 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-teal-600" />
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Work With Us?</h2>
            <p className="text-white/80 text-lg mb-8">
              Whether you need a specialist for a complex project or a long-term B2B service partner, we deliver end-to-end.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-teal-700 font-bold rounded-xl hover:shadow-xl transition-all duration-300 group"
              >
                Get a Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/vendors"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/30 hover:bg-white/20 transition-all duration-300"
              >
                Browse Vendors
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
