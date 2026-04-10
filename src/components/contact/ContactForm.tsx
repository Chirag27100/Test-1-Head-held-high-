import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { services } from '../../data/services';

interface ContactFormProps {
  preselectedService?: string;
}

export default function ContactForm({ preselectedService }: ContactFormProps) {
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    phone: '',
    company: '',
    service_interest: preselectedService || '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    await new Promise((res) => setTimeout(res, 800));
    setStatus('success');
    setForm({ full_name: '', email: '', phone: '', company: '', service_interest: '', message: '' });
  };

  if (status === 'success') {
    return (
      <div className="bg-white rounded-xl border-2 border-gray-200 p-10 text-center">
        <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="w-8 h-8 text-teal-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">Request Received</h3>
        <p className="text-gray-600 max-w-md mx-auto mb-6">
          Thank you for your inquiry. Our vendor matching team will review your requirements and contact you within 24 hours with qualified vendor options.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl border-2 border-gray-200 p-8">

      <div className="grid sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label htmlFor="full_name" className="block text-sm font-medium text-gray-700 mb-1.5">
            Full Name *
          </label>
          <input
            id="full_name"
            name="full_name"
            type="text"
            required
            value={form.full_name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
            Email Address *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
            placeholder="john@company.com"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
            placeholder="+1 (234) 567-890"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1.5">
            Company Name
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={form.company}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
            placeholder="Acme Corp"
          />
        </div>
      </div>

      <div className="mb-5">
        <label htmlFor="service_interest" className="block text-sm font-medium text-gray-700 mb-1.5">
          Service Interest *
        </label>
        <select
          id="service_interest"
          name="service_interest"
          required
          value={form.service_interest}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236b7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-[length:16px] bg-[right_16px_center] bg-no-repeat"
        >
          <option value="">Select a service</option>
          {services.map((s) => (
            <option key={s.slug} value={s.name}>{s.name}</option>
          ))}
          <option value="Other">Other / Not Sure</option>
        </select>
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
          Tell us about your requirements *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={form.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all resize-none"
          placeholder="Describe your project, timeline, budget, and any specific requirements..."
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <>
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Submitting Request...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Request Vendor Match
          </>
        )}
      </button>

      <p className="text-sm text-gray-500 text-center mt-4">
        We respect your privacy. Your information is only used to match you with appropriate vendors.
      </p>
    </form>
  );
}
