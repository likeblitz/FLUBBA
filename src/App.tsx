import { useState } from 'react';
import flubbaCharacter from './assets/h.png';
import telegramIcon from './assets/telegram.png';
import xIcon from './assets/x.svg';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute -top-4 -left-4 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"></div>
        <div className="absolute -bottom-8 -right-4 w-80 h-80 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-yellow-300 to-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-pulse animation-delay-4000"></div>
        
        {/* Falling Cash Animation */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className={`cash-bill cash-${i + 1}`}>💸</div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-4 md:p-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="text-2xl md:text-3xl font-black text-white tracking-wider font-sunday text-stroke">
            FLUBBA
          </div>
          <div className="text-lg md:text-xl">🚀</div>
        </div>

        {/* Desktop Navigation - Social + Buy Button */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Social Buttons */}
          <div className="flex items-center space-x-3">
            {/* Telegram Button */}
            <button
             onClick={() => window.open('https://t.me/FlubbaFurie', '_blank')}
              className="relative bg-gradient-to-r from-yellow-300 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 text-black font-black p-3 rounded-full border-4 border-black
                         transform hover:scale-110 transition-all duration-300 shadow-lg flex items-center justify-center"
            >
              <img src={telegramIcon} alt="Telegram" className="w-6 h-6" />
            </button>
            
            {/* X (Twitter) Button */}
            <button
             onClick={() => window.open('https://x.com/FlubbaFurie', '_blank')}
              className="relative bg-gradient-to-r from-yellow-300 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 text-black font-black p-3 rounded-full border-4 border-black
                         transform hover:scale-110 transition-all duration-300 shadow-lg flex items-center justify-center"
            >
              <img src={xIcon} alt="X" className="w-6 h-6" />
            </button>
          </div>
          
          {/* Buy Button */}
          <button
           onClick={() => window.open('https://app.uniswap.org/', '_blank')}
            className="relative bg-gradient-to-r from-yellow-300 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 text-black font-black text-lg px-10 py-4 rounded-full border-4 border-black font-sunday
                       transform hover:scale-110 transition-all duration-300 shadow-lg"
          >
            BUY
          </button>
        </div>

        {/* Mobile Navigation - Social + Buy Button */}
        <div className="md:hidden flex items-center space-x-2">
          {/* Mobile Social Buttons */}
          <div className="flex items-center space-x-2">
            {/* Telegram Button */}
            <button
             onClick={() => window.open('https://t.me/FlubbaFurie', '_blank')}
              className="relative bg-gradient-to-r from-yellow-300 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 text-black font-black p-2 rounded-full border-2 border-black
                         transform hover:scale-110 transition-all duration-300 shadow-md flex items-center justify-center"
            >
              <img src={telegramIcon} alt="Telegram" className="w-4 h-4" />
            </button>
            
            {/* X (Twitter) Button */}
            <button
             onClick={() => window.open('https://x.com/FlubbaFurie', '_blank')}
              className="relative bg-gradient-to-r from-yellow-300 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 text-black font-black p-2 rounded-full border-2 border-black
                         transform hover:scale-110 transition-all duration-300 shadow-md flex items-center justify-center"
            >
              <img src={xIcon} alt="X" className="w-4 h-4" />
            </button>
          </div>
          
          {/* Mobile Buy Button */}
          <button
           onClick={() => window.open('https://app.uniswap.org/', '_blank')}
            className="relative bg-gradient-to-r from-yellow-300 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 text-black font-black text-sm px-6 py-2 rounded-full border-2 border-black font-sunday
                       transform hover:scale-110 transition-all duration-300 shadow-md"
          >
            BUY
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-[calc(100vh-100px)] px-4">
        {/* Title ABOVE image */}
        <div className="text-center mb-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-wider drop-shadow-2xl font-sunday text-stroke-thick">
            FLUBBA
          </h1>
        </div>

        {/* Character Image with Gradient Glow */}
        <div className="relative mb-8 md:mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full blur-3xl opacity-30 scale-125 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full blur-2xl opacity-25 scale-110 animate-pulse animation-delay-1000"></div>
          <div className="absolute inset-0 bg-white rounded-full blur-xl opacity-20 scale-105 animate-pulse animation-delay-2000"></div>
          
          <img
            src={flubbaCharacter}
            alt="FLUBBA Character"
            className="relative z-10 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain drop-shadow-2xl animate-bounce"
            style={{ animationDuration: '3s' }}
          />
        </div>

        {/* Contract Address styled like Buy Button */}
        <div className="text-center">
          <div
            className="relative bg-gradient-to-r from-yellow-300 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 text-black font-bold text-xs md:text-sm px-6 md:px-10 py-3 rounded-full border-2 md:border-4 border-black font-mono
                       transform hover:scale-105 transition-all duration-300 break-all max-w-full shadow-md"
          >
            0x07713d260DaE4ef0db2Ab7b5F60A1Da852bD5f0B
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 text-5xl animate-bounce animation-delay-1000">💎</div>
      <div className="absolute top-40 right-10 text-4xl animate-bounce animation-delay-2000">🚀</div>
      <div className="absolute bottom-40 left-20 text-3xl animate-bounce animation-delay-3000">⭐</div>
      <div className="absolute bottom-20 right-20 text-4xl animate-bounce animation-delay-4000">🌙</div>
    </div>
  );
}

export default App;
