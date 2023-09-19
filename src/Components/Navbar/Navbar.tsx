import { Link, useNavigate } from "react-router-dom";
import { About, Course, Home, Pricing } from "../../URL.ts";
import { FormEvent, useEffect, useState } from "react";

const initialTabState = {
  Home: '',
  Course: '',
  Pricing: '',
  About: ''
}

export default function Navbar() {
  const navigate = useNavigate();
  const search = (e: FormEvent) => {
    e.preventDefault();
    navigate(`/course?search=${e.target[0].value}`);
  };
  const [tab,setTab] = useState<any>(initialTabState);
  useEffect(()=>{
    if(window.location.pathname.startsWith(Pricing.index)){
      setTab({
        ...initialTabState,
        Pricing:'active'
      })
    }else if(window.location.pathname.startsWith(Course.index)){
      setTab({
        ...initialTabState,
        Course:'active'
      })
    }else if(window.location.pathname.startsWith(About.index)){
      setTab({
        ...initialTabState,
        About:'active'
      })
    }else{
      setTab({
        ...initialTabState,
        Home:'active'
      })
    }
  },[])
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
          <li onClick={()=>{setTab({...initialTabState,Home:'active'})}} className={`nav-item ${tab.Home}`}>
            <Link className="nav-link" to={Home.index}>
              Home
            </Link>
          </li>
          <li onClick={()=>{setTab({...initialTabState,Course:'active'})}} className={`nav-item ${tab.Course}`}>
            <Link className="nav-link" to={Course.index}>
              Courses
            </Link>
          </li>
          <li onClick={()=>{setTab({...initialTabState,Pricing:'active'})}} className={`nav-item ${tab.Pricing}`}>
            <Link className="nav-link" to={Pricing.index}>
              Pricing
            </Link>
          </li>
          <li onClick={()=>{setTab({...initialTabState,About:'active'})}} className={`nav-item ${tab.About}`}>
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
