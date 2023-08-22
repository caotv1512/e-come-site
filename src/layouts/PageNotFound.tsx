import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div>
      <div className="error-page bd-7 text-center">
        <div className="error-img">
          <img src="img/404.png" alt="" />
        </div>
        <h3 className="error-title">
          We are sory, the page you’ve requested is not available
        </h3>
        <form
          method="get"
          className="searchform full"
          action="/search"
          role="search"
        >
          <input type="hidden" name="type" defaultValue="product" />
          <input
            type="text"
            name="q"
            className="form-control"
            placeholder="Type to search..."
          />
          <span className="input-group-btn">
            <button type="submit" className="button_search">
              <i className="ion-ios-search-strong" />
            </button>
          </span>
        </form>
        <div className="vertical-divider">
          <div className="center-element">or</div>
        </div>
        <a className="btn-back btn-gradient">
         <Link to={"/"}>Back to Home</Link>
          <i className="ion-ios-arrow-forward" />
        </a>
      </div>
    </div>
  );
}

export default PageNotFound;
