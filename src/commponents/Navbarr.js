import React, { useContext, useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import UserContext from './Context';      


export default function Navbarr() {
  const [navPosition, setNavPosition] = useState(100);

  const updateNavPosition = (position) => {
    setNavPosition(position);
  };
const {mode,darkmode} = useContext(UserContext)

useEffect(() => {

  document.body.style.backgroundColor = mode === 'dark' ? 'rgba(24, 25, 26)' : 'white';


 
}, [mode]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary  navbarr" style={{ top: navPosition }} data-bs-theme={mode}>
        <div className="container-fluid">
          <div className='png'>
            <img src='https://cdn-icons-png.flaticon.com/128/3908/3908503.png'/>
          </div>
          <div className="navbar-brand" href="#">
            Coffee shop
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active"   aria-current="page" to="/" onClick={() => updateNavPosition(100)}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About" onClick={() => updateNavPosition(400)}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contact" onClick={() => updateNavPosition(10)}>
                  Contact
                </Link>
              </li>
            </ul>
            <div className="form-check form-switch">
  <input
    className="form-check-input"
    type="checkbox"
    role="switch"
    id="flexSwitchCheckDefault"
    onClick={darkmode}
  />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
   <h6 style={{color:mode==="dark"?"white":"" ,marginRight:"30px"}}>Dark mode</h6>
  </label>
</div>

           
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

