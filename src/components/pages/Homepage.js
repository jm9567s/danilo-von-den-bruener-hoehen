import React from 'react'
import Content from '../Content';
import Header from '../Header'
import Introduction from '../Introduction';
import Gallery from '../Gallery';
import Links from '../Links';
import Navbar from '../Navbar';
import Lightbox from '../Lightbox';

function Homepage() {
  return (
    <>
      <Navbar/>
      <Header/>
      <Introduction/>
      <Content/>
      <Gallery/>
      <Links/>
    </>
  );
}

export default Homepage