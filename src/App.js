import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
        <Navbar />
        <div className="main">
            <Home/>
        </div>
    </div>
  );
}

export default App;
