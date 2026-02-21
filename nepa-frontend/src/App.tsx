import React, { useState } from 'react';
import { useStellar } from './hooks/useStellar';
import { WalletConnector } from './components/WalletConnector';
import { PaymentForm } from './components/PaymentForm';

const App: React.FC = () => {
  const { isConnected, address } = useStellar();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="bg-blue-600 text-white p-2 rounded-lg">
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7m7 7v7l-7 7H4" />
                </svg>
              </div>
              <span className="ml-2 sm:ml-3 text-lg sm:text-xl font-bold text-gray-900">
                NEPA
              </span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-4 sm:space-x-6 lg:space-x-8">
              <a 
                href="#dashboard" 
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm sm:text-base font-medium transition-colors duration-200"
              >
                Dashboard
              </a>
              <a 
                href="#payments" 
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm sm:text-base font-medium transition-colors duration-200"
              >
                Payments
              </a>
              <a 
                href="#analytics" 
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm sm:text-base font-medium transition-colors duration-200"
              >
                Analytics
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-blue-600 p-2 rounded-md min-h-[44px] min-w-[44px] touch-manipulation transition-colors duration-200"
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  )}
                </svg>
              </button>
            </div>

            {/* Wallet Connection */}
            <div className="flex items-center">
              <WalletConnector />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 shadow-lg">
          <nav className="max-w-7xl mx-auto px-3 sm:px-4 py-3">
            <div className="space-y-1">
              <a 
                href="#dashboard" 
                className="block text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Dashboard
              </a>
              <a 
                href="#payments" 
                className="block text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Payments
              </a>
              <a 
                href="#analytics" 
                className="block text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Analytics
              </a>
            </div>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1">
        <div className="py-6 sm:py-8 lg:py-12">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
            {/* Welcome Section */}
            <div className="text-center mb-8 sm:mb-12">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Welcome to NEPA
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto">
                Nigeria Electricity Payment Platform
              </p>
            </div>

            {/* Conditional Content Based on Connection Status */}
            {isConnected ? (
              <div className="space-y-8 sm:space-y-12">
                {/* User Info */}
                <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 lg:p-8">
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                    Connected Wallet
                  </h2>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm sm:text-base text-gray-600">
                        Wallet Address
                      </p>
                      <p className="text-xs sm:text-sm font-mono text-gray-800 bg-gray-100 px-2 py-1 rounded mt-1">
                        {address ? `${address.slice(0, 6)}...${address.slice(-4)}` : 'Not connected'}
                      </p>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-4">
                      <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                        Connected
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow duration-200">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                      Quick Payment
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-4">
                      Make instant payments
                    </p>
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-lg transition-colors duration-200 text-sm sm:text-base min-h-[44px] touch-manipulation transform active:scale-95">
                      Pay Now
                    </button>
                  </div>

                  <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow duration-200">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                      View History
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-4">
                      Payment history
                    </p>
                    <button className="w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-lg transition-colors duration-200 text-sm sm:text-base min-h-[44px] touch-manipulation transform active:scale-95">
                      View History
                    </button>
                  </div>

                  <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow duration-200">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                      Analytics
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-4">
                      Usage analytics
                    </p>
                    <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-lg transition-colors duration-200 text-sm sm:text-base min-h-[44px] touch-manipulation transform active:scale-95">
                      View Analytics
                    </button>
                  </div>
                </div>

                {/* Payment Form */}
                <div className="mt-8 sm:mt-12">
                  <PaymentForm 
                    onSubmit={(data) => {
                      console.log('Payment submitted:', data);
                    }}
                    isLoading={false}
                  />
                </div>
              </div>
            ) : (
              /* Not Connected State */
              <div className="text-center py-12 sm:py-16 lg:py-24">
                <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 lg:p-12 max-w-md sm:max-w-lg mx-auto">
                  <div className="flex justify-center mb-4">
                    <div className="bg-yellow-100 rounded-full p-3">
                      <svg className="w-8 h-8 sm:w-12 sm:h-12 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01" />
                      </svg>
                    </div>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                    Connect Your Wallet
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 mb-6">
                    Please connect your Stellar wallet to access the NEPA payment platform
                  </p>
                  <div className="space-y-3 sm:space-y-4">
                    <button 
                      onClick={() => console.log('Connect wallet')}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 sm:py-5 px-4 sm:px-6 rounded-lg transition-colors duration-200 text-sm sm:text-base min-h-[48px] sm:min-h-[52px] touch-manipulation transform active:scale-95"
                    >
                      Connect Wallet
                    </button>
                    <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-4 sm:py-5 px-4 sm:px-6 rounded-lg transition-colors duration-200 text-sm sm:text-base min-h-[48px] sm:min-h-[52px] touch-manipulation transform active:scale-95">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;

