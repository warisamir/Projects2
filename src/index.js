//usestate is a hook of reactjs
import ReactDOM from 'react-dom';
//import for import from particular path
import './index.css';
import CounterClass from './CounterClass'
//import Printmynames from './Printmynames';
//import Todo from './Todo';
///functional ->we get html from components
///
///bottom to top 
///Dom render -> content print -> html root -> id ->
//object-> props change-> static

// import React,{useState} from 'react';
  //  class CounterClass extends React.Component{
  //    state={
  //     count:10 
  //    }
    
  //     render(){
  //     return(
  //       <div>
  //   <span>
  //   <button onClick={this.incresecnt} >*</button>
  //  </span> <span>
  //   <button onClick={this.decresecnt}>/</button></span>
  //   <p>{this.state.count}</p>
    
  //   </div>
  //     )
  //   }
  // }
///count-> state variable define -> initial value->0
//update count -> update

import React, { useState } from 'react';
  function Counterfn() {
    let [count, update]=useState(0);
      const  incresecnt=()=>{
      update(count+1);
    }
     const decresecnt =()=>{
         update(count-1);
     } 
     return (<div>
    
    <button onClick={incresecnt} >+</button>
   
    <button onClick={decresecnt}>-</button>
    <p>{this.state.count}</p>
    
    </div>
      )
    }
//my name is this and that for 4 student

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<Printmynames></Printmynames>,
// {/* <CounterClass></CounterClass> */}
     
     <Counterfn> </Counterfn>
    //  <Todo></Todo>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

