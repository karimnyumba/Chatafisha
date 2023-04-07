import React from 'react';
import Logo from '/src/assets/Logo.png'
function Navbar() {
  return (
    <nav className="bg-white py-3 flex justify-between items-center">
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="h-6 mr-4" />
        <h1 className="text-lg font-bold">CHATAFISHA</h1>
      </div>
      <div className="flex items-center">
        <a href="#" className="mr-4 hover:underline">Home</a>
        <a href="#" className="mr-4 hover:underline">Login</a>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300">Connect Wallet</button>
      </div>
    </nav>
  );
}

export default Navbar;
