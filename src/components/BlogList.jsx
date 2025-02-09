const BlogList = ({ blogs, title, handleDelete }) => {
    return (
        <div className='blog-list'>
            <h2 className="title">{ title }</h2>
            { blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2 className="blog-title">{blog.title}</h2>
                    <div className="blog-body">{blog.body}</div>
                    <p className="blog-author">Written by <span>{blog.author}</span></p>
                    <button type='button' onClick={() => handleDelete(blog.id)}>Delete Me!</button>
                </div>
            ))}
        </div>
    );
}
export default BlogList;