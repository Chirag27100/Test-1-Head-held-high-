import { ClipboardList, UserCheck, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: ClipboardList,
    step: '01',
    title: 'Tell Us What You Need',
    description: 'Fill out a quick form or chat with our assistant. Describe your requirement — no matter how big, small, or complex. It takes under 3 minutes.',
    img: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: UserCheck,
    step: '02',
    title: 'We Match the Right Specialist',
    description: 'Our team reviews your requirement and assigns a verified, in-house approved expert who specialises in exactly what you need — within 24 hours.',
    img: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Rocket,
    step: '03',
    title: 'Your Work Gets Done',
    description: 'The specialist gets to work with full HOC oversight. We stay involved so delivery happens on time, on budget, and to your satisfaction.',
    img: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-50 text-teal-700 rounded-full mb-5 border border-teal-200/60">
            <span className="text-sm font-semibold">How It Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            From Requirement to Result — In 3 Simple Steps
          </h2>
          <p className="text-gray-500 text-lg">
            No hunting, no cold calls, no guesswork. We handle the expert sourcing so you can focus on what matters.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-2xl hover:border-teal-200 transition-all duration-300">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img src={step.img} alt={step.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {step.step}
                  </div>
                </div>
                {/* Text */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 bg-teal-50 rounded-lg flex items-center justify-center group-hover:bg-teal-100 transition-colors">
                      <Icon className="w-5 h-5 text-teal-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 group-hover:text-teal-600 transition-colors">{step.title}</h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-teal-500/30 transition-all duration-300 hover:-translate-y-1 group"
          >
            Get Started — It's Free
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="text-gray-400 text-sm mt-3">No commitment. Response within 24 hours.</p>
        </div>
      </div>
    </section>
  );
}
