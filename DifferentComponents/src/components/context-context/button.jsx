import { useContext } from "react";
import { GlobalContext } from "../../context";

function ContentButtonComponent()
{
    const {handleSetThemeOnButtonClick, theme} = useContext(GlobalContext);

    return <button onClick={handleSetThemeOnButtonClick}>Change Theme</button>
}

export default ContentButtonComponent;
