import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyFunction()
{
  return   (  <div>
    
                <h3>------ My own Custom Function ------</h3> 

            </div>);
}


const ReactElement = 
{
    type: 'a',
    props: 
    {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit GOOGLE'
};


const NewElement = ( <a href='https://google.com'  target='_self'> Visit GOOGLE </a> );


const firstUser = "Eshwar";
const secondUser = " Shiva Sai";

const Link = React.createElement( 
    'a',
    {href : "https://www.amazon.in/l/976442031/?_encoding=UTF8&pd_rd_w=hXLqy&content-id=amzn1.sym.9482e7be-6dcd-44bf-bc15-a19dd78e17e8&pf_rd_p=9482e7be-6dcd-44bf-bc15-a19dd78e17e8&pf_rd_r=MCFMZ6XRQT303PNNFJNB&pd_rd_wg=f08aU&pd_rd_r=0653b881-f3f0-40a5-91bf-f453c3a3c1b6&ref_=pd_hp_d_hero_unk" , target : '_blank'},
    'Click here to shop in AMAZON , welcome ${firstUser} and ${secondUser} !!',
    
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  Link  );


