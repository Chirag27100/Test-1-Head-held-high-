import { TrendingUp, Award, Clock, Target } from 'lucide-react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { useCountUp } from '../../hooks/useCountUp';

const stats = [
  { value: 11, suffix: '+', label: 'Service Categories', icon: Target, color: 'from-teal-400 to-cyan-400' },
  { value: 50, suffix: '+', label: 'Verified Vendors', icon: Award, color: 'from-cyan-400 to-blue-400' },
  { value: 1200, suffix: '+', label: 'Projects Delivered', icon: TrendingUp, color: 'from-blue-400 to-teal-400' },
  { value: 24, suffix: 'hrs', label: 'Response Time', icon: Clock, color: 'from-teal-400 to-emerald-400' },
];

function AnimatedCounter({ target, suffix, start }: { target: number; suffix: string; start: boolean }) {
  const count = useCountUp(target, 2000, start);

  return (
    <span className="text-3xl sm:text-5xl font-bold">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function StatsSection() {
  const { elementRef, hasIntersected } = useIntersectionObserver();

  return (
    <section ref={elementRef} className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Numbers That Speak for Themselves
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            Proven track record of connecting businesses with the right vendors
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`text-center group transition-all duration-500 ${
                  hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 mb-4 group-hover:scale-125 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-2xl group-hover:shadow-teal-500/20">
                  <Icon className={`w-8 h-8 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`} style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text' }} />
                </div>
                <div className={`bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} start={hasIntersected} />
                </div>
                <p className="text-sm text-gray-400 font-medium">{stat.label}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl hover:shadow-teal-500/10 transition-all group">
          <p className="text-gray-200 text-lg mb-4">
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent font-bold">98% of our clients</span> would recommend us to their network
          </p>
          <div className="flex items-center justify-center gap-8 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
            <span className="group-hover:text-teal-400 transition-colors">BBB Accredited</span>
            <span className="w-1 h-1 bg-gray-600 rounded-full" />
            <span className="group-hover:text-cyan-400 transition-colors">ISO Certified Partners</span>
            <span className="w-1 h-1 bg-gray-600 rounded-full" />
            <span className="group-hover:text-teal-400 transition-colors">Industry Vetted</span>
          </div>
        </div>
      </div>
    </section>
  );
}
