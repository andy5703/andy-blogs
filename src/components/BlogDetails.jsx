import {useNavigate, useParams} from "react-router-dom";
import useFetch from "../useFetch";

const BlogDetails = () => {
    const {id} = useParams();
    const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8000";
    const { data: blog, error, isPending } = useFetch(`${API_URL}/blogs/${id}`);
    const navigate = useNavigate();

    const handleRemoveBlog = () => {
        fetch("http://localhost:8000/blogs/" + blog.id, {
            method: "DELETE",
        }).then(() => {
            navigate('/');
        })
    }

    return (
        <div className='blog-details'>
            {isPending && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}
            {blog && (
                <article>
                    <h2 className='blog-title'>{blog?.title}</h2>
                    <p className="blog-author">Written by <span>{blog?.author}</span></p>
                    <div className="blog-body">{blog?.body}</div>
                    <button onClick={handleRemoveBlog} className="remove-btn">Remove</button>
                </article>
            )}
        </div>
    );
}
export default BlogDetails;