import React from 'react';
import '../../App.css';
import { Button } from '../Button';
import CardItem from '../CardItem';
import './SignUp.css';



export default function SignUp() {
  return (
    <div className='sign-up'>
      <div className='signup-container'>
        <h1>LIMITED TIME OFFER</h1>
        <p>Be the first to try our development kit</p>
        <p>Sign up now and get a free use on your projects!</p>
  
        <div className='input-areas'>
            <form>
              <input
                className='signup-name'
                name='name'
                type='text'
                placeholder='Your Name'  
              />
              <br></br>
              <input
                className='signup-id'
                name='email'
                type='email'
                placeholder='Email'
              />
              <br></br>
              <input 
                className='signup-org'
                name='organization'
                type='text'
                placeholder='Organization'
              />
              <br></br>
              <input 
                className='signup-loc'
                name='location'
                type='text'
                placeholder='Location'
              />
              <br></br>
              <Button buttonStyle='btn--outline2'>Continue</Button>
            </form>
        </div>

        </div>
      </div>
      );
}
