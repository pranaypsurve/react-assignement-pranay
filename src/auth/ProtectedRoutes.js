import React from 'react'
import { Navigate } from 'react-router-dom';

export default function ProtectedRoutes({ children }) {
    const isLogin = JSON.parse(localStorage.getItem('login'));
    if (isLogin) {
        return (
            <>{children}</>
        )
    } else {
        return <Navigate to='/login' />
    }
}
