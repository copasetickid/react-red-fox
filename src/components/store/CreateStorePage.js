import React, { PropTypes } from 'react';

class CreateStorePage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return(
        <div className="container new-store-container">
           <div className="row">
             <form className="col s12">
                <div className="row">
                  <div className="input-field col s12">
                    <input placeholder="Name Your Store" id="name" type="text" className="validate" />
                    <label htmlFor="name">Store Name</label>
                  </div>
                </div>
            </form>
           </div>
        </div>
    );
  }
}

export default CreateStorePage;
