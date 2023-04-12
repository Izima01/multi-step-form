import React, { useContext, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import AppContext from '../Context/AppContext';

const FinishUp = () => {
    const { data } = useContext(AppContext);
    const [planPrice, setPlanPrice] = useState(0);
    const [addonPrice, setAddonPrice] = useState(0);
    const { plan, isYearly, add_ons } = data;
    const { online, storage, customize } = add_ons;

    useEffect(() => {
        // console.log(window.sessionStorage.getItem("planPrice"));
        setAddonPrice(sessionStorage.getItem("addonPrice"));
        setPlanPrice(sessionStorage.getItem("planPrice"));
    }, []);

    return (
        <div>
            <h1 className="text-[#02295a] mb-2 sm:mb-5 text-2xl font-bold">Finishing up.</h1>
            <p className="text-sm text-gray-400 mb-2 sm:mb-6">Double-check everything looks OK before confirming.</p>
            <div className="w-full p-3 sm:p-5 mt-2 flex flex-col justify-center rounded-lg items-center bg-[#f8f8f8]">
                <span className="flex justify-between items-center w-full border-b border-b-gray-500 mb-2 sm:pb-4">
                    <span>
                        <h3 className="text-[#02295a] font-bold">
                            <span>{plan}</span>
                            <span>{!isYearly ? "(Montlhy)" : "(Yearly)"}</span>
                        </h3>
                        <NavLink to='/plan' style={{ textDecoration:"2px underline grey" }} className="text-[#9699ab] font-medium text-sm">Change</NavLink>
                    </span>
                    <h3 className="text-[#02295a] font-bold">{`$${planPrice}/${isYearly ? "yr" : "mo"}` || "15"}</h3>
                </span>
                <div className='flex flex-col gap-3 w-full sm:mt-3'>
                    {online && <span className='flex justify-between items-center w-full'>
                        <p className='text-[#9699ab] text-sm font-semibold'>Online service</p>
                        <p className="text-[#02295a] font-medium">{`+${isYearly ? 10 : 1}/${isYearly ? "yr" : "mo"}`}</p>
                    </span>}
                    {storage && <span className='flex justify-between items-center w-full'>
                        <p className='text-[#9699ab] text-sm font-semibold'>Larger storage</p>
                        <p className="text-[#02295a] font-medium">{`+${isYearly ? 20 : 2}/${isYearly ? "yr" : "mo"}`}</p>
                    </span>}
                    {customize && <span className='flex justify-between items-center w-full'>
                        <p className='text-[#9699ab] text-sm font-semibold'>Customizable profile</p>
                        <p className="text-[#02295a] font-medium">{`+${isYearly ? 20 : 2}/${isYearly ? "yr" : "mo"}`}</p>
                    </span>}
                </div>
            </div>
            <div className='flex justify-between items-center w-full mt-3 px-5'>
                <p className='text-[#9699ab]'>Total (per {isYearly ? "year" : "month"})</p>
                <p className="text-[#473dff] font-bold text-lg">{`$${Number(planPrice) + Number(addonPrice)}/${isYearly ? "yr" : "mo"}`}</p>
            </div>
        </div>
    )
}

export default FinishUp