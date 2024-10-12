import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const PremiumSalaryStatisticsCard = () => {
  return (
    <div className='flex justify-center'>
      <Card className="w-full max-w-md bg-gradient-to-br from-gray-800 to-gray-900 text-white shadow-xl border-0">
        <CardHeader>
          <CardTitle className="text-lg text-center font-semibold text-gray-200">
            FrontEnd Engineer Salary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center mb-6">
            <div className="text-5xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text">
              ₹ 12,85,258
            </div>
            <div className="text-sm text-gray-400 mt-1">per year</div>
            <div className="text-sm text-gray-400 mt-1">Salary (INR)</div>
          </div>
          
          <div className="space-y-4">
            <Progress value={40} className="h-2 bg-gray-700" indicatorclassname="bg-gradient-to-r from-orange-400 to-teal-400" />
            
            <div className="flex justify-between text-sm">
              <div className="text-center">
                <div className="font-semibold text-orange-400">10%</div>
                <div className="text-gray-400">₹393k</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-teal-400">MEDIAN</div>
                <div className="text-gray-400">₹1285k</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-blue-400">90%</div>
                <div className="text-gray-400">₹20L</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default PremiumSalaryStatisticsCard
