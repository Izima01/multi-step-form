import React from 'react';
import { navData } from './Navbar_Mobile';
import { useLocation } from 'react-router-dom';

const NavBar_Desktop = () => {
    const loc = useLocation();
    const current = loc.pathname;

    return (
        <div className="h-auto w-[30%] relative flex justify-center">
            <div className='absolute sidenav left-0 right-0 top-0 w-full h-full rounded-xl z-0' />
            <nav className='flex gap-6 mt-10 flex-col z-10'>
                {navData.map(({name, link, other, des}, index) => (
                    <div key={index} className='flex gap-4 items-center'>
                        <div
                            className={`w-10 h-10 font-bold flex justify-center items-center rounded-full border-2 ${current === link ? 'bg-[#f0f6ff] border-none' : 'bg-transparent border-[#adbeff]'}`}
                        >
                            <span className={current === link ? "text-[#02295a]" : "text-white"}>{name}</span>
                        </div>
                        <div>
                            <h3 className='capitalize text-[#d6d9e6] text-xs'>{other}</h3>
                            <p className='capitalize font-bold text-[#fafbff] text-sm'>{des}</p>
                        </div>
                    </div>
                    
                ))}
            </nav>
        </div>
    )
}

export default NavBar_Desktop