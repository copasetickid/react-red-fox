import React, { PropTypes } from 'react';
import  { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchShops } from '../../actions/shopAction';
import Preloader from '../shared/Preloader';
import StoreCard from './StoreCard';
import { browserHistory } from 'react-router';

class StoresPage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.redirectToNewStorePage = this.redirectToNewStorePage.bind(this);
  }

  redirectToNewStorePage() {
    browserHistory.push('newstore');
  }
  render() {
    const { isFetching, shops } = this.props;
    const isEmpty = shops.length === 0;

    return (
      <div className="container stores-container">
        {
          isEmpty ?  <Preloader/>
          : <div className="row">
            {shops.map(shop => <StoreCard key={shop.id} shop={shop} />)}
            </div>
        }
        <a className="btn-floating btn-large btn-add waves-effect waves-light red" onClick={this.redirectToNewStorePage}>
            <i className="material-icons">add</i>
        </a>
      </div>
    );
  }
}

StoresPage.propTypes = {
  actions: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  shops: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  const { shops } = state;
  return {
    isFetching: shops.isFetching,
    shops: shops.items
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
      actions: dispatch(fetchShops())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StoresPage);
