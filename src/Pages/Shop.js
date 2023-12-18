import React, { useEffect, useState } from 'react';
import Loader from '../UI/Loader';
import PaginatedItems from '../UI/PaginatedComp';

import classes from './Shop.module.css'

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [oneCat, setOneCat] = useState('all')
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

    const fetchcategories = async ()=>{
        const response = await fetch(`${api_url}/categories`);
        if (!response.ok) {
            setError('Fetching products failed.');
          }else {
            const catData = await response.json();
            setCategory(catData);
          }
    }

    const handleCatChange = async(cat)=>{
       
        let url = api_url
        setOneCat(cat)
        if(cat != 'all'){
            console.log(url)
            url= `${api_url}/category/${cat}`
        }else {url = api_url}
        const response = await fetch(url);
        const catData = await response.json();
        setProducts(catData);
          
    }

    useEffect(()=>{
        fetchProducts();
        fetchcategories();
        console.log(category)
    },[])



    let content = '';

    if(error){
        content = <div className='alert alert-danger my-5'>{error}</div>
    }else if(isLoading && !error){
        content = <Loader/>
    }else if(!error && !isLoading){

      //  content = products.map((product)=>(
        //    <ProductCard key= {product.id} id={product.id} title={product.title} img={product.image} price={product.price} new={true}/>))

        content = <PaginatedItems  itemsPerPage={8} items={products}/>
    }




    return (
        <div className='container'>
        <div className='row text-center my-5'>
            <h2> SHOP ALL PRODUCTS</h2>
        </div>

        <div className='row text-end'>
            <div>
            <span>Filter By Category </span>

            <select class={classes["cat-txt-filter"]} aria-label="Default select example" 
            value={oneCat}
            onChange={e => handleCatChange(e.target.value)}>
            <option value='all'>All</option>
            {category.map(cat=>(
                            <option key={cat} value={cat} >{cat}</option>
                        ))}
            </select>
           
            </div>
        </div>

        <div className='row my-5'>
            {content}
        </div>

       
           
        </div>
    );
}

export default Shop;
