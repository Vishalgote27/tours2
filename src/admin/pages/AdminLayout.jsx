import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { readAllToursAction } from '../../redux/admin/adminAction'
import { Link, Outlet } from 'react-router-dom'
import AdminTourCard from '../components/AdminTourCard'
import AdminNavbar from '../components/AdminNavbar'

const AdminLayout = () => {

    
  return <>
  <AdminNavbar/>
  <Outlet/>
  



 
  </>
}

export default AdminLayout