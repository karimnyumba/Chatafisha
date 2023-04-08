import React from 'react';
import Logo from '/src/assets/Logo.png';

function Navbar() {
  return (
    <nav className="bg-white py-10 flex justify-between items-center">
      <div className="flex items-center">
        <h1 className="text-lg font-bold mr-4" style={{top: '53px'}}>CHATAFISHA</h1>
        <img src={Logo} alt="Logo" className="h-6" style={{top: '53px'}} />
      </div>
      <div className="flex items-center">
        <a href="#" className="mr-4 hover:underline absolute" style={{ width: '62px', height: '20px', left: '943px', top: '53px' }}>
          Home
        </a>
        <a href="#" className="mr-4 hover:underline absolute" style={{ width: '62px', height: '20px', left: '1028px', top: '53px' }}>
          Login
        </a>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold text-xs py-0 px-10 rounded-md shadow transition-all duration-300 absolute" style={{ width: '104px', height: '22px', left: '1099px', top: '49px' }}>
  Connect Wallet
</button>


      </div>
    </nav>
  );
}

export default Navbar;
