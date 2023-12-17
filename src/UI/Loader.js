import React from 'react';
import classes from './Loader.module.css'

const Loader = () => {
    return (
        <div className='row m-5 p-5 justify-content-center '>
        <span className={classes.loader}></span>
        </div>
    );
}

export default Loader;
