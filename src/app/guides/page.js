"use client"
import Image from 'next/image'
import { useState, useEffect } from 'react'

const courses = [
  {
    id: 1,
    title: "The NFT Marketplace (Solidity) Course",
    price: "$129",
    image: "/placeholder.svg",
    bonus: "BONUS #2 - DEPRECATED COURSE"
  },
  {
    id: 2,
    title: "Filmpire - React Movie App Course",
    price: "$169",
    image: "/placeholder.svg",
    bonus: "BONUS #3 - DEPRECATED COURSE"
  },
  {
    id: 3,
    title: "Complete Path to JS Mastery Course",
    price: "$247",
    image: "/placeholder.svg",
    bonus: "BONUS #4 - DEPRECATED COURSE"
  },
  {
    id: 3,
    title: "Complete Path to JS Mastery Course",
    price: "$247",
    image: "/placeholder.svg",
    bonus: "BONUS #4 - DEPRECATED COURSE"
  },
  {
    id: 3,
    title: "Complete Path to JS Mastery Course",
    price: "$247",
    image: "/placeholder.svg",
    bonus: "BONUS #4 - DEPRECATED COURSE"
  }
]

const testimonials = [
  { id: 1, name: "John Doe", text: "This course changed my career!", avatar: "/avatar1.jpg" },
  { id: 2, name: "Jane Smith", text: "Incredible value for money!", avatar: "/avatar2.jpg" },
  // Add more testimonials
]

const faqs = [
  { id: 1, question: "How long do I have access to the course?", answer: "You have lifetime access to all purchased courses." },
  { id: 2, question: "Is there a money-back guarantee?", answer: "Yes, we offer a 30-day money-back guarantee if you're not satisfied." },
  // Add more FAQs
]

export default function CoursePage() {
  const [timeLeft, setTimeLeft] = useState(3 * 3600) // 3 hours in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          return 3 * 3600; // Reset to 3 hours when it reaches 0
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600)
    const minutes = Math.floor((time % 3600) / 60)
    const seconds = time % 60
    return `${hours.toString().padStart(2, '0')}h ${minutes.toString().padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s`
  }

  return (
    <div className="min-h-screen bg-[#181c31] text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Countdown Timer */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-[#4D9CFF]">Limited</span> Time <span className="text-[#A855F7]">Offer</span> ⏰
          </h2>
          <p className="text-xl mb-4">Enroll now and save 20% on all courses!</p>
          <div className="text-4xl font-bold text-[#4ade80]">{formatTime(timeLeft)}</div>
        </div>

        {/* Ebook Banner */}
        <div className="bg-[#0d1116] rounded-lg overflow-hidden mb-8 sm:mb-16">
          <div className="flex flex-col md:flex-row items-center p-4 sm:p-8">
            <div className="md:w-1/2 mb-4 sm:mb-8 md:mb-0">
              <p className="text-[#4ade80] text-xs sm:text-sm font-semibold mb-2 sm:mb-4">BONUS #1 - EBOOK (200 PAGES)</p>
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4">The Ultimate Next.js 14 Ebook</h1>
            </div>
            <div className="md:w-1/2 relative h-48 sm:h-64 md:h-80 w-full">
              <Image
                src="/placeholder.svg"
                alt="Next.js 14 Ebook"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>

        {/* Course Grid */}
        <h2 className="text-3xl font-bold mb-8 text-center">Our Exclusive Guides 📚</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-[#0d1116] rounded-xl overflow-hidden transform hover:scale-105 transition duration-300">
              <div className="relative h-48">
                <Image
                  src={course.image}
                  alt={course.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <p className="text-[#ff6b6b] text-sm font-semibold mb-2">{course.bonus}</p>
                <h2 className="text-2xl font-bold mb-4">{course.title}</h2>
                <p className="text-[#4a9eff] text-xl font-bold mb-4">{course.price}</p>
                <button className="bg-[#4ade80] text-black font-bold py-2 px-4 rounded-full hover:bg-[#3cbe6e] transition duration-300">Learn More</button>
              </div>
            </div>
          ))}
        </div>

        {/* Key Features */}
        <div className="my-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Our Courses?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2">Accelerated Learning</h3>
              <p>Master web development skills in record time with our optimized curriculum.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">👨‍🏫</div>
              <h3 className="text-xl font-bold mb-2">Expert Instructors</h3>
              <p>Learn from industry professionals with years of real-world experience.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-xl font-bold mb-2">Hands-on Projects</h3>
              <p>Build a impressive portfolio with practical, real-world projects.</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="my-16">
          <h2 className="text-3xl font-bold mb-8 text-center">What Our Students Say!</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-[#0d1116] p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <Image src={testimonial.avatar} alt={testimonial.name} width={50} height={50} className="rounded-full mr-4" />
                  <h3 className="font-bold">{testimonial.name}</h3>
                </div>
                <p className="italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="my-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-[#0d1116] p-6 rounded-xl">
                <h3 className="font-bold mb-2">{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Buy Now Button */}
      <div className="fixed bottom-8 right-8">
        <button className="bg-[#4ade80] text-black font-bold py-3 px-8 rounded-full text-lg hover:bg-[#3cbe6e] transition duration-300 shadow-lg">
          Buy Now
        </button>
      </div>
    </div>
  )
}