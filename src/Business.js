import React from "react";

function Business(prop) {
    return (
        <div>
            <img className='image' src={prop.src} alt={prop.alt}/>
            <p className='name'>name: {prop.name}</p>
            <p className='address'>address: {prop.address}</p>
            <p className='city'>city: {prop.city}</p>
            <p className='state'>state: {prop.state}</p>
            <p className='zipcode'>zipcode: {prop.zipcode}</p>
            <p className='category'>category: {prop.category}</p>
            <p className='rating'>rating: {prop.rating}</p>
            <p className='reviewCount'>review count: {prop.reviewCount}</p>
      </div>
    );
}

export default Business;
