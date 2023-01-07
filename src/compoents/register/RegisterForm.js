import React from 'react'

function RegisterForm({ register, handleRegisterSubmit, handleRegisterInput }) {
    return (
        <form onSubmit={handleRegisterSubmit}>
            <div className='form-group mb-2'>
                <label>Username</label>
                <input type="text" name="username" value={register.username} onChange={handleRegisterInput} className='form-control mb-2' required />
                <label>Email Id</label>
                <input type="email" name="email" value={register.email} onChange={handleRegisterInput} className='form-control mb-2' required />
                <label>Password</label>
                <input type="password" name="password" value={register.password} onChange={handleRegisterInput} className='form-control mb-2' required />
            </div>
            <div className="d-grid gap-2 col-12 mx-auto">
                <button className='btn btn-primary'>Register</button>
            </div>
            <h5 className='' style={{ textAlign: "right" }}>Forgot password?</h5>
        </form>
    )
}
export default React.memo(RegisterForm)
