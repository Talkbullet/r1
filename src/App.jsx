import './App.css';
import Square from './components/Square';


const bu = () => {console.log()}

function App() {
  return (
    <div className="Square">
     <div>
      <Square color="blue"></Square>
      <button onClick={bu}>Bu</button>;
     </div>
    </div>
  );
}

export default App;
