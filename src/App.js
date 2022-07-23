//import Drag from './drag'
import './App.css'
import Drag from './drag'
import Notes from './notes'
//import Draggable, {DraggableCore} from 'react-draggable';
function App() {
  return (
      <div >

          <Notes/>
          <Notes/>
          <Drag/>   
          <Drag/>
          <Notes/>
          <Drag/>
      </div>

  );
}

export default App;
