export default function SocialProofBar() {
  return (
    <section className="bg-gray-950 border-y border-white/5 py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Trusted for</span>
          {[
            'B2B Enterprises',
            'Real Estate Developers',
            'Construction Firms',
            'Corporate Legal Teams',
            'Finance Departments',
            'Hospitality Groups',
            'Manufacturing Units',
          ].map((label, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
              <span className="text-sm font-medium text-gray-400">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
