import { ShieldCheck, Users, Zap, Headphones as HeadphonesIcon } from 'lucide-react';

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Verified Vendors',
    description: 'Every vendor on our platform is thoroughly vetted and verified for quality, reliability, and track record.',
  },
  {
    icon: Users,
    title: 'One-Stop Solution',
    description: 'Access 10+ service categories through a single platform. No need to search multiple sources for different needs.',
  },
  {
    icon: Zap,
    title: 'Fast Turnaround',
    description: 'Our streamlined process connects you with the right vendor quickly, so your projects start without delay.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Dedicated Support',
    description: 'A dedicated relationship manager ensures smooth communication between you and the vendor at every stage.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5">
              A Trusted Platform Built on Quality and Transparency
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Our rigorous vendor vetting process and commitment to service excellence ensures you work with the best professionals in every category.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              {reasons.map((reason) => {
                const Icon = reason.icon;
                return (
                  <div key={reason.title} className="bg-white rounded-xl p-5 border border-gray-100 hover:shadow-md transition-shadow duration-300">
                    <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-teal-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1.5">{reason.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{reason.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
                alt="Team collaboration"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-5 border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg font-bold">10+</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Service Categories</p>
                  <p className="text-xs text-gray-500">Across multiple industries</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 border-2 border-white flex items-center justify-center">
                      <span className="text-white text-xs font-bold">{i}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-900">500+ Clients</p>
                  <p className="text-xs text-gray-500">Trust VendorHub</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
