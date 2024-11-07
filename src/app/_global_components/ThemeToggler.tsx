'use client';

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsMoonStarsFill } from "react-icons/bs";
import { MdSunny } from "react-icons/md";

function ThemeToggler() {  
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {    
    setMounted(true);  
  }, []);

  if (!mounted) return null;

  // Determine if dark mode is currently active
  const isDarkTheme = theme === 'dark' || (theme === 'system' && window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (    
    <div className="flex items-center">
      {/* Toggle text to show the opposite theme */}
      <p className="text-link-text font-medium capitalize mr-3 mt-1">
        {isDarkTheme ? "Light" : "Dark"}
      </p>

      <div className="h-8 w-8 text-xl font-bold">        
        {isDarkTheme ? (
          <button
            className="text-link-text rounded-md p-2 hover:bg-background-1/30  hover:transition duration-500"
            onClick={() => setTheme('light')}
          >
            <MdSunny /> {/* Sun icon for Light theme */}
          </button>
        ) : (
          <button
            className="text-link-text rounded-md p-2 hover:bg-background-1/30 hover:transition duration-500"
            onClick={() => setTheme('dark')}
          >
            <BsMoonStarsFill /> {/* Moon icon for Dark theme */}
          </button>
        )}
      </div>    
    </div>  
  );
}

export default ThemeToggler;