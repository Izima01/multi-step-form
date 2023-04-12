import React, { useContext, useEffect } from 'react'
import AppContext from '../Context/AppContext';

const AddonButton = ({ name, des, price=1, value }) => {
    const { data, editAddons } = useContext(AppContext);
    const { add_ons } = data;

    return (
        <label type='button' className={`w-full ${add_ons[value] ? "bg-[#eef1ff] border-[#473dff] border-[1.5px]" : "bg-white border-gray-500 border"} rounded-lg px-4 py-2 flex gap-4 items-center justify-between transition-colors duration-300 ease-in-out`}>
            <input type="checkbox" checked={add_ons[value]} className="w-5 h-5" onChange={() => editAddons(value)} />
            <span className="flex flex-col items-start">
                <h3 className="text-[#02295a] font-semibold">{name || "Online service"}</h3>
                <p className="text-gray-500 text-sm">{des}</p>
            </span>
            <p className="text-[#473dff] text-sm">{`+${data.isYearly ? price*10 : price}/${data.isYearly ? "yr" : "mo"}`}</p>
        </label>
    )
}

export default AddonButton