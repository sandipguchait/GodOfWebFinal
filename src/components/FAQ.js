"use client"

import { useState } from 'react'
import { Plus, Minus, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    question: "How does your platform enhance productivity?",
    answer: "Our platform leverages cutting-edge AI and machine learning algorithms to analyze your work patterns and provide personalized suggestions for improving efficiency. We also offer integrations with popular tools to streamline your workflow."
  },
  {
    question: "What sets your courses apart from others?",
    answer: "Our courses are designed by industry experts and updated regularly to reflect the latest trends and technologies. We offer hands-on projects, personalized feedback, and a supportive community to ensure you gain practical, job-ready skills."
  },
  {
    question: "Can I access the platform on mobile devices?",
    answer: "Our platform is fully responsive and optimized for mobile devices. We also offer native iOS and Android apps for an enhanced mobile experience, allowing you to learn and work on-the-go."
  },
  {
    question: "What sets your courses apart from others?",
    answer: "Our courses are designed by industry experts and updated regularly to reflect the latest trends and technologies. We offer hands-on projects, personalized feedback, and a supportive community to ensure you gain practical, job-ready skills."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="bg-[#181c31] text-white py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start">
          <div className="lg:w-1/3 mb-12 lg:mb-0">
            <h3 className="text-xl font-semibold mb-2 text-[#4D9CFF]">OUR FAQS</h3>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Frequently Asked <span className="text-[#A855F7]">Questions</span>
            </h2>
            <p className="text-gray-300 pr-4 ">
              Find quick answers to common questions about our platform, courses, and support.
            </p>
          </div>
          <div className="lg:w-2/3 space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-[#4D9CFF]/20 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <button
                  className="flex justify-between items-center w-full text-left p-6 bg-[#1C1C1E] hover:bg-[#2C2C2E] transition-colors duration-300"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-medium pr-4">{faq.question}</span>
                  {openIndex === index ? (
                    <Minus className="h-6 w-6 text-[#4D9CFF] flex-shrink-0" />
                  ) : (
                    <Plus className="h-6 w-6 text-[#4D9CFF] flex-shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 bg-[#2C2C2E] mt-2 rounded-lg">
                        <p className="text-gray-300">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-[#4D9CFF] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-[#A855F7] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
    </div>
  )
}