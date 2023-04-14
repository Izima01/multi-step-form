import React, { useContext } from 'react';
import Switch from 'react-switch'
import PlanButton from '../Components/PlanButton';
import AppContext from "../Context/AppContext";

const SelectPlan = () => {
  const { data, changeTime } = useContext(AppContext);
  const { isYearly, plan, planPrice } = data;

  return (
    <>
      <h1 className="text-[#02295a] mb-2 text-2xl font-bold">Select your plan</h1>
      <p className="text-sm text-gray-400 mb-2">You have the option of monthly or yearly billing.</p>
      <form className='flex flex-col w-full gap-2 sm:flex-row'>
        <PlanButton isMonthly={!isYearly} thisPlan="Arcade" price={9} />
        <PlanButton isMonthly={!isYearly} thisPlan="Advanced" price={12} />
        <PlanButton isMonthly={!isYearly} thisPlan="Pro" price={15} />
      </form>
      <div className="w-full py-2 mt-6 flex justify-center gap-3 items-center bg-[#d6d9e6] rounded-lg">
        <h3 className={`${isYearly ? "text-[#91919d]" : "text-[#02295a]"} text-lg font-semibold`}>Monthly</h3>
        <Switch
          checked={isYearly}
          offColor="#04285a"
          onColor='#04285a'
          checkedIcon={false}
          uncheckedIcon={false}
          height={22}
          handleDiameter={14}
          onChange={changeTime}
        />
        <h3 className={`${isYearly ? "text-[#02295a]" : "text-[#91919d]"} text-lg font-semibold`}>Yearly</h3>
      </div>
    </>
  )
}

export default SelectPlan