import React from 'react'
import { Rating } from 'react-simple-star-rating';
import classes from './Rating.module.css'

export function MyComponent(props) {
 

  return (
    <div className={classes["showing_rate"]}>
      <Rating
        
        allowFraction={true}
        initialValue={props.rating}
        readonly={true}
       
        /* Available Props */
      />
    </div>
  )
}
export default MyComponent