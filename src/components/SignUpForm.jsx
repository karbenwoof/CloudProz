import { useForm } from 'react-hook-form'
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Flex,
} from '@chakra-ui/react'
import emailjs, { send } from '@emailjs/browser';
import { Form } from 'react-router-dom';


export default function SignUpForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  const sendEmail = (values) => {
    emailjs.send('service_1htibvt', 'template_7ehacia', values, 'QOR0n99vvu_oF8MkC')

    return false;
  }
  

  function onSubmit(values) {
    sendEmail(values)
    return new Promise((resolve) => {
      setTimeout(() => {
        alert('Thank you for signing up! We will get back to you soon!')
        resolve()
      }, 1000)
    })
  }


  return (
    <form class='input' onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.name}>
        <FormLabel htmlFor='name' pb='1' color='white'>Please fill your information</FormLabel>
        <Input
            id='name'
            name='name'
            placeholder='Your name'
            _placeholder={{ opacity: 1, color: 'gray.300' }}
            size='lg'
            width='120%'
            variant='outline'
            borderColor='gray.300'
            color='white'
          {...register('name', {
            required: 'This field is required',
          })}
        />
        <FormErrorMessage>
          {errors.name && errors.name.message }
        </FormErrorMessage>
        </FormControl>
      <FormControl isInvalid={errors.email}>
        <FormLabel htmlFor='email' pt='8'></FormLabel>
        <Input
            id='email'
            name='email'
            placeholder='Email'
            _placeholder={{ opacity: 1, color: 'gray.300' }}
            size='lg'
            width='120%'
            variant='outline'
            borderColor='gray.300'
            color='white'
            {...register('email', {
            required: 'This field is required',
          })}
        />
        <FormErrorMessage>
            {errors.email && errors.email.message }
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.purpose}>
        <FormLabel htmlFor='purpose' pt='8'></FormLabel>
        <Input
            id='purpose'
            name='purpose'
            placeholder='Purpose of use'
            _placeholder={{ opacity: 1, color: 'gray.300' }}
            size='lg' 
            width='120%'
            variant='outline'
            borderColor='gray.300'
            color='white'
            {...register('purpose', {
            required: 'This field is required',
            })}
        />
        <FormErrorMessage>
            {errors.purpose && errors.purpose.message }
        </FormErrorMessage>
      </FormControl>
      <Flex justifyContent="center" alignItems="center">
        <Button mt={7} 
          ml='10' 
          colorScheme='gray' 
          variant='solid' 
          size='lg' 
          isLoading={isSubmitting} 
          type='submit' 
          >
          GET STARTED
        </Button>
      </Flex>
    </form>
  )
}