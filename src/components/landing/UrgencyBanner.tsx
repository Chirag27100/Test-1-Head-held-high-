import { Clock, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function UrgencyBanner() {
  return (
    <section className="py-4 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-sm sm:text-base">Limited Time: FREE Consultation Worth $200</p>
              <p className="text-xs text-amber-50">For the first 50 inquiries this month - Only 12 spots left!</p>
            </div>
          </div>
          <Link
            to="/contact"
            className="flex-shrink-0 px-6 py-2.5 bg-white text-orange-600 font-bold rounded-lg hover:bg-amber-50 transition-all duration-300 shadow-lg hover:shadow-xl text-sm whitespace-nowrap"
          >
            Claim Your Spot Now
          </Link>
        </div>
      </div>
    </section>
  );
}

export function LiveActivityBanner() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-6 h-6 text-teal-600" />
            <h3 className="text-xl font-bold text-gray-900">Recent Activity</h3>
            <span className="ml-auto flex items-center gap-2 text-sm text-gray-500">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Live
            </span>
          </div>

          <div className="space-y-3">
            {[
              { name: 'Neha K.', service: 'Event Management', time: '2 minutes ago', location: 'Mumbai' },
              { name: 'Vikram S.', service: 'Finance Advisory', time: '8 minutes ago', location: 'Bangalore' },
              { name: 'Anita M.', service: 'Interior Design', time: '15 minutes ago', location: 'Delhi' },
              { name: 'Rohan P.', service: 'Civil Construction', time: '23 minutes ago', location: 'Pune' },
            ].map((activity, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between py-3 px-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-teal-200 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 font-semibold text-sm">
                    {activity.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      <span className="font-semibold">{activity.name}</span> requested a quote for{' '}
                      <span className="text-teal-600 font-semibold">{activity.service}</span>
                    </p>
                    <p className="text-xs text-gray-500">
                      {activity.location} • {activity.time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 mt-6">
            <span className="font-semibold text-teal-600">37 businesses</span> got matched with vendors in the last 24 hours
          </p>
        </div>
      </div>
    </section>
  );
}
