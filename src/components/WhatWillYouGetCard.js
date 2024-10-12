import React from 'react'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

export default function WhatWillYouGet() {
  return (
    <>
      <div className="max-w-4xl mx-auto pt-5">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12 flex items-center justify-center">
          What will you get
          <ChevronDown className="w-8 h-8 ml-2" />
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          <CourseSection
            title="Getting Started"
            topics={[
              { number: '01', text: 'Intro' },
              { number: '02', text: 'Prerequisites' },
              { number: '03', text: 'Things before Next.js' },
              { number: '04', text: 'Introduction to Next.js' },
              { number: '05', text: 'How Web Works' },
              { number: '06', text: 'Project Setup (ESLint, Prettier, Git & Github)' },
              { number: '07', text: 'Tailwind CSS' },
              { number: '08', text: 'Code Architecture' },
            ]}
            illustration="/placeholder.svg?height=100&width=100"
          />

          <CourseSection
            title="Routing, Core Concepts, and UI Mastery"
            topics={[
              { number: '09', text: 'Routing' },
              { number: '10', text: 'Next.js Core Architecture' },
              { number: '11', text: 'Authentication' },
              { number: '12', text: 'Authorization' },
              { number: '13', text: 'Multiple Layouts & Grouped Routes' },
              { number: '14', text: 'Using Context API in Next.js' },
              { number: '15', text: 'Dark/Light Theme' },
              { number: '16', text: 'Developing Responsive Home Page UI' },
            ]}
            illustration="/placeholder.svg?height=100&width=100"
          />
          <CourseSection
            title="Routing, Core Concepts, and UI Mastery"
            topics={[
              { number: '09', text: 'Routing' },
              { number: '10', text: 'Next.js Core Architecture' },
              { number: '11', text: 'Authentication' },
              { number: '12', text: 'Authorization' },
              { number: '13', text: 'Multiple Layouts & Grouped Routes' },
              { number: '14', text: 'Using Context API in Next.js' },
              { number: '15', text: 'Dark/Light Theme' },
              { number: '16', text: 'Developing Responsive Home Page UI' },
            ]}
            illustration="/placeholder.svg?height=100&width=100"
          />
          <CourseSection
            title="Routing, Core Concepts, and UI Mastery"
            topics={[
              { number: '09', text: 'Routing' },
              { number: '10', text: 'Next.js Core Architecture' },
              { number: '11', text: 'Authentication' },
              { number: '12', text: 'Authorization' },
              { number: '13', text: 'Multiple Layouts & Grouped Routes' },
              { number: '14', text: 'Using Context API in Next.js' },
              { number: '15', text: 'Dark/Light Theme' },
              { number: '16', text: 'Developing Responsive Home Page UI' },
            ]}
            illustration="/placeholder.svg?height=100&width=100"
          />
        </div>
      </div>
    </>
  )
}

function CourseSection({ title, topics, illustration }) {
  return (
    <div className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center mb-6">
        <Image src={illustration} alt="" width={60} height={60} className="w-12 h-12 mr-4" />
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      <ul className="space-y-3">
        {topics.map((topic) => (
          <li key={topic.number} className="flex items-start">
            <span className="text-blue-400 font-mono mr-2 flex-shrink-0">{topic.number}</span>
            <span>{topic.text}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
