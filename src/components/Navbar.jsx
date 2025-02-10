import {Link} from "react-router-dom";

const Navbar = () => {
    return(
        <nav className="navbar">
            <h1 className="nav-title">Andy's Blogs</h1>
            <div className="links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/CreateBlog" className="nav-link">New Blog</Link>
            </div>
        </nav>
    );
}

export default Navbar;