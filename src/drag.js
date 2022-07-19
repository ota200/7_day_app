import React, { useState } from 'react'
import './App.css'
import Draggable from 'react-draggable';


function Drags() {
  return (
    <div>
      <textarea></textarea>
      <br></br>
    </div>
  );
}


function Drag() {

  const [count, setCount] = useState([]);

  function add(){
    setCount([...count,
      {
        id:count.length,
        name: <Drags/>
      }]);
  }


  const remove = (index) => () =>

    setCount((count) => count.filter((_, i) => i !== index));



  return (
    <div id="big">
      
      { count.map((c,index) => {
        return(
          <Draggable > 
            <div className ="handle" id={"co"+ Math.random()} key={c.id + Math.random()} >
            
              {c.name}

              <button onClick={remove(index)}>Deleate</button>
              {c.id}

              key:{c.id + Math.random()}
          
            </div>
          </Draggable>

        ) 
          
      })}
      <button id="add" onClick={add}>+</button>



    </div>
  );
}

export default Drag;
