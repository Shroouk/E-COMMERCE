import React from 'react';
import { Outlet} from 'react-router-dom';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';

const Roots = () => {
    //const navigation =useNavigation();
    return (
        <div className='hero_area'>
            <Nav/>
            <main>
           {/*  {navigation.state === 'loading' && <p>Loading...</p>} */}
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
}

export default Roots;
