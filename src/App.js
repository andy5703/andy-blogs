import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import CreateBlog from "./components/CreateBlog";
import BlogDetails from "./components/BlogDetails";
import NotFound from "./components/NotFound";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar/>
                <div className="main">
                    <Routes>
                        <Route exact path='/' element={ <Home/>} />
                        <Route path='/create' element={ <CreateBlog /> } />
                        <Route path='/blogs/:id' element={ <BlogDetails /> } />
                        <Route path='*' element={ <NotFound /> } />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
