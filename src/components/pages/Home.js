import React from 'react';
import '../../App.css';
import Vision from '../Vision';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import SignUpForm from '../SignUpForm';

function Home() {
  return (
    <>
      <HeroSection />
      <Vision/>
      <Footer />
    </>
  );
}

export default Home;
