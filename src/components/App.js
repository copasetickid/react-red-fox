import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from './shared/Header';
import Preloader from './shared/Preloader';

class App extends React.Component {
  render() {
    return (
      <div >
        <Header/>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};



export default App;
