import React, { PropTypes } from 'react';
import  { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchShops } from '../../actions/shopAction';
import Preloader from '../shared/Preloader';
import StoreCard from './StoreCard';

class StoresPage extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { shops } = this.props;
    
    return (
      <div className="stores-container">

        <div className="row">
          { shops.map(shop =>
            <StoreCard key={shop.id} shop={shop} />
          )}
        </div>

      </div>
    );
  }
}

StoresPage.propTypes = {
  actions: PropTypes.object.isRequired,
  shops: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    shops: state.shops
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
      actions: dispatch(fetchShops())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StoresPage);
