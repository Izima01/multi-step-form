import React, { useContext } from 'react'
import AppContext from '../Context/AppContext';

const PersonalInfo = () => {
  const { data, changeEmail, changeName, changePhone } = useContext(AppContext);

  return (
    <>
      <h1 className="text-[#02295a] mb-2 sm:mb-4 text-2xl font-bold">Personal info</h1>
      <p className="text-md text-gray-400 mb-2 sm:mb-7">Please provide your name, email address and phone number.</p>
      <form className='w-full'>
        <div className="form-group w-full mb-2 sm:mb-4">
          <label className="text-blue-900 text-sm font-semibold" htmlFor="name">Name</label>
          <input type="text" name="" id="name" className="block mt-0.5 sm:mt-1.5 w-full border border-gray-400 py-2 px-4 rounded-lg text-[#02295a] font-semibold text-sm" required placeholder='e.g. Stephen King' value={data.name} onChange={(e) => changeName(e)} />
        </div>
        <div className="form-group w-full mb-2 sm:mb-4">
          <label className="text-blue-900 text-sm font-semibold" htmlFor="email">Email Address</label>
          <input type="email" name="" id="email" className="block mt-0.5 sm:mt-1.5 w-full border border-gray-400 py-2 px-4 rounded-lg text-[#02295a] font-semibold text-sm" required placeholder='e.g. stephenking@lorem.com' value={data.email} onChange={e => changeEmail(e)} />
        </div>
        <div className="form-group w-full">
          <label className="text-blue-900 text-sm font-semibold" htmlFor="phone">Phone Number</label>
          <input type="tel" name="" id="phone" inputMode='tel' minLength="10" className="block mt-0.5 sm:mt-1.5 w-full border border-gray-400 py-2 px-4 rounded-lg text-[#02295a] font-semibold text-sm" required placeholder='e.g. +1 234 567 890' value={data.phone} onChange={e => changePhone(e)} />
        </div>
      </form>
    </>
  )
}

export default PersonalInfo