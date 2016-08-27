import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return(
    <nav className="light-blue lighten-1" role="navigation">
      <div className="nav-wrapper container"><a id="logo-container" href="#" className="brand-logo">Logo</a>
        <ul className="right hide-on-med-and-down">
          <IndexLink to="/" activeClassName="active">Home</IndexLink>
        </ul>

        <ul id="nav-mobile" className="side-nav">
          <li> <IndexLink to="/" activeClassName="active">Home</IndexLink></li>
        </ul>
        <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
      </div>
    </nav>
  );
};



export default Header;
