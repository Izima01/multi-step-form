import React from 'react';
import { useLocation } from 'react-router-dom';

export const navData = [
    {link: "/", name: "1", other:"STEP 1", des: "YOUR INFO" },
    {link: "/plan", name: "2", other:"STEP 2", des: "SELECT PLAN" },
    {link: "/add-ons", name: "3", other:"STEP 3", des: "ADD-ONS" },
    {link: "/finish", name: "4", other:"STEP 4", des: "SUMMARY" }
];

const Navbar = () => {
    const loc = useLocation();
    const current = loc.pathname;

    return (
        <nav className="flex gap-5 mx-auto justify-center">
            {navData.map(({name, link}, index) => (
                <div
                    key={index}
                    className={`w-10 h-10 font-bold flex justify-center items-center rounded-full border-2 ${current === link ? 'bg-[#adbeff] border-[#adbeff] text-[#02295a]' : 'bg-transparent border-[hsl(228, 100%, 84%)] text-white'}`}
                >
                    <span>{name}</span>
                </div>
            ))}
        </nav>
    )
}

export default Navbar