//~ react
import React, { createContext, useContext, useEffect, useState } from 'react';

//~ react-native
import { useColorScheme } from 'react-native';

//~ theme
import { darkColors, lightColors } from './colors';

//~ interafaces
type Theme = {
  dark: boolean;
  colors: Record<string, string>;
  setScheme: (scheme: 'dark' | 'light') => void;
};

//* ////////////////////////////////////////////////////////////////////////////

export const ThemeContext = createContext<Theme>({
  dark: false,
  colors: lightColors,
  setScheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const colorScheme = useColorScheme();
  const [isDark, setIsDark] = useState<boolean>(colorScheme == 'dark');
  
  useEffect(() => {
    setIsDark(colorScheme == 'dark');
  }, [colorScheme]);

  const defaultTheme = {
    dark: isDark,
    colors: isDark ? darkColors : lightColors,
    setScheme: (scheme: 'dark' | 'light') => setIsDark(scheme === 'dark'),
  }

  return (
    <ThemeContext.Provider value={defaultTheme}>
      { children }
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext);