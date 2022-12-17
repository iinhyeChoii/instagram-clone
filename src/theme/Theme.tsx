import React, { createContext, useEffect, useState } from 'react';
import { ThemeProvider as ThemeProviderStyled } from 'styled-components/native';
import { darkTheme } from './darkTheme';
import { lightTheme } from './lightTheme';
import {
  getAsyncStorageData,
  storeAsyncStorageData,
} from '../utils/AsyncStorageUtils';

export enum ThemeType {
  light = 'light',
  dark = 'dark',
}

const themes = {
  light: lightTheme,
  dark: darkTheme,
};

export const ThemeContext = createContext({
  theme: ThemeType.light,
  toggleTheme: () => {},
});

type Props = {
  children?: React.ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState(ThemeType.light);

  useEffect(() => {
    loadTheme();
  }, []);

  async function loadTheme() {
    try {
      const savedTheme = await getAsyncStorageData('@theme');
      if (savedTheme) {
        setTheme(savedTheme);
      }
    } catch (e) {
      // error reading value
    }
  }

  function toggleTheme() {
    let selectTheme;

    if (theme === ThemeType.light) {
      selectTheme = ThemeType.dark;
    } else {
      selectTheme = ThemeType.light;
    }

    setTheme(selectTheme);

    storeAsyncStorageData('@theme', selectTheme);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProviderStyled theme={themes[theme]}>
        {children}
      </ThemeProviderStyled>
    </ThemeContext.Provider>
  );
};
