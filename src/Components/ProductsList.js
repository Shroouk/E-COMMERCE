import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import Loader from '../UI/Loader';

const ProductsList = () => {
     const [products, setProducts] = useState([]);
     const [error, setError] = useState('');
     const [isLoading, setIsLoading] = useState(false);

    const api_url = 'https://fakestoreapi.com/products';

    const fetchProducts = async ()=>{
        setIsLoading(true);
        const response = await fetch(api_url);
        if (!response.ok) {
              setError('Fetching products failed.');
              setIsLoading(false);
           // return {isError:true, message:"coudn't fetch events..."}
          // throw new Response (JSON.stringify({message:"coudn't fetch events..."}),{status:500})
            } else {
              const resData = await response.json();
              setProducts(resData);
              setIsLoading(false);
            }
    }

    useEffect(()=>{
        fetchProducts();
    },[])

    let content = '';

    if(error){
        content = <div className='alert alert-danger my-5'>{error}</div>
    }else if(isLoading && !error){
        content = <Loader/>
    }else if(!error && !isLoading){
        content = products.toReversed().slice(0,8).map((product)=>(
            <ProductCard key= {product.id} id={product.id} title={product.title} img={product.image} price={product.price} new={true}/>))
    }


    return (
        <>
        {
            content
        }
           
        </>
    );
}

export default ProductsList;
