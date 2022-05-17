
import React ,{Component} from 'react';
 import ReactDOM from 'react-dom';
// //import for import from particular path
// import './index.css';

//import Printmynames from './Printmynames';
//import Todo from './Todo';
///functional ->we get html from components
///
///bottom to top 
///Dom render -> content print -> html root -> id ->
//object-> props change-> static

  class CounterClass extends React.Component{
     state={
      count:10 
     }
     incresecnt=()=>{
       this.setState({
         count:this.state.count +1
       })
     }
     decresecnt=()=>{
      this.setState({
        count:(this.state.count)-1
      })
    }
    
     //jis interaction jo change karna hai wo change kardo 
    ///if u change the state then render function will run again with the loop state variable
    render(){
      return(
        <div>
    <span>
    <button onClick={this.incresecnt} >+</button>
   </span> <span>
    <button onClick={this.decresecnt}>-</button></span>
    <p>{this.state.count}</p>
    
    </div>
      )
    }
  }
  
  
//my name is this and that for 4 student

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<Printmynames></Printmynames>,
<CounterClass></CounterClass>
     ,
    //  <Todo></Todo>

);
