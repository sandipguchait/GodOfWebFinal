/* eslint-disable */

import Image from 'next/image'

const courses = [
  {
    title: 'LINUX FULL COURSE',
    description: 'Learn Linux and start self-hosting your apps like an open-source freedom fighter',
    logo: '/placeholder.svg',
    tags: ['linux', 'pro'],
  },
  {
    title: 'STRIPE FOR SAAS',
    description: 'Accept Payments in your Software-as-a-Service Product with Stripe',
    logo: '/placeholder.svg',
    tags: ['stripe', 'pro', 'typescript'],
  },
  {
    title: 'NEXT.JS FULL COURSE',
    description: 'Master the fundamentals of Next.js 14 and the App Router',
    logo: '/placeholder.svg',
    tags: ['react', 'nextjs', 'postgres', 'pro'],
  },
  {
    title: 'SVELTEKIT FULL COURSE',
    description: 'Learn how to build awesome full-stack apps with SvelteKit',
    logo: '/placeholder.svg',
    tags: ['svelte', 'firebase', 'pro'],
  }
]

const tagColors = {
  linux: 'bg-yellow-500',
  pro: 'bg-green-500',
  stripe: 'bg-indigo-500',
  typescript: 'bg-blue-500',
  react: 'bg-cyan-500',
  nextjs: 'bg-black',
  postgres: 'bg-blue-700',
  svelte: 'bg-orange-500',
  firebase: 'bg-yellow-600',
}

export default function CourseList() {
  return (
    <div className="bg-[#181c31] text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-2">COURSES</h2>
        <p className="text-gray-400 text-center mb-12">
          challenging multi-step experiences with quizzes and progress-tracking
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {courses.map((course, index) => (
            <div 
              key={index} 
              className="bg-[#0d1116] rounded-xl overflow-hidden flex flex-col transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 shadow-[0_0_0_1px_rgba(0,149,255,0.2)] hover:shadow-[0_0_0_2px_rgba(0,149,255,0.4)]"
            >
              <div className="relative h-40 sm:h-48 w-full">
                <Image
                  src={course.logo}
                  alt={`${course.title} logo`}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full object-center"
                />
              </div>
              <div className="p-4 sm:p-6 flex-grow">
                <h3 className="text-lg sm:text-xl font-bold mb-2">{course.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm mb-4">{course.description}</p>
                <div className="flex flex-wrap gap-2">
                  {course.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${tagColors[tag] || 'bg-gray-500'}`}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}