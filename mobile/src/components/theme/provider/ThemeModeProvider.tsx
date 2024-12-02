import { createContext, ReactNode, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { DarkTheme, LightTheme } from '../../../styles/Theme.style';

type Props = {
  children?: ReactNode;
};

export type ThemeModeType = 'Light' | 'Dark';

type ThemeContextProps = {
  themeMode: ThemeModeType;
  setThemeMode: React.Dispatch<React.SetStateAction<ThemeModeType>>;
};

export const ThemeContext = createContext<ThemeContextProps>({
  themeMode: 'Light',
  setThemeMode: () => {},
});

export default function ThemeModeProvider({ children }: Props) {
  const [themeMode, setThemeMode] = useState<ThemeModeType>('Light');
  const targetTheme = themeMode === 'Light' ? LightTheme : DarkTheme;

  return (
    <ThemeContext.Provider value={{ themeMode, setThemeMode }}>
      <ThemeProvider theme={targetTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
