import { useEffect, useState } from "react";
import ProductItem from "./proComponents/product-item";
import './styles.css';

const Productlist = ({name, city, age, dummyProductData }) => {


    

    const[flag,setFlag] = useState(true);
    const[count,setCount] = useState(0);
    const[currentStyle,setStyle] = useState(false);

    const toggleText = () => {

        setFlag(!flag);
    }

    useEffect(() => {
        setFlag(!flag);
        console.log("run only once on page load");
        
    },[]);

    const handleIncreaseCount = () =>
    {
        setCount(count+1);
    }

    useEffect( () => {
        if((count % 5) === 0) 
            {
                setStyle(!currentStyle);
                console.log("Button Color changed");
            }
        return () => {console.log("useState returning callBack function");};
    },[count]

    
    )

    return (
        <div>
            <h3 className="title">E-commerce website</h3>
            <button onClick={toggleText}>Toggle the text</button>

            {
                flag ? <h4>{name} from  {city} </h4>
                     : <h4>Hello World</h4>
                
            }

            <button onClick={handleIncreaseCount} style={{backgroundColor : currentStyle ? "black" : "white", color: currentStyle ? "white" : "black"}}> Increment count</button>

            <h4>Count is {count}</h4>
            

            <ul>
                {
                    dummyProductData.map((item, index) => (
                        <ProductItem singleProductItem={item} key={index} />  // Pass key to the outer element
                    ))
                }
            </ul>
        </div>
    );
};

export default Productlist;
