import React from "react";

import logo from '../../assets/img/logo.png';

function Header(){
    return(
        <header className='header'>
            <img className='header__logo' src={logo} alt='logo'></img>
            <h1 className='header__title'>Refibrez!</h1>
            <h2 className='header__subtitle'>Votre abonnement Canalbox est arrivé à échéance.</h2>
            <p className='header__text'>Pour continuer à profiter du très haut <br className="text__br"/>débit en illimté, c'est par ici</p>
        </header>
    )
}

export default Header;