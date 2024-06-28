import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className=' h-screen w-full header'>
      <div className='container-fluid px-[5%] mx-auto text-white flex justify-between items-center pt-[51px]'>
        <h2 className='text-[26px] uppercase font-semibold cursor-pointer'>BROCESLLE DENTISTRY</h2>
        <nav>
          <ul className='flex items-center gap-[65px] text-[24px]'>
            <li><a href='#'>Our Service</a></li>
            <li><a href='#'>Pricing</a></li>
            <li><a href='#'>About</a></li>
          </ul>
        </nav>

        <button className='bg-[#0601FC] h-[64px] w-[189px] rounded-[82px] text-white text-[24px] cursor-pointer '>Register</button>

      </div>

    <div className='flex items-center justify-center'>
    <h1 className='text-[48px] text-white font-semibold text-center mt-[70px] max-w-[659px]'>Affordable Dental Solutions
    for Every Need</h1>
    </div>

    <div>
      <div>
        <button>Recomended</button>
        <div>
          <h2>Family Dental Plan</h2>
          <h3>$299 <span>/year</span></h3>
        </div>
        d<div>
          
        </div>
      </div>
    </div>
    
    
    </div>
  );
}

export default App;
