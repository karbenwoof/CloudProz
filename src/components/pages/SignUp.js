import React from 'react';
import '../../App.css';
import './SignUp.css';
import Footer from '../Footer';
import SignUpForm from '../SignUpForm';
import SignUpSection from '../SignUpSection';
import { Button, ButtonGroup, Input, Stack, Select, Text, useColorModeValue } from '@chakra-ui/react'


export default function SignUp() {



  return (
    <>
      <div className='signup-container'>
        <SignUpSection />
        
      </div>
      <Footer />
    </>
  );
}
