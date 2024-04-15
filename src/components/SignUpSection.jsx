import React from 'react';
import { useRef } from 'react';
import '../App.css';
import SignUpForm from './SignUpForm';
import { Button, ButtonGroup, Input, Stack, Select, Text, useColorModeValue } from '@chakra-ui/react'



export default function SignUpSection() {
  
  
  return (
    <Stack spacing={8} alignItems='center'>
        <Text fontSize='8xl'>LIMITED TIME OFFER</Text>
        <Text fontSize='4xl'>Be the first to try our development kit</Text>
        <Text fontSize='4xl'>Join us now and get free uses on your projects!</Text>
        <Text fontSize='2xl' pt='10'>Sign up to get started</Text>
        <SignUpForm />
    </Stack>
      
      
      
  );
}

