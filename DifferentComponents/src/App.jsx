import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassBasedComponenent from './components/classbasedComponent'
import FunctionalBasedComponent from './components/functiionalBasedComponent'
import Productlist from './components/products'
import ProductItem from './components/products/proComponents/product-item'
import Users from './components/users'

import ContentButtonComponent from './components/context-context/button'
import ContentTextComponent from './components/context-context/text'
import UseReducer from './components/useReducer-example'



const dummyProductData = ['product1','product2','product3'];

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div >
          <h1>Welcome to ReactJS </h1>    

          {/* <ClassBasedComponenent /> */}

          {/*<FunctionalBasedComponent /> */}

          {/* <Productlist dummyProductData={dummyProductData} name="Eshwar" city="Hyd" age="21" /> */}


          {/* <Users /> */}

          {/* <ContentTextComponent />
          <ContentButtonComponent /> */}

          <UseReducer />

          </div>
    
  )
}

export default App
