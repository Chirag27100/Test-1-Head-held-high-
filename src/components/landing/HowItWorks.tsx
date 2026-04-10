import { FileText, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { GradientMeshWarm, DecorativeShapes } from '../decorative/GradientMesh';

const steps = [
  {
    icon: FileText,
    step: '01',
    title: 'Submit Your Requirements',
    description: 'Complete our detailed request form specifying your project scope, timeline, and budget parameters.',
  },
  {
    icon: Users,
    step: '02',
    title: 'Receive Vetted Matches',
    description: 'Our team reviews your needs and matches you with 3-5 pre-qualified vendors from our certified network.',
  },
  {
    icon: CheckCircle,
    step: '03',
    title: 'Compare & Select',
    description: 'Review vendor profiles, proposals, and credentials. Choose the best fit and begin your project with confidence.',
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      <GradientMeshWarm />
      <DecorativeShapes />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="gradient-text text-3xl sm:text-4xl font-bold mb-4">
            Our Vendor Matching Process
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            A structured, transparent approach to connecting you with the right service professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-20 left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-teal-400/50 to-transparent" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={step.step} className="relative text-center group">
                <div className="absolute -inset-4 bg-gradient-to-b from-teal-100/20 to-cyan-100/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                <div className="relative z-10 w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-white to-teal-50/30 border-4 border-teal-600/60 rounded-full flex items-center justify-center group-hover:border-teal-600 group-hover:shadow-xl transition-all">
                  <Icon className="w-10 h-10 text-teal-600" />
                </div>
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg z-20 shadow-lg group-hover:scale-110 transition-transform">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
                {idx < 2 && (
                  <div className="hidden md:flex absolute top-20 -right-6 text-teal-400/40">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
