import React from "react";

import facebook from '../../assets/img/RS-facebook.png';
import insta from '../../assets/img/RS-insta.png';
import twitter from '../../assets/img/RS-twitter.png';
import youtube from '../../assets/img/RS-youtube.png';

function Footer(){
    return(
        <footer className='footer'>
          <div className='footer__top'>
              <p className='top__blockFollow'>SUIVEZ-NOUS : <img className='blockFollow__img' src={twitter} alt='twitter'></img> <img className='blockFollow__img' src={facebook} alt='facebook'></img> <img className='blockFollow__img' src={insta} alt='insta'></img> <img className='blockFollow__img' src={youtube} alt='youtube'></img></p>
              <p className='top__blockContact'><a className='blockContact__contactUs' href='/'>CONTACTEZ-NOUS</a><br className="br"/><span className="span"> - </span><a className='blockContact__agencies' href='/'>N0S AGENCES</a></p>
          </div>

          <ul className='footer__bottom'>
            <li>Mentions légales <span className="span">-</span> </li>
            <li>Protection des données personnelles <span className="span">-</span></li>
            <li>Conditions générales d'utilisation <span className="span">-</span></li>
            <li>FAQ</li>
          </ul>
        </footer>
    )
}

export default Footer;