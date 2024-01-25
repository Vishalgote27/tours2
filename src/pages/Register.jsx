import React, { useEffect, useState } from 'react'
import "../styles/login.css"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RegisterAction } from '../redux/public/publicAction'
import { invalidate } from '../redux/user/userSlice'
import { GoogleLogin } from 'react-google-login'
import { } from "gapi-script"

const Register = () => {
  const { register, loading, error } = useSelector(state => state.public)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [registerUser, setRegisterUser] = useState({
    username: "john",
    email: "john@gmail.com",
    password: "123",

  })
  const handleRegister = () => {
    dispatch(RegisterAction(registerUser))
  }
  useEffect(() => {
    if (register) {
      navigate("/login")
    }
  }, [register])
  useEffect(() => {
    let timer
    if (error) {
      timer = setTimeout(() => {
        dispatch(invalidate("error"))
      }, 3000)
    }
    return () => clearTimeout(timer)  // cleanup
  }, [error])
  if (loading) {
    return <div class="spinner-border text-primary"></div>
  }
  // useEffect(() => {
  //   gapi.load("client:auth2", e => {
  //     gapi.client.init({
  //       clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID,
  //       scope: ""
  //     })
  //   })
  // }, [])

  const handleSuccess = response => {
    // dispatch(continueWithGoogleAction(response.tokenId))
  }

  const handleFail = (err) => console.log(err);


  return <>

    <div class="container">
      <div class="row">
        {
          error && <div class="alert alert-primary">
            {error}
          </div>
        }
        <div class="col-sm-6 offset-sm-3 mt-4">
          <GoogleLogin
            className='w-100 mb-5 p-2 fs-5'
            clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}
            buttonText='Continue With Google'
            onSuccess={handleSuccess}
            onFailure={handleFail}
          />
          <div class="card">
            <h4 class="card-header">Signup</h4>
            <div class="card-body">
              <div>
                <label for="name" class="form-label">First name</label>
                <input
                  value={registerUser.username}
                  onChange={e => setRegisterUser({ ...registerUser, username: e.target.value })}
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="Enter your name"
                />
                <div class="valid-feedback">Looks good!</div>
                <div class="invalid-feedback">Please choose a username.</div>
              </div>
              <div class="mt-2">
                <label for="email" class="form-label">First Email</label>
                <input
                  value={registerUser.email}
                  onChange={e => setRegisterUser({ ...registerUser, email: e.target.value })}
                  type="text"
                  class="form-control"
                  id="email"
                  placeholder="Enter Your Email"
                />
                <div class="valid-feedback">Looks good!</div>
                <div class="invalid-feedback">Please choose a username.</div>
              </div>
              <div class="mt-2">
                <label for="password" class="form-label">Password</label>
                <input
                  value={registerUser.password}
                  onChange={e => setRegisterUser({ ...registerUser, password: e.target.value })}
                  type="text"
                  class="form-control"
                  id="password"
                  placeholder="Enter Your Password"
                />
                <div class="valid-feedback">Looks good!</div>
                <div class="invalid-feedback">Please choose a password.</div>
              </div>

              <button onClick={handleRegister} type="submit" class="btn btn-warning w-100 mt-3">
                Signup
              </button>
              <p class="text-center mt-3">
                Already Have Account? <Link to='/login'>Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>


  </>
}
export default Register