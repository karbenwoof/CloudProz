import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter, faFacebook, faInstagram, faYoutube, faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { Button, ButtonGroup } from '@chakra-ui/react';
import {Link as ChakraLink, LinkProps} from '@chakra-ui/react';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
}
  return (
    <div className='footer-container'>
      {/*<section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join our newsletter to receive our latest news!
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
  </section>*/}
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/products' onClick={scrollToTop}>How it works</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <ChakraLink href='mailto:services@cloud-proz.com' isExternal>Contact</ChakraLink>
            <Link to='/'>Support</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <ChakraLink href='https://www.facebook.com/people/CloudProz/61558540810750/' isExternal>Facebook</ChakraLink>
            <ChakraLink href='' isExternal>Instagram</ChakraLink>
            <ChakraLink href='' isExternal>Youtube</ChakraLink>
            <ChakraLink href='https://twitter.com/CloudProzAI' isExternal>Twitter</ChakraLink>
            <ChakraLink href='https://www.linkedin.com/company/cloud-proz-ai/' isExternal>LinkedIn</ChakraLink>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' 
            className='social-logo'
            onClick={scrollToTop}
            >
              CloudProz
              <FontAwesomeIcon icon={faCloud} />
            </Link>
          </div>
          <small class='website-rights'>CloudProz © 2024</small>
          <div class='social-icons'>
            <ChakraLink href='https://www.facebook.com/people/CloudProz/61558540810750/' isExternal>
              <FontAwesomeIcon size='xl' style={{color: '#ffffff'}} icon={faFacebook} />
            </ChakraLink>

            <ChakraLink href='' isExternal>

              <FontAwesomeIcon size='xl' style={{color: '#ffffff'}} icon={faInstagram} />
            </ChakraLink>
            <ChakraLink href='' isExternal>

              <FontAwesomeIcon size='xl' style={{color: '#ffffff'}} icon={faYoutube} />
            </ChakraLink>
            <ChakraLink href='https://twitter.com/CloudProzAI' isExternal>

              <FontAwesomeIcon size='xl' style={{color: '#ffffff'}} icon={faTwitter} />
            </ChakraLink>
            <ChakraLink href='https://www.linkedin.com/company/cloud-proz-ai/' isExternal>
              <FontAwesomeIcon size='xl' style={{color: '#ffffff'}} icon={faLinkedin} />
            </ChakraLink>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
