import React from 'react';

import { AboutUs, Chef, Findus, Footer, Gallery, Header, Intro, Laurels, Menu } from './container/index';
import { Navbar } from './components/index';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Menu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <Findus />
    <Footer />
  </div>
);

export default App;
