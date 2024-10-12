"use client"
import { useRouter} from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import { ArrowDown, CheckCircle, Star , GraduationCap} from 'lucide-react';
import ReviewsSection from '../../../components/Review-landing';
import PremiumSalaryStatisticsCard from '../../../components/SalaryStatsCard';
import WhatWillYouGet from '../../../components/WhatWillYouGetCard';
import StatsCard from '../../../components/StatsBar';
import BonusesUI from '../../../components/BonusUI';

const GuidePage = ({ params }) => {
  const router = useRouter();
  const { slug } = params;

  const originalPrice = 599; // Original price
  const discountedPrice = 299; // Discounted price
  const percentageSaved = Math.round(((originalPrice - discountedPrice) / originalPrice) * 100); // Calculate percentage saved


  return (
    <div className="min-h-screen bg-[#181c31] text-white flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-4xl w-full space-y-8">
        <p className="text-[#4ADE80] text-xs sm:text-sm font-medium text-center">
          FOR DEVELOPERS WHO WANT TO STAND OUT AND BECOME IRREPLACEABLE
        </p>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center leading-tight">
          Become a top 1% <span className="text-[#4D9CFF]">Next.js 14</span> <br className="hidden sm:inline" />
          developer in only one course
        </h1>
    
        <div className="bg-gray-900 text-white py-3 px-4 sm:px-6 flex items-center justify-center">
            <GraduationCap className="w-6 h-6 text-emerald-400 mr-2" />
            <p className="text-sm sm:text-base font-medium">
              <span className="text-emerald-400 font-bold">976+ developers</span> bought this week
            </p>
        </div>
        
        <div className="relative w-full aspect-[16/9] mt-8 sm:mt-12">
          <Image
            src="/placeholder.svg"
            alt="Next.js 14 Course Illustration"
            fill
            className="object-contain"
          />
        </div>
        
        <div className="flex items-center justify-center space-x-2 text-[#4ADE80]">
          <div className="w-2 h-2 bg-[#4ADE80] rounded-full"></div>
          <p className="text-xs sm:text-sm">
            Up to date: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
        
        <div className="text-center flex flex-col items-center justify-center space-y-6">
          <div className="rounded-lg bg-card w-full max-w-md bg-gradient-to-br from-gray-800 to-gray-900 text-white shadow-xl border-0 py-5">
            <p className="text-2xl font-bold mb-2">Limited Time Offer ⚡</p>
            <div className="flex justify-center items-center space-x-4">
              <span className="text-gray-400 line-through text-xl">₹{originalPrice}</span>
              <span className="text-4xl font-bold text-[#4D9CFF]">₹{discountedPrice}</span>
            </div>
            <p className="text-[#4ADE80] font-semibold mt-2">Save {percentageSaved}% Today!</p>
            <button className={`mt-4 px-8 py-4 bg-gradient-to-r from-[#4ADE80] to-[#2B7A4D] rounded-full text-white font-bold text-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#4ADE80] focus:ring-opacity-50`}>
              Get Yours Now!
            </button>
            
            <div className="flex items-center justify-center mt-4 text-white">
              <p className="text-lg">3670+ sold</p>
              <div className="flex ml-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
               ))}
              </div>
            </div>
          </div>
          
          <div className="flex flex-col space-y-2">
            <p className="flex items-center text-white ">
              <CheckCircle className="mr-2" size={20} />
              30-day money-back guarantee
            </p>
            <p className="flex items-center text-white ">
              <CheckCircle className="mr-2" size={20} />
              Lifetime access to course updates
            </p>
          </div>
          
          <div className="flex justify-center">  {/* Added this div to center the button */}
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-[#4D9CFF] rounded-full text-[#4D9CFF] font-semibold flex items-center justify-center transition-transform hover:bg-[#4D9CFF] hover:text-white">
             Download sample <ArrowDown className="ml-2" />
            </a>
          </div>
        </div>
        <PremiumSalaryStatisticsCard/>
        <WhatWillYouGet/>
        {/* Centering the button */}
        <div className="flex flex-col justify-center">
        <p className="text-[#4ADE80] text-center font-semibold mt-2">Save {percentageSaved}% Today!</p>
          <button className="mt-4 px-8 py-4 bg-gradient-to-r from-[#4ADE80] to-[#2B7A4D] rounded-full text-white font-bold text-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#4ADE80] focus:ring-opacity-50 lg:w-1/2 lg:self-center">Get Today Only ₹299</button>
        </div>
        {/* CTA Button  */}
        <StatsCard/>
        <BonusesUI/>
        <ReviewsSection/>
      </div>
    </div>
  );
}
export default GuidePage
