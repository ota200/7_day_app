import React, { useState } from 'react'
import './App.css'
import Draggable from 'react-draggable';

export default function Notes () {

  const [word, setWord] = useState([]);
  const [note, setNote] = useState([]);


  function add(e){
    e.preventDefault();
    setNote([...note,
      {
        id:note.length,
        value:word

      }]);
    }
  
  function change(e){
    //alert(e.target.value)

    setWord(e.target.value)
  }

  const remove = (index) => () =>

    setNote((note) => note.filter((_, i) => i !== index));



  return (
    <Draggable >

      <div id="big">

        <form onSubmit={add}>
          <input onChange={change} ></input>
        </form>
        
      { note.map((c,index) => {
          return(
            <div  >
              <p>{c.value} id:{c.id}</p>
              <button onClick={remove(index)}>Deleate</button>

          
            </div>

          ) 
            
        })}
        <button id="add2" onClick={add}>+</button>



      </div>

    </Draggable>

  );
}