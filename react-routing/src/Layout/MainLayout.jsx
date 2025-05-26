// src/Layout/MainLayout.jsx
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Common/Header'

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default MainLayout
