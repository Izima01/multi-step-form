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

function App() {
  const loc = useLocation();
  const current = loc.pathname;

  return (
    <AppProvider>
      {/* mobilw view */}
      <div className={`sm:hidden w-full flex flex-col relative ${current === "/plan" ? "h-[110vh]" : "h-[100vh]"} gap-0`}>
        <div className="w-full bg-cover topnav h-2/5">
          <div className="mt-7 w-full">
            <Navbar />
          </div>
        </div>
        <div className="bg-[#ecf3fd] w-full h-3/5" />
        <div className="w-[90%] absolute left-[5%] mx-auto top-[5.5rem] rounded-2xl bg-white px-6 py-4">
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
        <div className='fixed bottom-0 w-full px-4 py-3 shadow-2xl shadow-black bg-white'>
          <Footer />
        </div>
      </div>

      {/* desktop view */}
      <div className='w-full min-h-screen hidden sm:flex items-center justify-center bg-[#f0f6ff]'>
        <div className='p-4 flex items-stretch justify-between rounded-2xl sm:w-[80%] lg:w-[70%] bg-[#fafbff] shadow-lg shadow-slate-300'>
          <NavBar_Desktop />
          <div className='px-10 md:px-16 lg:px-20 w-[70%] pt-8 pb-4'>
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
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </AppProvider>

  )
}

export default App
