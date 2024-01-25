import React, { useEffect, useState } from 'react'
// import "../styles/login.css"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginAction } from '../redux/user/userAction'
import { invalidate } from '../redux/user/userSlice'

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "john@gmail.com",
    password: "123"
  })
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { loading, error, info } = useSelector(state => state.user)

  const handleLogin = () => {
    console.log(loginData);
    dispatch(loginAction(loginData))
  }
  useEffect(() => {
    if (info) {
      if (info.role === "user") {
        navigate("/")
      }
      if (info.role === "admin") {
        navigate("/admin")
      }
    }
  }, [info])
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


  return <>



    <div class="container">
      <div class="row">
        {
          error && <div class="alert alert-primary">
            {error}
          </div>
        }
        <div class="col-sm-6 offset-sm-3">
          <div class="card mt-5">
            <h4 class="card-header ">Login</h4>
            <div class="card-body">
              <div>
                <label for="email" class="form-label">First Email</label>
                <input
                  required
                  value={loginData.value}
                  onChange={e => setLoginData({ ...loginData, email: e.target.value })}
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
                  value={loginData.password}
                  onChange={e => setLoginData({ ...loginData, password: e.target.value })}
                  required
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Enter Your Password"
                />
                <div class="valid-feedback">Looks good!</div>
                <div class="invalid-feedback">Please choose a username.</div>
              </div>
              <button onClick={handleLogin} type="button" class="btn btn-warning w-100 mt-3">
                Login
              </button>
              <p class="text-center mt-3">
                Dont Have Account? <Link to='/register'>Create Account</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>


  </>
}
export default Login