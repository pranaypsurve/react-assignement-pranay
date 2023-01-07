import React from 'react'
function RegisterForm({ register, handleRegisterSubmit, handleRegisterInput }) {
    return (
        <form onSubmit={handleRegisterSubmit}>
            <div className='form-group mb-2'>
                <div className="form-floating mb-3">
                    <input type="text" name="username" id='usernameID' value={register.username} onChange={handleRegisterInput} className='form-control mb-2' placeholder='Username' required  />
                    <label htmlFor="usernameID">Username</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" name="email" id='emailID' value={register.email} onChange={handleRegisterInput} className='form-control mb-2' placeholder='Email' required />
                    <label htmlFor="emailID">Email Id</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" name="password" id='pswd' value={register.password} onChange={handleRegisterInput} className='form-control mb-2' placeholder='Password' required />
                    <label htmlFor="pswd">Password</label>
                </div>
            </div>
            <div className="d-grid gap-2 col-12 mx-auto">
                <button className='btn btn-primary'>Register</button>
            </div>
        </form>
    )
}
export default React.memo(RegisterForm)
