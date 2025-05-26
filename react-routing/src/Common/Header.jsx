import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <ul className='flex gap-4 bg-green-300 p-4 '>
        <li>
          <Link to="/" className="hover:underline">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:underline">About</Link>
        </li>
        <li>
          <Link to="/courses" className="hover:underline">Courses</Link>
        </li>
        <li>
          <Link to="/blog" className="hover:underline">Blog</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
