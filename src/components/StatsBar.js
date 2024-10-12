import { ChevronDown } from 'lucide-react';

export default function StatisticsBar() {
    return (
        <>
            <h2 class="text-2xl sm:text-3xl font-bold text-center flex items-center justify-center">What you can expect
            <ChevronDown className="w-8 h-8 ml-2" />
            </h2>
            <div className="w-full max-w-4xl bg-gray-800 rounded-lg shadow-2xl overflow-hidden">
            <div className="flex flex-col sm:flex-row">
                <StatItem
                value="9.5 LPA"
                label="Average Package"
                />
                <div className="w-px bg-gray-700 my-4" />
                <StatItem
                value="120%"
                label="Salary Hike"
                />
                <div className="w-px bg-gray-700 my-4" />
                <StatItem
                value="38 LPA"
                label="Highest Package"
                />
            </div>
            </div>
        </>
    )
  }
  
  function StatItem({ value, label }) {
    return (
      <div className="flex-1 text-center p-6 shadow-lg bg-gray-800 rounded-lg">
        <div className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text">{value}</div>
        <div className="text-sm text-gray-400">{label}</div>
      </div>
    )
  }
