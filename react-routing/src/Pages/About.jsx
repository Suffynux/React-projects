import React from 'react'

const About = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="mb-4">
        Welcome to DummyCorp! We are passionate about delivering high-quality digital solutions
        to help your business thrive in the modern world.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
      <p className="mb-4">
        At DummyCorp, our mission is to simplify technology for businesses and individuals by
        offering innovative and reliable software solutions.
      </p>
      <h2 className="text-2xl font-semibold mb-2">What We Do</h2>
      <p className="mb-4">
        We specialize in building web and mobile applications, designing engaging user experiences,
        and providing consulting services. Whether you're a startup or a large enterprise,
        we have something for everyone.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
      <p className="mb-4">
        Got questions? Reach out to us at <a href="mailto:info@dummycorp.com" className="text-blue-500 underline">info@dummycorp.com</a>.
      </p>
      <p className="text-sm text-gray-500">
        © 2025 DummyCorp. All rights reserved.
      </p>
    </div>
  )
}

export default About
  