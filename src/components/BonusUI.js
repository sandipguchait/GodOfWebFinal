import React from 'react';
import { Gift, Atom, Rocket, Cpu, Laptop, Image, MessageSquare } from 'lucide-react';

export default function BonusesUI() {
  return (
    <>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center mb-8 pt-10">
          <div className="relative mr-4">
            <Gift className="w-12 h-12 text-pink-500" />
            <div className="absolute inset-0 bg-pink-500 opacity-50 blur-md rounded-full"></div>
          </div>
          <h1 className="text-4xl font-bold">Bonuses</h1>
        </div>
        <p className="text-center text-emerald-400 text-xl mb-12">(Worth Rs. 15,000)</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bonuses.map((bonus, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-6 border border-emerald-400">
              <div className="flex items-start mb-4">
                {bonus.icon}
                <div className="ml-4">
                  <p className="font-semibold mb-2">{bonus.description}</p>
                  <p className="text-emerald-400 font-bold">{bonus.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

const bonuses = [
  {
    icon: <Atom className="w-10 h-10 text-white" />,
    description: "Become a internationally recognised certificate AI & ChatGPT Expert",
    value: "Priceless"
  },
  {
    icon: <Rocket className="w-10 h-10 text-white" />,
    description: "Get a Chance to Win 50+ Insanely Valuable not-so-obvious ChatGPT Prompts",
    value: "(Worth Rs. 5,000)"
  },
  {
    icon: <Cpu className="w-10 h-10 text-white" />,
    description: "Unlock Access to 150+ AI Tools with Real-Life Use Cases",
    value: "(Worth Rs. 3,000)"
  },
  {
    icon: <Laptop className="w-10 h-10 text-white" />,
    description: "Receive 20 Productivity Hacks Using ChatGPT to 10X Your Efficiency",
    value: "(Worth Rs. 3,000)"
  },
  {
    icon: <Image className="w-10 h-10 text-white" />,
    description: "Obtain a Workbook Covering Masterclass Topics for Future Reference",
    value: "(Worth Rs. 2,000)"
  },
  {
    icon: <MessageSquare className="w-10 h-10 text-white" />,
    description: "Discover 100+ Viral Post Ideas for LinkedIn",
    value: "(Worth Rs. 2,000)"
  }
]