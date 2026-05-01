import { ShieldCheck, Users, Layers, HeadphonesIcon, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Every Specialist is Personally Verified',
    description: 'We don\'t just list vendors. Every expert on our platform is individually approved by the HOC team — credentials, track record, and domain expertise confirmed.',
  },
  {
    icon: Layers,
    title: 'One Number for Every Need',
    description: 'Construction, legal, finance, interiors, travel and more — contact us once and we route your requirement to the right expert. No more searching across multiple platforms.',
  },
  {
    icon: HeadphonesIcon,
    title: 'We Stay Involved Till It\'s Done',
    description: 'Unlike directories that disappear after a referral, we actively manage communication and delivery — so your project finishes the way you imagined it.',
  },
  {
    icon: Users,
    title: 'For Everyone — Not Just Businesses',
    description: 'Whether you\'re a homeowner needing an interior designer, a family planning a trip, or a company managing a construction project — we serve you equally.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-50 text-teal-700 rounded-full mb-6 border border-teal-200/60">
              <span className="text-sm font-semibold">Why Head Held High</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5 leading-tight">
              We Don't Just Connect You.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">We Make Sure It Gets Done.</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-10">
              Most platforms hand you a list of vendors and leave. Head Held High stays in the picture — matching the right expert, managing the engagement, and ensuring your outcome. That's the difference.
            </p>
            <div className="space-y-5">
              {reasons.map((r) => {
                const Icon = r.icon;
                return (
                  <div key={r.title} className="flex gap-4 group">
                    <div className="w-11 h-11 bg-white border border-teal-100 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm group-hover:bg-teal-600 group-hover:border-teal-600 transition-all">
                      <Icon className="w-5 h-5 text-teal-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1 text-sm">{r.title}</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">{r.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-10 px-7 py-3.5 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 hover:shadow-lg transition-all group"
            >
              Talk to Us Today
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right — stacked images */}
          <div className="relative hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden h-64 shadow-xl border border-gray-100">
                <img src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Team meeting" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden h-64 shadow-xl border border-gray-100 mt-8">
                <img src="https://images.pexels.com/photos/7578808/pexels-photo-7578808.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Specialist at work" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden h-52 shadow-xl border border-gray-100 -mt-4">
                <img src="https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Handshake" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden h-52 shadow-xl border border-gray-100 mt-4">
                <img src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Planning" className="w-full h-full object-cover" />
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl border border-gray-100 px-6 py-4 z-10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">18+</div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Years of Experience</p>
                  <p className="text-xs text-gray-500">Behind every placement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
