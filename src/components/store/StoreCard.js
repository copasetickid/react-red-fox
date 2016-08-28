import React, { PropTypes } from 'react';

const StoreCard = ({shop}) => {
  console.log('In ShopCard')
  return(
     <div className="col s12 m6">
       <div className="card blue-grey darken-1">
         <div className="card-content white-text">
           <span className="card-title">{shop.attributes.name}</span>
           <p>I am a very simple card. I am good at containing small bits of information.
           I am convenient because I require little markup to use effectively.</p>
         </div>
         <div className="card-action">
           <a href="#">This is a link</a>
           <a href="#">This is a link</a>
         </div>
       </div>
     </div>
  );
};

StoreCard.propTypes = {
  shop: PropTypes.object.isRequired
};

export default StoreCard;
