import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
  const userName = useSelector(state => state.userName)
  
  if(userName){
    return <Outlet/>
  }else{
    return <Navigate to='/'/>
  }
  return (
    <div><h1>ProtectedRoutesx</h1></div>
  )
}

export default ProtectedRoutes