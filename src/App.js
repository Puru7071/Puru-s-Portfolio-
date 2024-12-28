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
import HeaderMobile from './mobileComponents/HeaderMobile';

function App() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  return (
    <div
      className='min-h-screen w-[100%] bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] flex flex-col overflow-scroll'>
        <Header isMobile={isMobile}/>
        {isMobile ? <IntroMobile/> : <Intro/>}
        <About/>
        <Tech/>
        <Experience isMobile = {isMobile}/>
        <Projects isMobile={isMobile}/>
        <Education/>
    </div>
  );
}

export default App;
