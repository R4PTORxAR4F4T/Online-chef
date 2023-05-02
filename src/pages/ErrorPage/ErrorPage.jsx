import { useRouteError, Link } from "react-router-dom";

import './ErrorPage.css'
import { Image } from "react-bootstrap";
import Header from "../Shared/Header/Header";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error-page">
      <Image className="w-50" src="/public/error.jpg" />
      
      <div>
        <p className="error-text">Page not found</p>
      </div>
      <div className="error-btn">
        <Link to="/">Go to home page</Link>
      </div>
      
    </div>
  );
}