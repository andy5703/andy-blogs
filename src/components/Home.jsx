import {useState} from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi earum esse facilis, fugit illo ipsum neque obcaecati qui repellat voluptatem.', author: 'andy', id: 1},
        {title: 'Outdoor boys', body: 'lorem ipsum...', author: 'john', id: 2},
        {title: 'Paint like a master', body: 'lorem ipsum...', author: 'stephan', id: 3}
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    return (
        <div className='home'>
            <BlogList blogs={blogs} title='All blogs!' handleDelete={handleDelete}/>
        </div>
    );
}
export default Home;