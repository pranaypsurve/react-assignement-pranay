import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import RegisterForm from '../compoents/register/RegisterForm';

function RegisterScreen() {
    const [register, setRegister] = useState({
        username: '',
        email: '',
        password: ''
    })
    const navigate = useNavigate();
    useEffect(() => {
        if (JSON.parse(localStorage.getItem('login'))) {
            navigate("/userslistings")
        }
    }, [navigate])
    const handleRegisterInput = (e) => {
        let nameKey = e.target.name;
        let valueKey = e.target.value;
        setRegister({ ...register, [nameKey]: valueKey })
    }
    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        var arrOfObjUsers = [];
        var localStorageData =  JSON.parse(localStorage.getItem("regisetrUsers") || "[]");
        arrOfObjUsers = localStorageData;
        arrOfObjUsers.push(register);
        localStorage.setItem('regisetrUsers', JSON.stringify(arrOfObjUsers));
        navigate("/")
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
                                <p className='text-center'>Register to Labs Monitering Systems</p>
                                <RegisterForm register={register} handleRegisterInput={handleRegisterInput} handleRegisterSubmit={handleRegisterSubmit} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default React.memo(RegisterScreen)