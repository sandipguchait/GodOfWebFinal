import Image from 'next/image'
import { Star } from 'lucide-react'

const reviews = [
  {
    rating: 5,
    text: "JS Mastery's Next.js course is amazing. The way Adrian structures the course by giving you active lessons that you build out on your own is perfect for learning. These active lessons have just the right amount of difficulty so you are never lost yet are always pushing yourself and learning more. Also, by the end of the course you will have an incredible project that would make any portfolio stand out.",
    author: "Web Dev Simplified",
    role: "Youtuber",
    subscribers: "1.4M subscribers",
    image: "/placeholder.svg"
  },
  {
    rating: 4,
    text: "This course is a game-changer for anyone serious about mastering Next.js 14. Adrian's teaching style is engaging, the curriculum is exhaustive, and the focus on active, hands-on learning is unparalleled. Building DevFlow, a real-world app, can not only solidified your understanding but also gave you a portfolio-worthy project. If you want to become a top 1% Next.js developer, this course is your roadmap.",
    author: "Jesse Hall (codeSTACKr)",
    role: "Youtuber",
    subscribers: "289k subscribers",
    image: "/placeholder.svg"
  },
  {
    rating: 5,
    text: "The team at JS Mastery have done it again! Clear and thorough videos broken down step-by-step, frequent prompts to get you thinking in the \"Next 14 way\" - and perhaps the best part of all - interactive tasks (with Figma designs!) to solidify your knowledge. Wow, forget passive learning... great job, JS Mastery!",
    author: "Hayley Wood",
    role: "React Developer",
    image: "/placeholder.svg"
  },
  {
    rating: 5,
    text: "I have been eagerly anticipating this release, which has surpassed my expectations! Finally, there exists a comprehensive one-stop destination to learn everything Next.js. This course is a testament to the dedication and expertise of its creators, and I couldn't be more impressed. For anyone looking to master Next.js, this is an indispensable resource that I highly recommend!",
    author: "Christopher Soltis",
    role: "Software Engineer",
    image: "/placeholder.svg"
  },
  {
    rating: 5,
    text: "This course is precisely what you need to bridge the knowledge gaps, not just for your immediate learning needs to develop Next.JS apps but for a comprehensive understanding of web development as a whole. The course is truly exceptional, it's incredible!. The meticulous attention to detail and the guidance provided empower you to implement changes in your process and thinking that lead to tangible improvement in developing production-grade apps.",
    author: "Anonymous",
    role: "",
    image: ""
  },
  {
    rating: 5,
    text: "JS Mastery's Next.js 14 course is a transformative journey for aspiring top-tier Next.js developers. Adrian's hands-on approach ties every concept to real-world projects, making the learning curve practical and manageable. Even with a good understanding of Next.js, I was lifted to new levels of skill and insight. The course delves deep, touching on advanced concepts and best practices that are immediately applicable. It's not just about coding; it's about thinking and problem-solving like a senior developer.",
    author: "Anonymous",
    role: "",
    image: ""
  }
]

const ReviewCard = ({ review }) => {
  const starColor = review.rating === 4 ? "text-red-500" : (review.author === "Hayley Wood" ? "text-purple-500" : "text-blue-500")

  return (
    <div className="bg-[#1A1A1E] p-6 rounded-lg">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`w-5 h-5 ${i < review.rating ? starColor : 'text-gray-600'}`} fill={i < review.rating ? "currentColor" : "none"} />
        ))}
      </div>
      <p className="text-white mb-4 text-sm md:text-base">{review.text}</p>
      <div className="flex items-center">
        {review.image && (
          <Image src={review.image} alt={review.author} width={40} height={40} className="rounded-full mr-3" />
        )}
        <div>
          <p className="text-white font-semibold">{review.author}</p>
          {review.role && <p className="text-gray-400 text-sm">{review.role}</p>}
          {review.subscribers && <p className="text-gray-400 text-sm">{review.subscribers}</p>}
        </div>
      </div>
    </div>
  )
}

 const ReviewsSection = ( props ) => {
  return (
    <section className="bg-[#181c31] pt-8 md:pt-16 pb-5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">The reviews are in.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ReviewsSection
