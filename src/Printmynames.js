import React from 'react';
function Printmyname(props){
    let {name,age} =props;
  
    return <h1  >salaam {props.name} bhai</h1>
}
function Printmynames(){
    return (
        <>
        <Printmyname name="rocky" age={10} ></Printmyname>
        <Printmyname name='chal hat behen ke laude' age='30'></Printmyname>
        <Printmyname name='hogwarts' age='30'></Printmyname>
        </>
      )
}
export default Printmynames;