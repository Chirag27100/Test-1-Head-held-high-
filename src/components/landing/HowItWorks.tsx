import { ClipboardList, UserCheck, Rocket } from 'lucide-react';

const steps = [
  {
    icon: ClipboardList,
    step: '01',
    title: 'Share Your Requirement',
    description: 'Submit your project scope, domain, timeline, and budget via our contact form or directly through the chat assistant. Takes under 3 minutes.',
  },
  {
    icon: UserCheck,
    step: '02',
    title: 'We Match the Right Specialist',
    description: 'Our team reviews your requirement and assigns the best-fit Tier 1 specialist from our in-house approved network — within 24 hours.',
  },
  {
    icon: Rocket,
    step: '03',
    title: 'End-to-End Delivery Begins',
    description: 'The specialist engages with full HOC oversight. We manage communication, milestones, and accountability from first brief to final delivery.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-50 text-teal-700 rounded-full mb-4 border border-teal-200/60">
            <span className="text-sm font-semibold">How It Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            From Requirement to Resolution in 3 Steps
          </h2>
          <p className="text-gray-500 text-lg">
            No directories. No cold outreach. No wasted time. Just a direct line to a qualified specialist who can solve your problem.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-12 left-[22%] right-[22%] h-px bg-gradient-to-r from-teal-300/50 via-teal-400/80 to-teal-300/50" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="relative bg-white rounded-2xl border border-gray-200 p-8 hover:border-teal-300 hover:shadow-xl transition-all duration-300 group text-center">
                <div className="relative w-20 h-20 mx-auto mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                    <Icon className="w-9 h-9 text-teal-600" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom callout */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Average time from enquiry to specialist engagement:{' '}
            <span className="font-bold text-teal-600">under 24 hours</span>
          </p>
        </div>
      </div>
    </section>
  );
}
