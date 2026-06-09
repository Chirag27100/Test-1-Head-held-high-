import { Target, Users, Zap, FileCheck } from 'lucide-react';

const benefits = [
  {
    icon: Target,
    title: 'Precision Matching',
    description: 'Our proprietary matching algorithm connects you with vendors who specialize in your specific industry and requirements.',
  },
  {
    icon: Users,
    title: 'Pre-Vetted Network',
    description: 'Every vendor undergoes rigorous background checks, certification verification, and performance reviews before joining our network.',
  },
  {
    icon: Zap,
    title: 'Streamlined Process',
    description: 'From initial inquiry to project completion, our platform simplifies vendor selection and management at every step.',
  },
  {
    icon: FileCheck,
    title: 'Quality Assurance',
    description: 'We monitor every project with milestone tracking, quality reviews, and satisfaction guarantees to ensure excellence.',
  },
];

export default function ValueProposition() {
  return (
    <section className="py-20 bg-white relative">
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-teal-100/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-cyan-100/20 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Partner With Us
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We eliminate the guesswork from vendor selection with a proven, data-driven approach that saves time and delivers results.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div key={benefit.title} className="flex gap-4">
                    <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{benefit.title}</h3>
                      <p className="text-sm text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Team collaboration and business partnership"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-full blur-2xl"></div>
          </div>
        </div>


        <div className="mt-16 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl p-12 text-center text-white">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            98% Client Satisfaction Rate
          </h3>
          <p className="text-lg text-teal-50 mb-6 max-w-2xl mx-auto">
            Our commitment to quality and transparency has earned us the trust of hundreds of businesses across diverse industries.
          </p>
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div>
              <p className="text-4xl font-bold mb-2">500+</p>
              <p className="text-teal-100 text-sm">Active Clients</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">1,200+</p>
              <p className="text-teal-100 text-sm">Completed Projects</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">50+</p>
              <p className="text-teal-100 text-sm">Certified Vendors</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
