import React, { useState, useEffect } from 'react';
import DemoCarousel from '../UI/Carousel';
import { useParams } from 'react-router-dom';
import Loader from '../UI/Loader';
import classes from './Product.module.css';
import  MyComponent  from '../UI/Rating';



const Product = () => {

    const params = useParams();
    const productId = params.productId;

    const [product, setProduct] = useState();
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const url = 'https://fakestoreapi.com/products/' + productId;


    const fetchProductDetails = async ()=>{
        setIsLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
              setError('Fetching products failed.');
              setIsLoading(false);
            } else {
              const resData = await response.json();
              setProduct(resData);
              setIsLoading(false);
              console.log(product)
            }
    }

    useEffect(()=>{
        fetchProductDetails();
        console.log(product)
    },[])



    let content = '';

    if(error){
        content = <div className='alert alert-danger my-5'>{error}</div>
    }else if(isLoading && !error){
        content = <Loader/>
    }else if(!error && !isLoading && product){
        content =    <div className='row'>
        <div className='col col-md-6 px-md-5'>
        <DemoCarousel img={product.image}/>
        </div>


        <div className='col col-md-6 '>
            <div className='row '>
                <h3 className={classes['card_title']}> {product.title} </h3>
            </div>

            <div className={'mb-3 '+classes["product-cat"]}>
                <h5>{product.category}</h5>
            </div>

            <div className='row align-items-center'>
                <div className='col-12 col-md-6'>
                <div className='d-flex align-items-center'>
                <h5 className={classes["product-price"]}>{product.price}$</h5>
                </div>
                </div>
                <div className='col-12 col-md-6'>
                <div className='d-flex align-items-center '>
                    <MyComponent  rating={product.rating.rate} />
                <span className='mx-3'>{product.rating.rate} ({product.rating.count})</span>
                </div>
                </div>
            </div>
           

            <div className='row my-5'>
            <h6 className={classes["card-sub-title"]}>Product Description</h6>
                               <p>{product.description}</p>
            </div>

            <div className='row my-5'>
            <h6 className={classes["card-sub-title"]}>Quantity</h6>
                                <div className={classes["qty-box"]}>
                                    <div className={classes["input-group"]}>
                                    <span className={classes["input-group-prepend"]}>
                                    <button type="button" className={"btn " + classes.btn + ' ' + classes["quantity-left-minus"]} data-type="minus" data-field="">-</button>
                                     </span>
                                    <input type="text" name="quantity" className={"form-control "+classes["form-control"]+' ' +classes["input-number"]} />
                                    <span className={classes["input-group-prepend"]}>
                                    <button type="button"   className={"btn " + classes.btn + ' ' + classes["quantity-right-plus"]} data-type="plus" data-field="">+</button>
                                    </span>
                                    </div>
                                </div>

                                <div className={'mt-3 '+ classes["product-buttons"]}>
                                <a href="/" data-toggle="modal" data-target="#addtocart" className={"btn " + classes["btn-solid"]}>add to cart</a> 
                                <a href="/" className={"btn mx-3 " +classes["btn-solid"]}>buy now</a>
                            </div>
            </div>


        </div>
    </div>

    }





    return (
        <div>
        <div className='container my-5'>
     {content}
      
            
        </div>
        </div>
    );
}

export default Product;
