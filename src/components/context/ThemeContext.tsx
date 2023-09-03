//将ts里的值作为style 使用在 box里

import { createContext } from "react";
import { theme } from "./theme";

type ThemeContextProviderProps = {
  children: React.ReactNode;
}; //允许react node 作为children. 例如一个element
export const ThemeContext = createContext(theme);
//用createContext的时候,就type了类型和keys

const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  console.log(ThemeContext);
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
export default ThemeContextProvider;
