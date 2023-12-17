import React from 'react';
import classes from './SavingSection.module.css'

const SavingSection = () => {
    return (
       
    <div className={classes.box}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <div className={classes["img-box"]}>
              <img src="imgs/saving-img.png" alt=""/>
            </div>
          </div>
          <div className="col-lg-6 align-self-center text-start">
            <div className={classes["detail-box"]}>
              <div className={classes["heading_container"]}>
                <h2>
                  Best Savings on <br/>
                  new arrivals
                </h2>
              </div>
              <p>
                Qui ex dolore at repellat, quia neque doloribus omnis adipisci, ipsum eos odio fugit ut eveniet blanditiis praesentium totam non nostrum dignissimos nihil eius facere et eaque. Qui, animi obcaecati.
              </p>
              <div className={classes["btn-box"]}>
                <a href="/shop" className={classes["btn1"]}>
                  Buy Now
                </a>
                <a href="/shop" className={classes["btn2"]}>
                  See More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    );
}

export default SavingSection;
