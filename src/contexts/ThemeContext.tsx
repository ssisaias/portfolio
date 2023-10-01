import { DefaultTheme } from "styled-components";
import { darkTheme, defaultTheme } from "../styles/themes/default";
import { createContext, useState } from "react";
import { CommonProviderProps } from "../interface/interfaces";

interface ThemeContextType {
    currentTheme: DefaultTheme,
    changeTheme: (theme: string) => void
}

export const ThemeContext = createContext({} as ThemeContextType)

export function ThemeContextProvider({children}: CommonProviderProps){
    const [curTheme, setTheme] = useState(darkTheme);

    function changeTheme(theme: string){
        if(theme !== 'dark'){
            setTheme(defaultTheme);
        } else{
            setTheme(darkTheme);
        }
    }

    return (
        <ThemeContext.Provider value={{
            currentTheme:curTheme,
            changeTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}