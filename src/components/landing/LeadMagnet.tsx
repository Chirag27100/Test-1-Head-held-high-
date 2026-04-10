import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Phone, Mail, CalendarCheck } from 'lucide-react';

export default function LeadMagnet() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-950 via-gray-900 to-teal-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — value proposition */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-500/10 border border-teal-500/30 rounded-full mb-6">
              <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-teal-300">Free. No Obligation.</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              Tell Us Your Problem.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                We'll Connect the Right Specialist.
              </span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Whether you have a complex construction project, a legal compliance challenge, a financial restructuring need, or anything in between — share it with us. We'll identify the right Tier 1 specialist from our network and get back to you within 24 hours.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { icon: CalendarCheck, text: 'Free initial consultation — no commitment required' },
                { icon: ArrowRight, text: 'Specialist matched to your exact requirement' },
                { icon: ArrowRight, text: 'End-to-end delivery managed by HOC' },
                { icon: ArrowRight, text: 'Transparent pricing, no hidden referral fees' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <item.icon className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-teal-500/30 transition-all duration-300 hover:-translate-y-1 group"
              >
                Submit Your Requirement
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right — 3 contact options */}
          <div className="space-y-4">
            <p className="text-gray-500 text-sm font-semibold uppercase tracking-widest mb-2">Or reach us directly</p>

            {[
              {
                icon: MessageCircle,
                title: 'Chat With Our Assistant',
                desc: 'Get instant answers about our services, vendors, and process. Our AI assistant captures your requirement and routes it to our team.',
                action: 'Open Chat',
                color: 'from-teal-600 to-cyan-600',
                isChatTrigger: true,
              },
              {
                icon: Phone,
                title: 'Call Us Directly',
                desc: 'Speak to a HOC team member who can understand your requirement and suggest the right specialist immediately.',
                action: 'Call Now',
                color: 'from-gray-700 to-gray-800',
                href: 'tel:+911234567890',
              },
              {
                icon: Mail,
                title: 'Send an Email',
                desc: 'Detailed requirement? Email us with your project scope, timeline, and budget. We respond within 4 business hours.',
                action: 'Email Us',
                color: 'from-gray-700 to-gray-800',
                href: 'mailto:hello@headheldhigh.com',
              },
            ].map((card, i) => {
              const Icon = card.icon;
              const inner = (
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-bold mb-1">{card.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed mb-3">{card.desc}</p>
                    <span className="text-teal-400 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                      {card.action} <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              );

              if (card.isChatTrigger) {
                return (
                  <button
                    key={i}
                    data-open-chat="true"
                    onClick={() => {
                      const el = document.querySelector('[data-chatbot-trigger]') as HTMLButtonElement;
                      el?.click();
                    }}
                    className="w-full group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-teal-500/30 transition-all duration-300 text-left"
                  >
                    {inner}
                  </button>
                );
              }

              return (
                <a
                  key={i}
                  href={card.href}
                  className="block group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-teal-500/30 transition-all duration-300"
                >
                  {inner}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
