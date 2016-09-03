import React, { PropTypes } from 'react';

class Preloader extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="col s12 m4 center">
        <div className="preloader-wrapper big active">
        <div className="spinner-layer spinner-blue-only">
          <div className="circle-clipper left">
            <div className="circle"></div>
          </div><div className="gap-patch">
            <div className="circle"></div>
          </div><div className="circle-clipper right">
            <div className="circle"></div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Preloader;
