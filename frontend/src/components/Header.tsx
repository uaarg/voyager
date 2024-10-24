// src/components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-gray-300 text-black p-4 flex justify-between items-center">
            {/* Left side - Logo and Search Bar */}
            <div className="flex items-center space-x-4">
                {/* Logo */}
                <div className="bg-black p-2 rounded-lg">
                    <img src="/path-to-logo" alt="Logo" className="h-8 w-8" />
                </div>

                {/* Search bar */}
                <input
                    type="text"
                    placeholder="Voyager"
                    className="bg-gray-200 border border-gray-400 rounded-full px-4 py-2 text-sm focus:outline-none"
                />
            </div>

            {/* Right side - Home, Settings Icon, Profile Image */}
            <div className="flex items-center space-x-6">
                {/* Home Button */}
                <button className="text-sm font-medium">Home</button>

                {/* Settings Icon */}
                <div className="bg-gray-400 p-2 rounded-full">
                    <img src="/path-to-settings-icon" alt="Settings" className="h-6 w-6" />
                </div>

                {/* Profile Image */}
                <div className="h-8 w-8 rounded-full overflow-hidden">
                    <img
                        src="/path-to-profile-image"
                        alt="Profile"
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;

