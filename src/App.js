import tick from "./assets/tick-fill.png";
import tick2 from "./assets/tick.png";

import './App.css';

function App() {
  return (
    <div className=' h-screen w-full header'>
      <div className='container-fluid px-[5%] mx-auto text-white flex justify-between items-center pt-[25px]'>
        <h2 className='text-[26px] uppercase font-semibold cursor-pointer'>BROCESLLE DENTISTRY</h2>
        <nav>
          <ul className='flex items-center gap-[65px] text-[24px]'>
            <li><a href='#'>Our Service</a></li>
            <li><a href='#'>Pricing</a></li>
            <li><a href='#'>About</a></li>
          </ul>
        </nav>

        <button className='bg-[#0601FC] hover:bg-[#ffff] hover:text-black h-[64px] w-[189px] rounded-[82px] text-white text-[24px] cursor-pointer '>Register</button>

      </div>

      <div className='flex items-center justify-center'>
        <h1 className='text-[48px] text-white font-semibold text-center mt-[40px] max-w-[659px]'>Affordable Dental Solutions
          for Every Need</h1>
      </div>

      <div className='container mx-auto flex items-center justify-center mt-[45px] gap-[27px]'>
        <div className='bg-[#100CE0] hover:scale-105 transition-all duration-300 ease-out shadow-md text-white max-w-[386px] px-[48px] pb-[51px] rounded-[30px] flex items-center justify-center flex-col'>
         
          <div className='border-b-[#fff] border-b-[1px] pb-[15px]'>
            <h2 className='text-[#fff] text-[27px] font-semibold mt-[43px] mb-[4px] text-center'>Family Dental Plan</h2>
            <h3 className='text-[#fff] text-[50px] font-semibold text-center'>$99 <span className='text-[#fff] text-[20px] font-normal'>/year</span></h3>
          </div>
          <div className='mt-[26px] flex flex-col gap-[20px] mb-[51px]'>
            <div className='flex items-center gap-[12px]'>
              <img src={tick2} alt='' />
              <p>
                Annual check-ups and
                cleanings for the whole family
              </p>
            </div>
            <div className='flex items-center gap-[12px]'>
              <img src={tick2} alt='' />
              <p>
                X-rays as needed
              </p>
            </div>
            <div className='flex items-center gap-[12px]'>
              <img src={tick2} alt='' />
              <p>
                15% discount on
                additional services
              </p>
            </div>

          </div>
          <button className='bg-[#fff] h-[50px] w-[276px] rounded-[82px] text-black text-[#24px] font-medium'>Choose Plan</button>
        </div>
        <div className='bg-[#D9D9D9] group hover:scale-105 transition-all duration-300 ease-out shadow-2xl max-w-[386px] px-[48px] pb-[51px] rounded-[30px] flex items-center justify-center flex-col'>
          <button className='bg-[#0601FC] h-[38px] w-[143px] rounded-[82px] text-white mt-[-20px]'>Recomended</button>
          <div className='border-b-[#000000a8] border-b-[1px] pb-[15px]'>
            <h2 className='text-[#02007A] text-[27px] font-semibold mt-[43px] mb-[4px] text-center'>Family Dental Plan</h2>
            <h3 className='text-[#02007A] text-[50px] font-semibold text-center'>$299 <span className='text-[#02007A] text-[20px] font-normal'>/year</span></h3>
          </div>
          <div className='mt-[26px] flex flex-col gap-[20px] mb-[51px]'>
            <div className='flex items-center gap-[12px]'>
              <img src={tick} alt='' />
              <p>
                Annual check-ups and
                cleanings for the whole family
              </p>
            </div>
            <div className='flex items-center gap-[12px]'>
              <img src={tick} alt='' />
              <p>
                X-rays as needed
              </p>
            </div>
            <div className='flex items-center gap-[12px]'>
              <img src={tick} alt='' />
              <p>
                15% discount on
                additional services
              </p>
            </div>

          </div>
          <button className='bg-[#000] h-[64px] w-[276px] rounded-[82px] text-white text-[#24px] font-normal'>Get Started</button>
        </div>
        <div className='bg-[#0400DD] hover:scale-105 transition-all duration-300 ease-out shadow-lg text-white max-w-[386px] px-[48px] pb-[51px] rounded-[30px] flex items-center justify-center flex-col'>
        
          <div className='border-b-[#fff] border-b-[1px] pb-[15px]'>
            <h2 className='text-[#fff] text-[27px] font-semibold mt-[43px] mb-[4px] text-center'>Family Dental Plan</h2>
            <h3 className='text-[#fff] text-[50px] font-semibold text-center'>$499 <span className='text-[#fff] text-[20px] font-normal'>/year</span></h3>
          </div>
          <div className='mt-[26px] flex flex-col gap-[20px] mb-[51px]'>
            <div className='flex items-center gap-[12px]'>
              <img src={tick2} alt='' />
              <p>
                Annual check-ups and
                cleanings for the whole family
              </p>
            </div>
            <div className='flex items-center gap-[12px]'>
              <img src={tick2} alt='' />
              <p>
                X-rays as needed
              </p>
            </div>
            <div className='flex items-center gap-[12px]'>
              <img src={tick2} alt='' />
              <p>
                15% discount on
                additional services
              </p>
            </div>

          </div>
          <button className='bg-[#fff] h-[50px] w-[276px] rounded-[82px] text-black font-medium text-[#24px] '>Choose Plan</button>
        </div>
      </div>


    </div>
  );
}

export default App;
