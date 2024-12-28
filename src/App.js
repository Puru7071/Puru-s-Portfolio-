import './App.css';
import Header from './components/Header';
import Intro from './components/Intro';
import About from './components/About';
import Tech from './components/Tech';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import { useMediaQuery } from 'react-responsive';
import IntroMobile from './mobileComponents/IntroMobile';
import MoreInfo from './components/MoreInfo';
import GetInTouch from './components/GetInTouch';
import GetInTouchMobile from './mobileComponents/GetInTouchMobile';

function App() {
  const isMobile = useMediaQuery({ query: '(max-width: 950px)' })
  return (
    <div
      className='min-h-screen w-full max-w-[100vw] bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] flex flex-col overflow-x-hidden'>
        <Header isMobile={isMobile}/>
        {isMobile ? <IntroMobile/> : <Intro/>}
        <About/>
        <Tech/>
        <Experience isMobile = {isMobile}/>
        <Projects isMobile={isMobile}/>
        <Education isMobile={isMobile}/>
        <MoreInfo/>
        {isMobile ? <GetInTouchMobile/> : <GetInTouch/>}
        {isMobile ? 
           <div className=' w-[80%] m-auto flex justify-center items-center h-[100px] text-white text-xs text-center mb-[50px]'>Copyright ©2024 All rights reserved | Designed and developed by Puru</div>
          :<div className=' w-[80%] m-auto flex justify-center items-center h-[100px] text-white text-2xl mb-[50px]'>Copyright ©2024 All rights reserved | Designed and developed by Puru</div>
        }
    </div>
  );
}

export default App;
