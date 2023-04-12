import React, { useContext } from 'react';
import AddonButton from "../Components/AddonButton";

const AddOns = () => {
    return (
        <div className="flex flex-col gap-2">
            <h1 className="text-[#02295a] mb-2 text-2xl font-bold">Select your plan</h1>
            <p className="text-sm text-gray-400 mb-2">You have the option of monthly or yearly billing.</p>
            <form className='flex flex-col w-full gap-2 sm:gap-4'>
                <AddonButton name="Online service" des="Access to multiplayer games" price={1} value="online" />
                <AddonButton name="Larger storage" des="Extra 1TB of cloud save" price={2} value="storage" />
                <AddonButton name="Cutomizable profile" des="Custom theme on your profile" price={2} value="customize" />
            </form>
        </div>
    )
}

export default AddOns