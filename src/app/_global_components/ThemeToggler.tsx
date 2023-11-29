'use client'

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsMoonStarsFill } from "react-icons/bs";
import { MdSunny } from "react-icons/md";

function ThemeToggler() {

  const { theme, setTheme } = useTheme()
  const systemTheme = 'system';
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  
  return (

    <div className="flex items-center">
      <p className="text-custom-dark-1 dark:text-custom-dark-text font-medium	capitalize mr-3 mt-1">{currentTheme}</p>
      <div className="h-8 w-8 text-xl font-bold	">
        {currentTheme === 'dark' ? (
          <button
            className="text-custom-dark-1 dark:text-custom-dark-text rounded-md p-2 dark:hover:bg-custom-dark-2/50 hover:transition duration-500	"
            onClick={() => setTheme('light')}
          >
            {' '}
            <BsMoonStarsFill />

          </button>
        ) : (
          <button
          className="text-custom-dark-1 dark:text-custom-dark-text rounded-md p-2 hover:bg-custom-dark-2/5 hover:transition duration-500"
          onClick={() => setTheme('dark')}
        >
          {' '}
         <MdSunny />
          </button>
        )}
      </div>
    </div>
  
  )
}

export default ThemeToggler
