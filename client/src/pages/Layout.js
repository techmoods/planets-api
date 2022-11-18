import { Outlet, Link } from "react-router-dom";
import React, { useState } from 'react';

const Layout = () => {
    const [theme, setTheme] = useState('dark');
    const toggleTheme = () => {
        if (theme === 'light') {
          setTheme('dark');
        } else {
          setTheme('light');
        }
      };

    return (
        <div className={`App ${theme}`}>
            <nav className='bg-indigo-100 dark:bg-gray-900'>
                <div className='flex items-center justify-between px-6 h-16 text-md font-bold text-indigo-500'>
                    <Link to="/">Planet API</Link>
                    <div className="flex items-center justify-end p-2">
                    
                        <label htmlFor="default-toggle" className="inline-flex relative items-center mr-4 cursor-pointer">
                            <input onClick={toggleTheme} type="checkbox" value="" id="default-toggle" className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-indigo-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span className="hidden ml-3 mr-3 text-sm font-medium text-gray-900 dark:text-gray-300" id="theme-mode">Theme</span>
                        </label>
                        
                        <Link to="/subscribe">
                            <button className="relative inline-flex items-center justify-center p-0.5  overflow-hidden text-sm font-medium text-indigo-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                            <span className="relative px-3 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Subscribe
                            </span>
                            </button>
                        </Link>
                    </div>
                    
                </div>
            </nav>
            
            <div className='md:max-w-md md:mx-auto'>

                <Outlet />
            </div>
        </div>


    )
};

export default Layout;