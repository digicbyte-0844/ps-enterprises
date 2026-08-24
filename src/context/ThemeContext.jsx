import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext({
  isDarkMode: false,
  toggleDarkMode: () => {}
});

export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Default is explicitly LIGHT MODE
    try {
      const savedTheme = localStorage.getItem('ps_theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return false; // Always default to Light Mode
    } catch (e) {
      return false;
    }
  });

  useEffect(() => {
    try {
      const root = document.documentElement;
      if (isDarkMode) {
        root.classList.add('dark');
        localStorage.setItem('ps_theme', 'dark');
      } else {
        root.classList.remove('dark');
        localStorage.setItem('ps_theme', 'light');
      }
    } catch (e) {}
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    return {
      isDarkMode: false,
      toggleDarkMode: () => {}
    };
  }
  return context;
}
