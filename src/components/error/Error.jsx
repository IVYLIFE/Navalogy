import { Link } from 'react-router-dom'
import './error.css'

const Error = () => {
  return (
    <div id='errorContainer'>

        <div id="errorText">
            <h1>404</h1>
            <h2>Page Not Found</h2>

            <p>Sorry, we couldn't find the page you're looking for.</p>

            <Link to="/" className="btnLink">
                <button className="btn">Go Home</button>
            </Link>
        </div>
    </div>
  )
}

export default Error