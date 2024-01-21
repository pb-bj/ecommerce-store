import { Link } from "react-router-dom";
import './NotFoundPage.scss';

const NotFoundPage = () => {
  return (
    <div className="page-not-found">
      <h1 className="page-header">404: Page Not Found</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <p>
        <Link to="/">Go back to the home page</Link> 
      </p>
    </div>
  )
}

export default NotFoundPage