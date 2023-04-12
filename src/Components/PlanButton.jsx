import React, { useContext, useEffect, useState } from 'react';
import Arcade from "../assets/images/icon-arcade.svg";
import Advanced from "../assets/images/icon-advanced.svg";
import Pro from "../assets/images/icon-pro.svg";
import AppContext from '../Context/AppContext';

const PlanButton = ({ thisPlan, isMonthly, price }) => {
    const { data, changePlan } = useContext(AppContext);

    return (
        <button type='button' className={`w-full ${data.plan === thisPlan ? "bg-[#eef1ff] border-[#473dff] border-[1.8px]" : "bg-white border-gray-500 hover:border-[#473dff] hover:border-[1.5px] border"} rounded-lg px-4 sm:px-2 py-2 sm:py-4 flex sm:flex-col gap-4 sm:gap-7 items-center sm:items-start transition-colors duration-300 ease-in-out`} id={thisPlan} onClick={e => changePlan(e)}>
            <img
                src={thisPlan === "Arcade" ? Arcade
                : thisPlan === "Advanced" ? Advanced : Pro}
                alt="" />
            <span className="flex flex-col items-start">
                <h3 className="text-[#02295a] font-semibold">{thisPlan}</h3>
                <p className="text-gray-500 text-sm">{`$${isMonthly ? price : price*10}/${isMonthly ? "mo" : "yr"}`}</p>
                <p className="text-[#02295a] text-xs font-semibold">{isMonthly ? "" : "2 months free"}</p>
            </span>
        </button>
    )
}

export default PlanButton