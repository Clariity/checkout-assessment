import { createContext, ReactNode, useContext } from "react";
import { useLocalStorage } from "../functions/hooks";

interface SettingsContextType {
  theme: string | null;
  switchTheme: () => void;
}

interface SettingsContextProps {
  children: ReactNode;
}

export const SettingsContext = createContext<SettingsContextType>({
  theme: null,
  switchTheme: () => null,
});

export const useSettings = () => useContext(SettingsContext);

export const SettingsProvider = ({ children }: SettingsContextProps) => {
  const [theme, setTheme] = useLocalStorage("theme", null);

  function switchTheme() {
    const newTheme = theme === "dark" ? "light" : "dark";
    const root = document.body;
    root.classList.remove(theme);
    root.classList.add(newTheme);
    setTheme(newTheme);
  }

  return (
    <SettingsContext.Provider
      value={{
        theme,
        switchTheme,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
