"use client"
import Image from 'next/image'
import { useState, useEffect } from 'react'

const courses = [
  {
    id: 1,
    title: "The NFT Marketplace (Solidity) Course",
    price: "₹9,675",
    discountedPrice: "₹7,425",
    image: "/placeholder.svg",
    bonus: "BONUS #2 - DEPRECATED COURSE"
  },
  {
    id: 2,
    title: "Filmpire - React Movie App Course",
    price: "₹12,675",
    discountedPrice: "₹9,675",
    image: "/placeholder.svg",
    bonus: "BONUS #3 - DEPRECATED COURSE"
  },
  {
    id: 3,
    title: "Complete Path to JS Mastery Course",
    price: "₹18,525",
    discountedPrice: "₹14,925",
    image: "/placeholder.svg",
    bonus: "BONUS #4 - DEPRECATED COURSE"
  },
  // ... (remaining courses with the same price as
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
  const [timeLeft, setTimeLeft] = useState(3 * 3600); // Default to 3 hours
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const savedTime = sessionStorage.getItem('timerValue');
    if (savedTime) {
      setTimeLeft(parseInt(savedTime, 10));
    }

    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        const newTime = prevTime > 0 ? prevTime - 1 : 3 * 3600;
        sessionStorage.setItem('timerValue', newTime.toString());
        return newTime;
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
          {isClient && <div className="text-4xl font-bold text-[#4ade80]">{formatTime(timeLeft)}</div>}
        </div>

        {/* Ebook Banner */}
        <div className="bg-[#0d1116] rounded-xl overflow-hidden mb-8 sm:mb-16">
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
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-gray-400 line-through text-lg">{course.price}</span>
                    <span className="text-[#4ade80] text-2xl font-bold ml-2">{course.discountedPrice}</span>
                  </div>
                  <div className="bg-[#A855F7] text-white text-sm font-bold px-2 py-1 rounded">
                    Save {Math.round((1 - parseFloat(course.discountedPrice.slice(1)) / parseFloat(course.price.slice(1))) * 100)}%
                  </div>
                </div>
                <button className="bg-[#4ade80] text-black font-bold py-2 px-4 rounded-full hover:bg-[#3cbe6e] transition duration-300">Learn More</button>
              </div>
            </div>
          ))}
        </div>

        {/* Key Features */}
        <div className="my-32">
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
    </div>
  )
}