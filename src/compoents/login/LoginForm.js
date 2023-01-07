import React from 'react'
import { NavLink } from 'react-router-dom'

function LoginForm({ loginData, handleLoginSubmit, handleLoginInput }) {
    return (
        <form onSubmit={handleLoginSubmit}>
            <div className='form-group mb-2'>
                <label>Email ID</label>
                <input type="email" name="email" value={loginData.email} onChange={handleLoginInput} className='form-control mb-2' required />
                <label>Password</label>
                <input type="password" name="password" value={loginData.password} onChange={handleLoginInput} className='form-control mb-2' required />
            </div>
            <div className="d-grid gap-2 col-12 mx-auto">
                <button className='btn btn-primary'>Login</button>
                <NavLink to="/register" className='btn btn-primary'>Register</NavLink>
            </div>

            <h5 className='' style={{ textAlign: "right" }}>Forgot password?</h5>
        </form>
    )
}
export default React.memo(LoginForm)
