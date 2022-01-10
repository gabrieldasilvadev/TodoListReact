import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="uk-container">
      <nav className="uk-navbar">
        <div className="uk-navbar-left">
          <Link to="/" className="uk-navbar-item uk-logo">
            <h2><strong>Minhas tarefas</strong></h2>
          </Link>
        </div>

        <div className="uk-navbar-right uk-animation-slide-top">
          <ul className="uk-navbar-nav">
            <li>
              <Link to="/create">
                <span uk-icon="icon: plus; ratio: 1.2"></span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
