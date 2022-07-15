//import Drag from './drag'
import React, { useState } from 'react';


function Drag() {
  return (
    <div >
      <textarea></textarea>
      <br></br>
    </div>
  );
}


function App() {



  const [count, setCount] = useState([]);

  function add(){
    setCount([...count,
      {
        id:count.length,
        name: <Drag/>,
      }]);
  }


  const remove = (index) => () =>

    setCount((count) => count.filter((_, i) => i !== index));

  
  return (
    <>
      <button onClick={add}>ADDDDDDDDDDDDD</button>
      
      { count.map((c,index) => {
        return(
          <div key={c.id + Math.random()}>
            
            {c.name}

            <button onClick={remove(index)}>Deleate</button>
            {c.id}

            key:{c.id + Math.random()}
          
          </div>
        ) 
          
      })}

    </>
  );
}

export default App;
