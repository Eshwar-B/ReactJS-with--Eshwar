import { createContext, useState } from "react";

// create the context
export const GlobalContext = createContext(null);

// create the GlobalState that receive component as childern

function GlobalState({children})
{
    
    const [theme, setTheme] = useState('light');

    function handleSetThemeOnButtonClick()
    {
        setTheme(theme === "light" ? "dark" : "light")
    }

    return <GlobalContext.Provider value={{theme, handleSetThemeOnButtonClick}}> {children} </GlobalContext.Provider>
}

export default GlobalState;