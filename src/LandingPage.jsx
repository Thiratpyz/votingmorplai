import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './style/LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logoContainer = document.querySelector('.logo-container');
    const textContainer = document.querySelector('.text-container');

    setTimeout(() => {
      logoContainer.style.opacity = '1';
      logoContainer.style.transform = 'scale(1.08)';
      setTimeout(() => {
        textContainer.style.opacity = '1';
      }, 100);
    }, 1000);
  }, []);

  const handleStartVoting = () => {
    navigate('/votingForm');
    console.log("Button clicked!");
  };

  return (
    <div className='px-5 pt-10'>
      <div className='flex flex-col items-center space-y-5 px-10'>
        <div className='logo-container'>
          <div className="flex justify-center top-5">
            <img
              className="w-9/12 lg:w-11/12 h-auto"
              src="https://councilpcshsst.vercel.app/logo.svg"
              alt="School Logo"
            />
          </div>
        </div>
      </div>
      <div className="text-container py-5 lg:py-20 xl:py-5 vsm:py-1">
        <div className="flex flex-col items-center space-y-5">
          <div className='whitespace-pre pt-5'>
            <h1 className="text">Popular Student<br></br>Voting</h1>
            <h1 id='test'></h1>
            <script>document.getElementById("test").innerHTML = data</script>
          </div>
          <div className='content-center' id='button'>
            <button onClick={handleStartVoting} className='px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg text-2xl'>
              Start Voting!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;  
