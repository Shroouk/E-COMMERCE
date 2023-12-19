import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faEye } from '@fortawesome/free-solid-svg-icons';
import classes from './ProductCard.module.css'

const ProductCard = (props) => {
    return (
     
        <div className="col-sm-6 col-md-4 col-lg-3 text-center">
        <article className={classes["card"]}>
        {props.new && <span className={"badge "+ classes["text-bg-new"]}>New</span> }
        <div className={classes["card__img"]}>
            <img src={props.img} alt={"product-image: " + props.img} />
        </div>
        <div className={classes["card__name"]}>
        <p>
                  {props.title}
                </p>
        </div>
        <div className={classes["card__precis"]}>
            <a href={`/shop/${props.id}`} className={classes["card__icon"]} >
           
            <FontAwesomeIcon icon={faEye} />
            </a>
            
            <div>
                <span className={classes["card__preci"] +' '+ classes["card__preci--now"]}>${props.price}</span>
            </div>
            <a href="/" className={classes["card__icon"]} >
           <FontAwesomeIcon icon={faCartShopping} />
           </a>
        </div>
    </article>
    </div>
    );
}

export default ProductCard;
