import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar_Mobile';
import { AppProvider } from './Context/AppContext';
import AddOns from './Pages/AddOns';
import FinishUp from './Pages/FinishUp';
import PersonalInfo from './Pages/PersonalInfo';
import SelectPlan from './Pages/SelectPlan';
import Thanks from './Pages/Thanks';
import CheckStarted from './Components/CheckStarted';
import NavBar_Desktop from './Components/NavBar_Desktop';
import Hovy from './Components/Hovy';
import { useState } from 'react';

function App() {
  const loc = useLocation();
  const current = loc.pathname;
  const [top, setTop] = useState("50%");
  const [left, setLeft] = useState("50%");
  const [opacity, setOpacity] = useState(0);

  const mouseOver = (e) => {
    if (e?.relatedTarget?.tagName === "BUTTON") {
      setOpacity(0);
      // console.log(e);
    } if (e?.relatedTarget?.tagName === "INPUT") {
      setOpacity(0);
      // console.log(e);
    } else {
      setOpacity(0.7);
      setTop(e.clientY-28);
      setLeft(e.clientX-28);
    }
  };

  return (
    <AppProvider>
      {/* mobile view */}
      <div className={`sm:hidden w-full flex flex-col relative h-[90vh] gap-0`}>
        <div className="w-full bg-cover h-2/5 topnav">
          <div className="mt-9 w-full">
            <Navbar />
          </div>
        </div>
        <div className="bg-[#ecf3fd] w-full h-3/5" />
        <div className="w-[86%] absolute -translate-y-1/2 top-[45%] left-[7%] mx-auto rounded-2xl bg-white p-6">
          <Routes>
            <Route path='/' element={<PersonalInfo />} />
            <Route element={<CheckStarted />}>
              <Route path='/plan' element={<SelectPlan />} />
              <Route path='/add-ons' element={<AddOns />} />
              <Route path='/finish' element={<FinishUp />} />
              <Route path='/thanks' element={<Thanks />} />
            </Route>
          </Routes>
        </div>
        <div className='fixed bottom-0 left-0 w-full px-4 py-3 shadow-2xl shadow-black bg-white'>
          <Footer />
        </div>
      </div>

      {/* desktop view */}
      <div className='w-full min-h-screen hidden sm:flex items-center justify-center bg-[#f0f6ff] relative overflow-y-hidden'>
        <div className='p-4 flex items-stretch justify-between rounded-2xl my-10 lg:my-0 sm:w-[80%] lg:w-[70%] bg-[#fafbff] shadow-lg shadow-slate-300 overflow-x-hidden' onMouseOver={(e) => mouseOver(e)} onMouseLeave={() => setOpacity(0)}>
          <NavBar_Desktop />
          <div className='px-8 md:px-12 lg:px-20 w-[63%] lg:w-[70%] pt-8 pb-4'>
            <Routes>
              <Route path='/' element={<PersonalInfo />} />
              <Route element={<CheckStarted />}>
                <Route path='/plan' element={<SelectPlan />} />
                <Route path='/add-ons' element={<AddOns />} />
                <Route path='/finish' element={<FinishUp />} />
                <Route path='/thanks' element={<Thanks />} />
              </Route>
            </Routes>
            <div className='mt-14'>
            </div>
            <Footer />
          </div>
          <Hovy top={top} left={left} opacity={opacity} />
        </div>
      </div>
    </AppProvider>

  )
}

export default App
