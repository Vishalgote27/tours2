// import React from 'react'
// import { Navigate, Route, Routes } from 'react-router-dom'
// import Home from '../pages/Home'
// import Login from '../pages/Login'
// import Register from '../pages/Register'
// import TourDetails from '../pages/TourDetails'
// import Tours from '../pages/Tours'
// import ThankYou from '../pages/ThankYou'
// import AdminLayout from '../admin/pages/AdminLayout'
// import Booking from '../components/Booking/Booking'
// import About from '../pages/About'
// import Protected from '../shared/Protected'

// const Routers = () => {
//     return <>
//         <Routes>
//             <Route path='/' element={<Navigate to="/home" />} />
//             <Route path='/home' element={<Home/>}/>
//             <Route path='/about' element={<About/>}/>
//             <Route path='/tours' element={<Tours/>}/>
//             <Route path='/tours/:id' element={<TourDetails/>}/>
//             <Route path='/login' element={<Login/>} />
//             <Route path='/register' element={<Register/>}/>
//             <Route path='/thank-you' element={<ThankYou/>}/>

//             <Route path='/booking' element={<Protected compo={<Booking/>}/>}/>

//             <Route path='/admin' element={<AdminLayout />} >
//           </Route>
//         </Routes>
//     </>
// }

// export default Routers