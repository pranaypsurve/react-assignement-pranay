import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import LoginForm from '../compoents/login/LoginForm';

function LoginScreen() {
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })
    const [loginError, setLoginError] = useState('')
    const navigate = useNavigate();
    useEffect(() => {
        if (JSON.parse(localStorage.getItem('login'))) {
            navigate("/userslistings")
        }
    }, [navigate])
    const handleLoginInput = (e) => {
        let nameKey = e.target.name;
        let valueKey = e.target.value;
        setLoginData({ ...loginData, [nameKey]: valueKey })
    }
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const getRegisterUsers = JSON.parse(localStorage.getItem('regisetrUsers'));
        if (getRegisterUsers) {
            setLoginError("")
            const userFind = getRegisterUsers.find((val) => {
                return (loginData.email === val.email && loginData.password === val.password);
            })
            if (userFind) {
                localStorage.setItem('login', JSON.stringify(true));
                navigate("/userslistings")
            }
        }else{
            setLoginError("User not found")
        }
    }
    return (
        <section className='login_form'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-6 login_left_image'>
                        <div className=''></div>
                    </div>
                    <div className='col-md-6 login_right_col'>
                        <div className='col-md-8 offset-md-2'>
                            <div className='p-4'>
                                <h1 className='text-center'>Welcome</h1>
                                <p className='text-center'>Login to Labs Monitering Systems</p>
                                <p>{loginError}</p>
                                <LoginForm loginData={loginData} handleLoginSubmit={handleLoginSubmit} handleLoginInput={handleLoginInput} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default React.memo(LoginScreen);