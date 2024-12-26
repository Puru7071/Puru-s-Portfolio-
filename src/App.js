import './App.css';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Intro from './components/Intro';

function App() {
  return (
    //   <motion.div
    //     initial = {{ opacity : 0 , scale : 0.1}}
    //     whileInView={{ opacity : 1 , scale : 1}}
    //     transition={{duration : 0.5}}
    //     className='h-[200px] w-[500px] border-[2px] border-[black] m-auto overflow-hidden rounded-2xl flex justify-start items-center p-[10px] mt-[120vh]'>
    //     <motion.div
    //       className='h-[100px] w-[100px] rounded-[10px] bg-slate-500 relative'
    //       initial={{ opacity: 0, x: "-110px" }}
    //       whileInView={{ opacity: 1, rotate: 360, x: "0px" }}
    //       transition={{ duration: 1 }}
    //     >
    //     </motion.div>
    //   </motion.div>
    <div
      className='min-h-screen w-[100%] bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] flex flex-col overflow-scroll'>
        <Header/>
        <Intro/>
    </div>
  );
}

export default App;
