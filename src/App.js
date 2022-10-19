import React from 'react';
import './index.scss';

import Header from './components/header/index'
import Main from './components/main/index'
import Remerciements from './components/remerciements/index'
import Contact from './components/contact/index';
import Footer from './components/footer/index';

function App() {

  return (
    
      <div className="container">
        <Header/>
        <Main/>
        <Remerciements/>
        <Contact/>
        <Footer/>     
      </div>
  );
}

export default App;