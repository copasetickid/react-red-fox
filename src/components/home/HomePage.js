import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="section no-pad-bot" id="index-banner">
        <div className="container">
          <h1 className="header center green-text">Inventory</h1>
          <div className="row center">
            <h5 className="header col s12 light">A place to check to store inventory</h5>
          </div>
          <div className="row center">
            <Link to="/" className="waves-effect waves-light btn-large green">View Stores</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
