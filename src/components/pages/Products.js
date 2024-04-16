import React from 'react';
import '../../App.css';
import Footer from '../Footer';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub
} from "@fortawesome/free-brands-svg-icons"

import {
  Stack,
  Text,
  Button,
  Box,
  Link
} from "@chakra-ui/react"



export default function Products() {
  return (
    <>
      <div className='products'>
        <Stack spacing={8} align="center">
          <h1 >Introducing CloudPi</h1>
          <Box w ='50%' fontSize='2xl' color='white'> 
          We are pleased to unveil CloudPi, an innovative cloud computing platform meticulously crafted to seamlessly integrate with Raspberry Pi devices. CloudPi represents a sophisticated yet accessible solution designed to cater to the needs of students, educators, and enthusiasts alike.
          </Box>
          <Text fontSize='4xl' pt='10'>Here is our CloudPi GitHub repository {' '}
            <Link href='https://github.com/Cloud-Proz/Cloud-Pi' isExternal>
              <Button colorScheme='purple' variant='solid' size='lg'
              rightIcon={<FontAwesomeIcon size='lg' icon={faGithub} />}
              >
                GitHub
              </Button>
            </Link>
          </Text>
          <Text fontSize='xl'>Prior to utilizing CloudPi, please sign up for an access to our product.






</Text>
          

        </Stack>
      </div>
      <Footer />
    </>
  );
}
