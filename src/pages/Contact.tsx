import { useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import ContactForm from '../components/contact/ContactForm';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'hello@headheldhigh.com', href: 'mailto:hello@headheldhigh.com' },
  { icon: Phone, label: 'Phone', value: '+1 (234) 567-890', href: 'tel:+1234567890' },
  { icon: MapPin, label: 'Office', value: '123 Business Ave, Suite 100' },
  { icon: Clock, label: 'Hours', value: 'Mon - Sat, 9:00 AM - 6:00 PM' },
];

export default function Contact() {
  const location = useLocation();
  const preselectedService = (location.state as { service?: string })?.service;

  return (
    <>
      <section className="pt-32 pb-20 sm:pb-28 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-40 right-0 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100/20 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-14">
            <div>
              <span className="inline-block px-4 py-1 bg-teal-50 text-teal-600 text-sm font-semibold rounded-full mb-4">
                Get in Touch
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Let's Discuss Your Requirements
              </h1>
              <p className="text-gray-500 leading-relaxed">
                Fill out the form below and our team will connect you with the right vendor for your project. Response guaranteed within 24 hours.
              </p>
            </div>

            <div className="hidden lg:block relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Contact us"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <ContactForm preselectedService={preselectedService} />
            </div>

            <div className="space-y-5">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                const content = (
                  <div className="flex items-start gap-4 bg-white border border-gray-100 rounded-xl p-5 hover:shadow-md transition-shadow duration-300">
                    <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-0.5">{info.label}</p>
                      <p className="text-gray-900 font-medium text-sm">{info.value}</p>
                    </div>
                  </div>
                );

                return info.href ? (
                  <a key={info.label} href={info.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={info.label}>{content}</div>
                );
              })}

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 text-white mt-8">
                <h3 className="font-semibold text-lg mb-3">Why Contact Us?</h3>
                <ul className="space-y-2.5 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-1.5 flex-shrink-0" />
                    Free consultation with no obligation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-1.5 flex-shrink-0" />
                    Matched with verified, experienced vendors
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-1.5 flex-shrink-0" />
                    Dedicated support throughout your project
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-1.5 flex-shrink-0" />
                    Competitive pricing across all services
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
