export default function EndingCTA() {
    return (
      <div className="flex flex-row justify-center">
        <div className="max-w-3xl w-full text-center pt-10">
          <h1 className="text-2xl sm:text-3xl md:text-2xl font-bold mb-6">
            <span>
              Purchase before 
            </span>
            <span className="text-[#4D9CFF]">{" "}
              midnight {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}{" "}
            </span>
            <span>
              to unlock bonuses worth <span className="text-[#34d399]">Rs 15,000</span>
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8">
            Mastering Skills is very important because of High Job Competition!
          </p>
          <div className="bg-emerald-400 text-black p-4 mb-8">
            <p className="text-lg sm:text-xl font-bold">
              You'll be jobless by 2025 if you don't master Frontend + Frontend AI Tools. Take Action Now!!
            </p>
          </div>
          <button className="px-8 py-3 text-xl font-bold rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Get Now for ₹299
          </button>
        </div>
      </div>
    )
  }
