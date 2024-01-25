import React from 'react'
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PublicLayout from './pages/PublicLayout';
import AdminLayout from './admin/pages/AdminLayout';
import Home from './pages/Home';
import About from './pages/About';
import Tours from './pages/Tours';
import TourDetails from './pages/TourDetails';
import Login from './pages/Login';
import Register from './pages/Register';
import ThankYou from './pages/ThankYou';
import Booking from './components/Booking/Booking';
import Protected from './shared/Protected';
import Account from './admin/pages/Account';
import Settings from './admin/pages/Settings';
import Dashboard from './admin/pages/Dashboard';
import BookedTours from './admin/pages/BookedTours';

const App = () => {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/tours' element={<Tours />} />
          <Route path='/tours/:id' element={<TourDetails />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/thank-you' element={<ThankYou />} />
          <Route path='/booking/:id' element={<Protected compo={<Booking />} />} />
        </Route>
        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='account' element={<Account />} />
          <Route path='booked-tours' element={<BookedTours />} />
          <Route path='settings' element={<Settings />} />

        </Route>
      </Routes>
    </BrowserRouter>
  </>
}

export default App