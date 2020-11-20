import './app.css';
import APICalls from './functions/APICalls';



APICalls.parts.list(console.log);

function App() {
  return (
    <div className="app">
      You're seeing me !
    </div>
  );
}

export default App;
