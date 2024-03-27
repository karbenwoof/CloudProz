import React from 'react';
import './Vision.css';
import {
    Stack,
    Text,
    Box
  } from "@chakra-ui/react"

  export default function Vision({...props}) {
    return (
        <div className='vision-container' id='vision'>
            <Stack spacing={8} align="center" {...props}>
                <Text fontSize='6xl' color='white'>OUR VISION</Text>
                <Text fontSize='4xl' color='white'>"Empowering the next generation of innovators"</Text>
                <Box w ='50%' fontSize='lg' color='white'> 
                    Our vision revolves around empowering the next generation of innovators: the students. We envision a future where students, regardless of their technical background, can leverage cloud computing seamlessly with Raspberry Pi for their projects and beyond. Our platform will offer a user-friendly interface tailored specifically for students, providing easy access to cloud resources for coding, data storage, and collaboration. By simplifying complex cloud technologies, we aim to inspire creativity and exploration, enabling students to push the boundaries of their projects and develop the skills needed for success in the digital age.
                </Box>
            </Stack>
        </div>
    );
  }