import React from 'react';
import '../../App.css';
import CardItem from '../CardItem';
import './SignUp.css';
import Footer from '../Footer';
import { Button, ButtonGroup, Input, Stack, Select, Text } from '@chakra-ui/react'



export default function SignUp() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [purpose, setPurpose] = React.useState('');

  const handleSubmit = (event) => {};

  return (
    <>
      <div className='sign-up'>
        <div className='signup-container'>
          <h1>LIMITED TIME OFFER</h1>
          <p>Be the first to try our development kit</p>
          <p>Sign up now and get free uses on your projects!</p>
    
          <Stack spacing={8} align="center" pt='10'>
            <Text fontSize='2xl'>Sign up now to get started</Text>
            <Input
              placeholder='Your name'
              _placeholder={{ opacity: 1, color: 'gray.300' }}
              value={name}
              onChange={(event) => setName(event.target.value)}
              size='lg'
              width='120%'
              variant='outline'
              borderColor='gray.300'
              name='name'
            ></Input>
            <Input
              placeholder='Email'
              _placeholder={{ opacity: 1, color: 'gray.300' }}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              size='lg'
              width='120%'
              variant='outline'
              borderColor='gray.300'
              name='email'
            ></Input>
            <Input
              placeholder='Purpose of use'
              _placeholder={{ opacity: 1, color: 'gray.300' }}
              value={purpose}
              onChange={(event) => setPurpose(event.target.value)}
              size='lg'
              width='120%'
              variant='outline'
              borderColor='gray.300'
              name='purpose'
            ></Input>
            {/*<Select
              placeholder='Select your school'
              size='lg'
              width='120%'
              variant='filled'
              borderColor='gray.300'
            >
              <option value='option1'>UC Berkeley</option>
              <option value='option2'>Stanford University</option>
            </Select>*/}
            <Button colorScheme='gray' variant='outline' size='lg' onClick={handleSubmit}>
              GET STARTED
            </Button>
              
          </Stack>

          </div>
        </div>
        <Footer />
      </>
      );
}
