import './index.css'
import React from 'react';
import header from '../../images/home-header.PNG'

const Header = () => {
return(

    <div>
        <img  className='header' src={header} alt="header" />
    </div>
)
}
export default Header