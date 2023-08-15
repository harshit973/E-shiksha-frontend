import { Link, useNavigate } from "react-router-dom";
import { About, Course, Home, Pricing } from "../../URL.ts";
import { FormEvent, FormEventHandler, useEffect } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const search = (e: FormEvent) => {
    e.preventDefault();
    navigate(`/course?search=${e.target[0].value}`);
  };

  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="#">
        {process.env.REACT_APP_NAME}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor02"
        aria-controls="navbarColor02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarColor02">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to={Home.index}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={Course.index}>
              Courses
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={Pricing.index}>
              Pricing
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={About.index}>
              About
            </Link>
          </li>
        </ul>
        <form onSubmit={search} className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Type your course name..."
            aria-label="Search"
          />
          <button className="btn btn-outline-light my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}
