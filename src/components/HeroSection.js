import React from 'react';
import { useRef } from 'react';
import '../App.css';
import './HeroSection.css';
import { Vision } from './Vision';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faDollarSign,
  faComputer,
} from "@fortawesome/free-solid-svg-icons"
import { Button, ButtonGroup,   } from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react'


function HeroSection() {
  
  const ScrollDemo = () => {
    const myRef = useRef(null)
 
    const executeScroll = () => myRef.current.scrollIntoView()    
    // run this function from an event handler or an effect to execute scroll 
 
    return (
       <> 
          <div ref={myRef}>Element to scroll to</div> 
          <button onClick={executeScroll}> Click to scroll </button> 
       </>
    )
 }
  return (
    <div className='hero-container'>
      {/*<video src='/videos/video-1.mp4' autoPlay loop muted />*/}
      <h1>NEXT GENERATION DEVELOPMENT</h1>
      <p>Try our online computing for your projects</p>
      <ButtonGroup spacing="4" alignItems="center" pt='10'>
        <ChakraLink href='#vision'> 
          <Button colorScheme='orange' variant='outline' size='lg'>
            GET STARTED
          </Button>
        </ChakraLink>
        <ChakraLink as={ReactRouterLink} to='/products'>
          <Button colorScheme='orange' variant='solid' size='lg'
          rightIcon={<FontAwesomeIcon icon={faComputer} />}
          >
            OUR PRODUCT
          </Button>
        </ChakraLink>
      </ButtonGroup>
    </div>
  );
}

export default HeroSection;
