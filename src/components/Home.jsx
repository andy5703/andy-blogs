import BlogList from "./BlogList";
import useFetch from "../useFetch";

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    return (
        <div className='home'>
            { error && <h1 className='error-text'>{ error }</h1> }
            { isPending && <h1 className='loading-text'>Loading...</h1> }
            {blogs && <BlogList blogs={blogs} title='All blogs!' />}
        </div>
    );
}
export default Home;