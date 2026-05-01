import { Star } from 'lucide-react';

export default function SocialProofBar() {
  return (
    <section className="bg-white border-b border-gray-100 py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          <div className="flex items-center gap-1.5">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
            <span className="text-sm font-semibold text-gray-700 ml-1">4.8/5</span>
            <span className="text-sm text-gray-400 ml-1">from 300+ clients</span>
          </div>
          <div className="w-px h-5 bg-gray-200 hidden sm:block" />
          {[
            'Individuals & Families',
            'Small Businesses',
            'Enterprises & Corporates',
            'Real Estate Developers',
            'Startups',
          ].map((label, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0" />
              <span className="text-sm text-gray-500 font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
