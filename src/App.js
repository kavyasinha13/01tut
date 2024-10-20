import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {

  let [counter,setCounter]= useState(15);
 
   //let counter=15;
   const addValue=()=>{
     console.log("clicked",)
    // counter=counter+1;
    setCounter(counter+1);
   }
 
   const removeValue=()=>{
     setCounter(counter-1);
   }
 
   return (
     <>
       <h1>React</h1>
       <h2>Counter Value:{counter}</h2>
       <button
        onClick={addValue}
        >Add value</button>
       <br/>
       <button
       onClick={removeValue}
       >Remove value</button>
     </>
   )
 }

export default App;
