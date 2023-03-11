import React from 'react'
import Content from '../Content';
import Header from '../Header'
import Introduction from '../Introduction';
import Gallery from '../Gallery';
import Links from '../Links';
import Navbar from '../Navbar';
import Lightbox from '../Lightbox';
import Contact from '../Contact';

function Homepage() {
  return (
    <>
      <Header/>
      <Introduction/>
      <Content/>
      <Gallery/>
      <Links/>
      <Contact/>
    </>
  );
}

export default Homepage;