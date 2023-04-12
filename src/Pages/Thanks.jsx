import React from 'react';
import check from "../assets/images/icon-thank-you.svg";

const Thanks = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-4 px-1 py-8'>
            <img src={check} alt="" />
            <h1 className="text-[#02295a] mb-2 text-2xl font-bold">Thank you!</h1>
            <p className='text-[#9699ab] text-center text-lg sm:text-base font-medium'>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support @loremgaming.com</p>
        </div>
    )
}

export default Thanks