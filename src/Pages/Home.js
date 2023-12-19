import React from 'react';
import Header from '../Components/Header';
import classes from './Home.module.css';
import ProductsList from '../Components/ProductsList';
import { Link } from 'react-router-dom';
import SavingSection from '../Components/SavingSection';

const Home = () => {
    return (
        <>
            <div>
                <Header/>
                <div className={classes['heading_container'] + ' my-5 ' + classes['heading_center']}>
                <h2>LATEST PRODUCTS</h2>
                <div className={'row ' + classes['products-wrapper']}>

                    <ProductsList/>
                </div>
                <div className={'mb-5 ' +classes["btn-box"]}>
                    <Link to="/shop">
                    View All Products
                    </Link>
                </div>

                <section className={'mt-5 ' +classes["saving_section"]}>

                    <SavingSection/>
                </section>
                </div>
               
            </div>
        </>
    );
}

export default Home;
