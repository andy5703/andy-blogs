

const Navbar = () => {
    return(
        <nav className="navbar">
            <h1 className="nav-title">Andy's Blogs</h1>
            <div className="links">
                <a href="/" className="nav-link">Home</a>
                <a href="/create" className="nav-link">New Blog</a>
            </div>
        </nav>
    );
}

export default Navbar;