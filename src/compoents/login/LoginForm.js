import React from 'react'
import { NavLink } from 'react-router-dom'

function LoginForm({ loginData, handleLoginSubmit, handleLoginInput }) {
    return (
        <form onSubmit={handleLoginSubmit}>
            <div className='form-group mb-2'>
                <div className="form-floating mb-3">
                    <input type="email" name="email" id='emailID' value={loginData.email} onChange={handleLoginInput} className='form-control mb-2' placeholder='Email' required />
                    <label htmlFor="emailID">Email ID</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" name="password" id='pswd' value={loginData.password} onChange={handleLoginInput} className='form-control mb-2' placeholder='Password' required />
                    <label htmlFor="pswd">Password</label>
                </div>
            </div>
            <div className="d-grid gap-2 col-12 mx-auto">
                <button className='btn btn-primary'>Login</button>
                <NavLink to="/register" className='btn btn-primary'>Register</NavLink>
            </div>
            <h6 className='pt-2' style={{ textAlign: "right" }}>Forgot password?</h6>
        </form>
    )
}
export default React.memo(LoginForm)
