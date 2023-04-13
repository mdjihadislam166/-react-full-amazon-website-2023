import React from 'react';
import './Review.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Review = ({product,HandleRemoveItem}) => {
    const {id,name,price,img,quantity,shipping} = product;
    return (
        <div className='review-item'>
          <div>
          <img src={img} alt="" />
          </div>
          <div className="review-details-container">
            <div className="review-details">
        <p>{name}</p>
        <p><small>price :${price}</small></p>
        <p><small>shipping:${shipping}</small></p>
        <p><small>quantity:{quantity}</small></p>
            </div>
            <div className="review-btn-delete">
        <button onClick={()=> HandleRemoveItem(id)} className='btn-delete'>
            <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
        </button>
            </div>
          </div>
          
        </div>
    );
};

export default Review;