import React from 'react';
import '../../App.css';
import {
  Stack,
  Text,
  Box
} from "@chakra-ui/react"

export default function Services() {
  return (
    <div className='services'>
      <Stack spacing={8} align="center">
        <h1 >OUR ADVANTAGES</h1>
        <Text fontSize='4xl' pt='10'>Affordable Cloud Computing Solution for Students</Text>
        <Text fontSize='4xl'>Seamless Integration with Raspberry Pi Projects</Text>
        <Text fontSize='4xl'>Easy-to-Use Cloud Computing Solution</Text>

      </Stack>
    </div>
  ); 
}
