import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import AppContext from '../Context/AppContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {
    const { data } = useContext(AppContext);
    const { email, name, phone, plan } = data;

    const loc = useLocation();
    const current = loc.pathname;
    const navigate = useNavigate();

    function handleBack() {
        current === "/add-ons"
        ? navigate("/plan")
        : current === "/finish" ? navigate("/add-ons")
        : navigate('/');
    };

    function handleForward() {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (current === "/") {
            if (!name) {
                toast.error("Please enter your name");
            }
            if (!email) {
                toast.error("Please enter your email");
            }
            if (!phone) {
                toast.error("Please enter your phone number");
            } if (!regex.test(email) || !email) {
                toast.error("Invalid Email");
            } if (regex.test(email) && email && phone) {
                navigate("/plan");
            }
        } else if (current === "/plan") {
            if (plan) navigate("/add-ons");
        }
        else {
            current === "/add-ons" ? navigate("finish")
            : navigate('/thanks');
        }
    };

    return (
        <>
        <div className={`${current === "/thanks" ? "hidden" : "flex"} ${current === "/" ? "justify-end" : "justify-between"}`}>
            {current !== "/" &&
            // <NavLink to={current === "/add-ons" ? "/plan": current === "/finish" ? "/add-ons" : '/'} className="text-[#acacb4] px-4 py-2 font-semibold">
            //   Go Back
            // </NavLink>
            <button onClick={handleBack} className="text-[#acacb4] hover:text-[#02295a] focus:text-[#02295a] px-4 py-2 font-bold">
                Go Back
            </button>
            }
            <button
                type='submit'
                className="bg-[#02295a] text-white px-4 py-2 rounded-lg font-semibold"
                onClick={handleForward}
            >
                Next Step
            </button>
            {/* <NavLink to={current === "/" ? "/plan" : current === "/plan" ? "add-ons" : current === "/add-ons" ? "finish" : '/thanks'} className="bg-[#02295a] text-white px-4 py-2 rounded-lg font-semibold">
                Next Step
            </NavLink> */}
        </div>
            <ToastContainer position='top-right' style={{ width: "320px" }} />
        </>
    )
}

export default Footer