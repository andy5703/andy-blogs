import {Link} from "react-router-dom";

const BlogList = ({blogs, title}) => {

    return (
        <div className='blog-list'>
            <h2 className="title">{title}</h2>
            <div className="blogs-container">
                {blogs.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <Link to={`/blogs/${blog.id}`}>
                            <h2 className="blog-title">{blog.title}</h2>
                            <p className="blog-author">Written by <span>{blog.author}</span></p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default BlogList;