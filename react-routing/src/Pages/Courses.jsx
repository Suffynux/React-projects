import React from 'react'

const dummyCourses = [
  {
    id: 1,
    title: 'Full-Stack Web Development',
    description: 'Master HTML, CSS, JavaScript, React, and Node.js with hands-on projects.',
  },
  {
    id: 2,
    title: 'Python for Beginners',
    description: 'Start coding in Python with zero experience required.',
  },
  {
    id: 3,
    title: 'UI/UX Design Fundamentals',
    description: 'Learn the basics of user interface and experience design.',
  },
]

const Courses = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Courses</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {dummyCourses.map(course => (
          <div key={course.id} className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
            <p className="text-gray-600">{course.description}</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Enroll Now
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Courses
