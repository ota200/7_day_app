import React, { useLayoutEffect, useRef,useState } from 'react'
import './App.css'
import Draggable from 'react-draggable';


function Drags() {
  return (
    <div>
      <>h</>
      <textarea></textarea>
      <br></br>
    </div>
  );
}


function Drag() {




  const [count, setCount] = useState([]);

  const [id, setId] = useState();

  let array = [0,1]

  function add(){
    setCount([...count,
      {
        id:count.length,
        name: <Drags/>
      }]);
  }

  function getId(e){
    setId(e.id)
  }


  const remove = (index) => () =>

    setCount((count) => count.filter((_, i) => i !== index));

  function up(){
   console.log("hi")
  }

  function down(){
    console.log("hi")
  }

  function move(){
    console.log("hi")
  }


  return (
      <div id="big" >
        
        { count.map((c,index) => {
          return(
            
              <div className ="handle" id={"co"+ Math.random()} key={c.id + Math.random()} onMouseDown={down()} onMouseUp={up()} onMouseMove={move()} >
                              {c.name}

                <button onClick={remove(index)}>Deleate</button>
                {c.id}

                key:{c.id + Math.random()}

              </div>
            

          ) 
            
        })}
        <button  onClick={add}>+</button>



      </div>
  );
}

export default Drag;

/*
onMouseMove(e) {
  if (!this.state.dragging) return;
  let x = e.pageX - this.state.rel.x;
  let y = e.pageY - this.state.rel.y;
  if (x < 0 || x > window.innerWidth - this.state.dialogWidth) {
    x = x < 0 ? 0 : window.innerWidth - this.state.dialogWidth;
  }

  if (y < 0 || y > window.innerHeight - this.state.dialogHeight) {
    y = y < 0 ? 0 : window.innerHeight - this.state.dialogHeight;
  }
  this.setState({
    x: x,
    y: y
  });
  e.stopPropagation();
  e.preventDefault();
}
*/