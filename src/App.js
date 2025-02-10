import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import CreateBlog from "./components/CreateBlog";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar/>
                <div className="main">
                    <Routes>
                        <Route exact path='/' element={ <Home/>} />
                        <Route path='/createblog' element={ <CreateBlog /> } />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
