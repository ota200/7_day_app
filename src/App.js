//import Drag from './drag'
import React, { useEffect,useState } from 'react';
import './App.css'

function Drag() {
  return (
    <div>
      <textarea></textarea>
      <br></br>
    </div>
  );
}


function App() {

  const [coords, setCoords] = useState({x: 0, y: 0});

  const [globalCoords, setGlobalCoords] = useState({x: 0, y: 0});

  useEffect(() => {
    const handleWindowMouseMove = event => {
      setGlobalCoords({
        x: event.screenX,
        y: event.screenY,
      });
    };
    window.addEventListener('mousemove', handleWindowMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
    };
  }, []);

  const handleMouseMove = event => {
    setCoords({
      x: event.clientX - event.target.offsetLeft,
      y: event.clientY - event.target.offsetTop,
    });
  };


  const [count, setCount] = useState([]);

  function add(){
    setCount([...count,
      {
        id:count.length,
        name: <Drag/>,
      }]);
  }

  function pos(e){
    console.log(e.currentTarget.id)
  }      

  const remove = (index) => () =>

    setCount((count) => count.filter((_, i) => i !== index));

  
  return (
    <div id="big">
      
      { count.map((c,index) => {
        return(
          <div onClick={pos} id={"co"+ Math.random()} key={c.id + Math.random()}>
            
            {c.name}

            <button onClick={remove(index)}>Deleate</button>
            {c.id}

            key:{c.id + Math.random()}
          
          </div>



        ) 
          
      })}
      <button id="add" onClick={add}>+</button>

      <div
        onMouseMove={handleMouseMove}
        style={{padding: '3rem', backgroundColor: 'lightgray'}}
      >
        <h2>
          Coords: {coords.x} {coords.y}
        </h2>
      </div>

      <hr />

      <h2>
        Global coords: {globalCoords.x} {globalCoords.y}
      </h2>

    </div>
  );
}

export default App;
