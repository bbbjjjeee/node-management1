import React, {Component} from 'react';

/*
function Children1(){
    return <p>1: Hello World!</p>
  }
  
  const Children2 = () => {
    return <p>2: How low</p>;
  }
  
  const Children3 = () => <p> 3: yeah</p>
  
  const Hello = () => {
    return(
        <div>
            <Children1/>
            <Children2/>
            <Children3/>
        </div>
    )
  }
*/
const Hello = (props) => {
    return <p>Tag! my name is {props.name}</p>
}

export default Hello