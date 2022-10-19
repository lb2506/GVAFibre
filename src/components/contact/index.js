import React from "react";

import illusTel from '../../assets/img/illusTel.png'
import tel from '../../assets/img/Pictotel.png';

function Contact(){
    return(
        <section className='contact'>
          <img className='contact__illusTel' src={illusTel} alt='illusTel'></img>
          <p className='contact__text'>Contact</p>
          <p className='contact__numFirst'><img className='numFirst__pictoTel' src={tel} alt='tel'></img> 55 00</p>
          <p className='contact__numSecond'>(ou 06 704 55 55)</p>
        </section>
    )
}

export default Contact;