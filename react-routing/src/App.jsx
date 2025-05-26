import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'
import Home from './Pages/Home'
import Courses from './Pages/Courses'
import About from './Pages/About'
import MainLayout from './Layout/MainLayout' // new layout with header
import Blog from './Components/Blog/Blog'
import BlogDetail from './Components/BlogDetail'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />, // this layout wraps pages and adds Header
      children: [
        { path: '/', element: <Home /> },
        { path: '/courses', element: <Courses /> },
        { path: '/about', element: <About /> },
        { path: '/blog', element: <Blog /> },
        { path: '/blog/:id', element: <BlogDetail /> },
      ],
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
