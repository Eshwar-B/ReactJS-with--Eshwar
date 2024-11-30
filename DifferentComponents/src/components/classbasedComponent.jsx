import { Component } from "react";



class ClassBasedComponenent  extends Component
{

    // demostate = {
    //     showText : false,
    // };

    constructor(props)
    {
        console.log("constructor Invoked");
        super(props);
        this.state = {
                        showText : false,
                        changeColor : false,
                        count : 0,
                        changeCountStyle : false,
                      };
    }


     handleClick =  () =>
    {
        const {showText, changeColor} = this.state;
        console.log("Button clicked");
         this.setState({ showText : !showText,
                        changeColor : !changeColor,
                       
                     });
    };

    setCount = () => 
    {
        console.log("Count button clicked");
        this.setState({count : this.state.count+1});
    };


    // componentDidMount()
    // {
    //     console.log(" component did mount page loaded");
    // }

    componentDidUpdate(prevProps, prevState)
    {
        console.log("Component did update ");
        console.log("previous props",prevProps);
        console.log("previous state",prevState);
        console.log("current state",this.state);

        if(prevState && prevState.count != this.state.count && this.state.count === 10)
        {
            this.setState({...this.state, changeCountStyle : true});
        }
    }

    componentWillUnmount()
    {
        console.log("component unmounted");
    }

    render(){
        console.log("render method invoked");

        const {showText, count,  changeColor, changeCountStyle} = this.state;

        // console.log(showText, count);

        console.log(this.state.changeColor);
        return  <div>  
                        {/* { showText ? <h4> Text  is visible </h4> : <h4> Text hidden</h4>  } */}
                        {/* { <h4 style={{color : this.state.changeColor ? "red" : "green"}}>Text Color</h4>} */}
                        { this.state.changeColor ? <h4 style={{color : "red"}}>Text Red</h4>: <h4 style={{color : "green"}}>Text Green</h4>}

                        <h3> class based component </h3>
                        <button onClick={this.handleClick}> Toggle  Text</button>
                        <button onClick={this.setCount}> Increase Count value</button>
                        <h3 style={{ color : changeCountStyle ? "blue":"orange" , fontSize : changeCountStyle ? "30px": "10px"}}>Count is {count}</h3>

                </div>

            
    };


}

export default ClassBasedComponenent