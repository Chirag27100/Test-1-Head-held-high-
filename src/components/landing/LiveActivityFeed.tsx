import { useEffect, useState } from 'react';
import { CheckCircle, Clock } from 'lucide-react';

interface Activity {
  id: string;
  vendor: string;
  service: string;
  location: string;
  action: string;
  timeAgo: string;
}

const activities: Activity[] = [
  { id: '1', vendor: 'TechVista Industries', service: 'Industrial Visit', location: 'Mumbai', action: 'just got hired', timeAgo: '2 min ago' },
  { id: '2', vendor: 'GreenCycle Solutions', service: 'Waste Management', location: 'Delhi', action: 'completed a project', timeAgo: '5 min ago' },
  { id: '3', vendor: 'Elite Events & Co', service: 'Event Management', location: 'Bangalore', action: 'just got hired', timeAgo: '8 min ago' },
  { id: '4', vendor: 'Prime Property Advisors', service: 'Property', location: 'Pune', action: 'received a 5-star review', timeAgo: '12 min ago' },
  { id: '5', vendor: 'BuildRight Contractors', service: 'Civil', location: 'Chennai', action: 'just got hired', timeAgo: '15 min ago' },
  { id: '6', vendor: 'DesignScape Interiors', service: 'Interior', location: 'Hyderabad', action: 'completed a project', timeAgo: '18 min ago' },
  { id: '7', vendor: 'Wanderlust Travels', service: 'Travel', location: 'Delhi', action: 'just got hired', timeAgo: '22 min ago' },
  { id: '8', vendor: 'LegalPro Services', service: 'Para-legal', location: 'Mumbai', action: 'received a 5-star review', timeAgo: '25 min ago' },
];

export default function LiveActivityFeed() {
  const [visibleActivities, setVisibleActivities] = useState<Activity[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setVisibleActivities([activities[0], activities[1], activities[2]]);
    setCurrentIndex(3);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleActivities((prev) => {
        const newActivity = activities[currentIndex % activities.length];
        return [newActivity, ...prev.slice(0, 2)];
      });
      setCurrentIndex((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-gray-200 rounded-full mb-4">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-sm font-semibold text-gray-700">Live Activity</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Real-Time Vendor Activity
            </h2>
            <p className="text-gray-500 text-sm">
              See what's happening on the platform right now
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 space-y-3">
            {visibleActivities.map((activity, idx) => (
              <div
                key={`${activity.id}-${idx}`}
                className={`flex items-start gap-4 p-4 rounded-xl transition-all duration-500 ${
                  idx === 0
                    ? 'bg-teal-50 border-2 border-teal-200 animate-fade-in'
                    : 'bg-gray-50 border border-gray-100'
                }`}
                style={{
                  animation: idx === 0 ? 'slideDown 0.5s ease-out' : 'none',
                }}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                  activity.action.includes('hired')
                    ? 'bg-gradient-to-br from-teal-400 to-cyan-500'
                    : activity.action.includes('completed')
                    ? 'bg-gradient-to-br from-blue-400 to-teal-500'
                    : 'bg-gradient-to-br from-amber-400 to-orange-500'
                }`}>
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900">
                    <span className="font-semibold">{activity.vendor}</span>
                    {' '}<span className="text-gray-600">{activity.action}</span>
                  </p>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="inline-block px-2 py-0.5 bg-white border border-gray-200 text-xs font-medium text-gray-600 rounded">
                      {activity.service}
                    </span>
                    <span className="text-xs text-gray-500">{activity.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-xs text-gray-400 flex-shrink-0">
                  <Clock className="w-3.5 h-3.5" />
                  {activity.timeAgo}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-gray-500 mt-4">
            Platform activity updates every few seconds
          </p>
        </div>
      </div>

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </section>
  );
}
