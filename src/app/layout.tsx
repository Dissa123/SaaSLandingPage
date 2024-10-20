import React from 'react';
import Nav from './components/Header';
import './globals.css';
import Hero from './components/Hero';
import BrandLogo from './components/BrandLogo';
import ThirdContainer from './components/thirdContainer';
import FouthContainer from './components/fouthContainer';
export const metadata = {
    title: 'Nethma Dissanayake',  // Page title
    description: 'My Assiments',  // Page description
  };
function layout() {
    
    return (
        <html lang="en">  {/* <html> tag is required */}
        <body>  {/* <body> tag is required */}
          <Nav/>  {/* Page content is injected here */}
          <Hero/>
          <BrandLogo/>
          <ThirdContainer/>
          <FouthContainer />
        </body>
      </html>

    )
}

export default layout