import React from 'react'
import Content from '../Content';
import Header from '../Header'
import Introduction from '../Introduction';
import Gallery from '../Gallery';
import Links from '../Links';

function Homepage() {
  return (
    <>
      <Header/>
      <Introduction/>
      <Content/>
      <Gallery/>
      <Links/>
    </>
  );
}

export default Homepage