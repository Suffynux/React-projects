import React from 'react'

const Home = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to Dummy Academy
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          Learn high-demand skills from expert instructors — anytime, anywhere.
        </p>
        <a 
          href="/courses"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Browse Courses
        </a>
      </div>
    </section>
  )
}

export default Home
