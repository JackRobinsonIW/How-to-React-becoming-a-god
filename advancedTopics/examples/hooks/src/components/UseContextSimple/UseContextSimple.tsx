import { useContext, createContext } from 'react'

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = createContext(themes.light);

export const UseContextSimple = () => {
  return (
    <>
      <ThemeContext.Provider value={themes.dark}>
        <Toolbar />
      </ThemeContext.Provider>
      {/* <ThemeContext.Provider value={themes.light}>
        <Toolbar />
      </ThemeContext.Provider> */}
    </>
  );
}


/**
 * Toolbar component.
 * 
 * It ises a component that needs some styles passed to it
 */
const Toolbar = () => {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}


/**
 * Themed Button component.
 * 
 * This is a component that reads styles from the context it is used in
 */
const ThemedButton = () => {
  const theme = useContext(ThemeContext); 

  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}