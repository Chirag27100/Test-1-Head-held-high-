import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { GradientMesh, DecorativeShapes } from '../decorative/GradientMesh';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'CEO, TechStart Solutions',
    content: 'Head Held High connected us with an amazing event management team for our product launch. The entire process was seamless, and the results exceeded our expectations. Highly recommended!',
    rating: 5,
    service: 'Event Management',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
  },
  {
    name: 'Priya Sharma',
    role: 'Operations Head, BuildPro',
    content: 'Finding reliable civil contractors was always a challenge until we discovered Head Held High. They matched us with certified professionals who delivered our project on time and within budget.',
    rating: 5,
    service: 'Civil Construction',
    avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
  },
  {
    name: 'Amit Desai',
    role: 'Director, Nexus Warehousing',
    content: 'Creativee Solutions delivered our warehouse construction on time and within budget. HOC managed the entire coordination seamlessly — we never had to chase anyone.',
    rating: 5,
    service: 'Construction',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
  },
  {
    name: 'Sarah Thompson',
    role: 'CFO, GlobalTrade Inc',
    content: 'Their finance advisory team helped us optimize our tax strategy and saved us significant costs. The expertise and attention to detail were outstanding.',
    rating: 5,
    service: 'Finance',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
  },
  {
    name: 'Michael Chen',
    role: 'Director, Atlas Enterprises',
    content: 'Professional, reliable, and results-driven. Our interior design project was completed ahead of schedule with exceptional quality.',
    rating: 5,
    service: 'Interior Design',
    avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
  },
  {
    name: 'Ananya Reddy',
    role: 'HR Manager, TechCorp',
    content: 'The travel agency they recommended made our corporate retreat planning effortless. Great prices, excellent service!',
    rating: 5,
    service: 'Travel',
    avatar: 'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { elementRef, hasIntersected } = useIntersectionObserver();

  const itemsPerPage = 2;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPages);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalPages]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
    setIsAutoPlaying(false);
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <section ref={elementRef} className="relative py-20 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      <GradientMesh />
      <DecorativeShapes />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="gradient-text text-3xl sm:text-4xl font-bold mb-4">
            Client Success Stories
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Real businesses, real results. See how we've helped companies like yours connect with the right service partners.
          </p>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {visibleTestimonials.map((testimonial, idx) => (
              <div
                key={`${currentIndex}-${idx}`}
                className={`relative bg-gradient-to-br from-white/80 to-teal-50/30 backdrop-blur-lg rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/60 hover:border-teal-200/60 group ${
                  hasIntersected ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-600/5 to-cyan-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Quote className="absolute top-6 right-6 w-12 h-12 text-teal-200 group-hover:text-teal-300 transition-colors" />

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-amber-400 text-amber-400 transition-all"
                      style={{
                        animation: hasIntersected ? 'pulse 2s ease-in-out infinite' : 'none',
                        animationDelay: `${i * 100}ms`,
                      }}
                    />
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-teal-200/50 group-hover:ring-teal-400/50 transition-all"
                    />
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                      <p className="text-xs text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-teal-100/60 to-cyan-100/40 border border-teal-300/40 text-teal-700 text-xs font-medium rounded-full group-hover:border-teal-400/60 transition-all">
                      {testimonial.service}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mb-12">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-100 to-gray-50 hover:from-teal-500 hover:to-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center group shadow-sm hover:shadow-lg border border-gray-200/50 hover:border-transparent"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrentIndex(idx);
                    setIsAutoPlaying(false);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? 'w-8 bg-gradient-to-r from-teal-500 to-cyan-500' : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial set ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-100 to-gray-50 hover:from-teal-500 hover:to-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center group shadow-sm hover:shadow-lg border border-gray-200/50 hover:border-transparent"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { value: '500+', label: 'Active Clients' },
            { value: '1,200+', label: 'Successful Projects' },
            { value: '98%', label: 'Client Retention' },
          ].map((stat, idx) => (
            <div
              key={stat.label}
              className={`relative text-center bg-gradient-to-br from-white to-teal-50/30 border border-gray-200/60 hover:border-teal-300/60 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group overflow-hidden ${
                hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-teal-400/10 to-cyan-400/5 rounded-full blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative z-10">
                <p className="gradient-text text-4xl font-bold mb-2">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
