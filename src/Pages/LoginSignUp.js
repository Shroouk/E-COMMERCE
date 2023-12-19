import React from 'react';
import classes from './LoginSignUp.module.css'

const LoginSignUp = () => {
    return (
        <main className='my-5'>
    <section className={classes["form-section"]}>
      <div className={classes["form-wrapper"]}>
        <h1 className={"mb-5 " + classes["title"]}>Sign up</h1>
        <form className={classes["form"]} >
       
          <div className={ classes["form-group"]}>
            <label className={classes["login-label"]}>
              <span className={classes["sr-only"]}>Email address</span>
              <input type="email" placeholder="Email" className={ classes["form-input"]} required/>
            </label>
          </div>
          <div className={ classes["form-group"]}>
            <label className={classes["login-label"]}>
              <span className={classes["sr-only"]}>Password</span>
              <input type="password" placeholder="Password" className={ classes["form-input"]} required/>
            </label>
          </div>
          <div className={ classes["form-group"]}>
            <input type="submit" value="Submit" className={classes["form-submit"]}/>
          </div>

          <footer className={classes["form-footer"]}>
             
              <div>
                Already have an account?
                <a href="#" className={classes["form-link"]}>Log in</a>
              </div>
          </footer>
        </form>
      </div>
    </section>
  </main>
    );
}

export default LoginSignUp;
