import React from 'react';
import classes from './Header.module.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className={classes['slider_section']}>
        <div className={classes['slider_container']}>
            <div className={classes["carousel-item"]} >
              <div className="container-fluid">
                <div className="row align-items-center">
                  <div className="col-md-7">
                    <div className={classes["detail-box"]}>
                      <h1>
                        Welcome To Our <br/>
                        Gift Shop
                      </h1>
                      <p>
                        Sequi perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet non necessitatibus error distinctio mollitia suscipit. Nostrum fugit doloribus consequatur distinctio esse, possimus maiores aliquid repellat beatae cum, perspiciatis enim, accusantium perferendis.
                      </p>
                      
                      <Link to="/">
                        ContLinkct Us
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-5 ">
                    <div className={classes["img-box"]}>
                      <img src="imgs/slider-img.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        </div>
    );
}

export default Header;
