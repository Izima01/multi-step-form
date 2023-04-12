import React, { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import AppContext from '../Context/AppContext';

const CheckStarted = () => {
    const location = useLocation();
    const { data } = useContext(AppContext);
    const { name } = data;

    if (!name) {
        return (
            <Navigate
                to="/"
                replace
                state={{
                    from: location.pathname
                }}
            />
        )
    };

    return <Outlet />;
}

export default CheckStarted