import { useContext } from "react";
import { GlobalContext } from "../../context";


function ContentTextComponent()
{
    const { theme, setTheme } = useContext(GlobalContext);


    return <h1  style={{
        fontSize :  theme === "light" ? "50px" : "100px",
        backgroundColor : theme === "light"  ? "white" : "black",
        color : theme === "light" ? "blue" : "yellow"}}> ESHWAR </h1>
}

export default ContentTextComponent;

