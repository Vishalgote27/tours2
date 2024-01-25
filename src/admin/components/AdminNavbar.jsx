import React from 'react'
import { Link } from 'react-router-dom'

const AdminNavbar = () => {
  return <>
  <nav class="navbar navbar-expand-lg bg-dark navbar-dark mb-4">
    <div class="container">
      <Link class="navbar-brand" to="/admin">Admin</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <Link class="nav-link active" to="/admin">Dashboard</Link>
          {/* <Link class="nav-link" to="/admin/account">Account</Link> */}
          {/* <Link class="nav-link" to="/admin/settings">Settings</Link> */}
          <Link class="nav-link" to="/admin/booked-tours">BookedTours</Link>
        </div>
      </div>
    </div>
  </nav>
  </>
}

export default AdminNavbar