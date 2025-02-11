import {Link} from "react-router-dom";

const NotFound = () => {
    return(
        <div className='not-found'>
            <h2 className="title">404 Not Found</h2>
            <p>That page cannot be found!</p>#
            <Link to='/'>Back to Homepage...</Link>
        </div>
    );
}
export default NotFound;