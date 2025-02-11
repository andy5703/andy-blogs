import {useState} from "react";
import { useNavigate } from 'react-router-dom';

const CreateBlog = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('andy');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author}

        setIsPending(true);

        fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers: {"Content-Type": "aplication/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('New blog added.');
            setIsPending(false);
            navigate('/');
        })


    }
    return(
      <div className="create-blog">
          <h2>Add a new blog:</h2>
          <form>
              <label>Blog title: </label>
              <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
              />
              <label>Blog body: </label>
              <textarea
                  required
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
              ></textarea>
              <label>Blog author: </label>
              <select
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              >
                  <option value="andy">andy</option>
                  <option value="john">john</option>
                  <option value="stephan">stephan</option>
              </select>
              { !isPending && <button onClick={handleSubmit}>Add blog</button> }
              { isPending && <button disabled>Adding blog...</button> }
          </form>
      </div>
    );
}
export default CreateBlog;