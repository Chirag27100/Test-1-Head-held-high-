import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'CEO, TechStart Solutions',
    content: 'HOC connected us with the right event team for our product launch in under 48 hours. 200 attendees, zero hiccups, full A/V and catering handled. We just showed up.',
    rating: 5,
    service: 'Event Management',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
    outcome: '200-person launch, zero issues',
  },
  {
    name: 'Priya Sharma',
    role: 'Operations Head, BuildPro',
    content: 'We needed a civil contractor fast. HOC matched us in 2 days — the project came in 8% under budget and on schedule. That accountability is rare in Bengaluru.',
    rating: 5,
    service: 'Turnkey Construction',
    avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100',
    outcome: '8% under budget, on-time delivery',
  },
  {
    name: 'Meera Nair',
    role: 'Homeowner, Bengaluru',
    content: 'VK Interiors transformed my 1,200 sq ft flat in 6 weeks — on the exact budget we agreed. HOC managed the whole engagement so I never had to chase anyone.',
    rating: 5,
    service: 'Interior Design',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
    outcome: '6 weeks, budget-exact delivery',
  },
  {
    name: 'Amit Desai',
    role: 'Director, Nexus Warehousing',
    content: 'Creativee Solutions handled our 18,000 sq ft warehouse build end-to-end. HOC was the single point of contact — no follow-ups, no chasing. First time that's happened.',
    rating: 5,
    service: 'Turnkey Construction',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
    outcome: '18,000 sq ft delivered, zero follow-ups',
  },
  {
    name: 'Sarah Thompson',
    role: 'CFO, GlobalTrade Inc',
    content: 'Dakshin helped us restructure ₹2.1Cr in liabilities and secure a ₹75L business loan in 3 weeks. Our tax liability dropped by 22% that year. HOC made the intro seamless.',
    rating: 5,
    service: 'Financial Services',
    avatar: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=100',
    outcome: '22% tax reduction, ₹75L loan in 3 weeks',
  },
  {
    name: 'Ananya Reddy',
    role: 'HR Manager, TechCorp',
    content: 'The Virgin Valley planned our 40-person Coorg retreat — flights, resort, itinerary, activities. Everything was confirmed 3 days after briefing HOC. Truly effortless.',
    rating: 5,
    service: 'Travel Consultants',
    avatar: 'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=100',
    outcome: '40-person retreat, 3-day turnaround',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const { elementRef, hasIntersected } = useIntersectionObserver();
  const perPage = 2;
  const pages = Math.ceil(testimonials.length / perPage);

  useEffect(() => {
    const t = setInterval(() => setCurrent(p => (p + 1) % pages), 5000);
    return () => clearInterval(t);
  }, [pages]);

  const visible = testimonials.slice(current * perPage, (current + 1) * perPage);

  return (
    <section ref={elementRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-50 text-amber-700 rounded-full mb-5 border border-amber-200/60">
            <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
            <span className="text-sm font-semibold">Client Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Real People. Real Results.</h2>
          <p className="text-gray-500 text-lg">From homeowners to enterprise teams — here's what our clients say about working with Head Held High.</p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {visible.map((t, i) => (
            <div
              key={`${current}-${i}`}
              className={`relative bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-xl hover:border-teal-200 transition-all duration-500 hover:-translate-y-1 ${hasIntersected ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-teal-100" />
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">"{t.content}"</p>
              {t.outcome && (
                <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 bg-teal-50 text-teal-700 text-xs font-semibold rounded-full border border-teal-200">
                  ✓ {t.outcome}
                </div>
              )}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover ring-2 ring-teal-100" />
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-teal-50 text-teal-700 text-xs font-semibold rounded-full border border-teal-200/50">
                  {t.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex items-center justify-center gap-2 mb-14">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-teal-600' : 'w-2 bg-gray-300 hover:bg-gray-400'}`}
            />
          ))}
        </div>

        {/* Stats strip */}
        <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl p-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-white">
          {[
            { value: '500+', label: 'Happy Clients' },
            { value: '2000+', label: 'Projects Delivered' },
            { value: '98%', label: 'Satisfaction Rate' },
            { value: '24hrs', label: 'Avg Response Time' },
          ].map((s, i) => (
            <div key={i}>
              <div className="text-3xl font-bold mb-1">{s.value}</div>
              <div className="text-teal-100 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
