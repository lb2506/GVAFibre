import React from "react";

import mtn from '../../assets/img/MTN-Logo.png';
import bgfi from '../../assets/img/BGFI-Logo.png';
import cDistrib from '../../assets/img/C+Distrib.png';
import cPoint from '../../assets/img/C+Point.png';
import cStore from '../../assets/img/C+Store.png';

function Main() {
    return(
        <main className='main'>
          <div className='main__blockLeft'>
            <h2 className='blockLeft__subtitle subtitle'>RÉABONNEZ-VOUS PAR MOBILE</h2>
            <div className='blockLeft__container'>
              
                <div className='container__leftColumn'>
                  <h2 className='leftColumn__subtitle'>Avec <br/>MTN MOBILE MONEY</h2>
                  <img className='leftColumn__img' src={mtn} alt='mtn'></img>
                  <p className='leftColumn__textTop'>Depuis votre téléphone, <br/>composez le</p>
                  <p className='leftColumn__textBottom'>*105*2*4*1#</p>
                </div>
                
                <div className='container__rightColumn'>
                  <h2 className='rightColumn__subtitle'>Avec <br/>ECOBANK <br/>MOBILE</h2>
                  <img className='rightColumn__img' src={bgfi} alt='bgfi'></img>
                  <p className='rightColumn__textTop'>Depuis l'application, <br/>cliquez sur le menu :</p>
                  <p className='rightColumn__textBottom'>PAIEMENT CANALBOX</p>
                </div>
            </div>
          </div>

          <div className='main__blockRight'>
            <h2 className='blockRight__subtitle subtitle'>OU EN BOUTIQUE</h2>
            <div className='blockRight__container'>

              <div className='container__blockImages'>
                <img className='blockImages__cDistrib' src={cDistrib} alt='cDistrib'></img>
                <img className='blockImages__cPoint' src={cPoint} alt='cPoint'></img>
                <img className='blockImages__cStore' src={cStore} alt='cStore'></img>
              </div>

              <p className='container__text'>Rendez-vous <br/> dans les points <br/> de vente CANAL+ <br/> reconnaissables par <br/> leur enseigne</p>
            
            </div>
          </div>
        </main>
    )
}

export default Main;