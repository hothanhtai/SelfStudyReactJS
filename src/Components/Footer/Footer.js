import React from 'react'

import "./Footer.css"

const Footer = () => {
  const navItems =  <>
  <a href="/">Products</a>
  <a href="/">Story</a>
  <a href="/">Manufacturing</a>
  <a href="/">Packaging</a>
</>
const navIcons = <>
  <a href="/">
    <img src="images/icons/basket.png" alt="" />
  </a>
  <a href="/">
    <img src="images/icons/person.png" alt="" />
  </a>
</>
  return (
    <div className='footer-section'>
        <div className="footer-logo">
          <img src="images/logo.png" className='footer-logo__img' alt="logo" />
          <div className="footer-logo__nav">
              {navItems}
              {navIcons}
          </div>
          <p className='coppyright'>CopyRight &copy; by ThanhTai</p>
        </div>
        <div className="footer-contact">
          <div className="contact-address">
            <img src="images/icons/address.png" className='address-img' alt="" />
            <p className='address-text'>Da Nang-Viet Nam</p>
          </div>
          <div className="contact-phone">
            <img src="images/icons/phone.png" className='phone-img' alt="" />
            <p className="phone-text"><a href="tel:+84 366 78812">+84366 788 812</a></p>
          </div>
          <div className="contact-email">
            <img src="images/icons/email.png" alt="" className="email-img" />
            <p className="email-text"><a href="mailto:thanhtaiho188@gmail.com">thanhtaiho188@gmail.com</a></p>
          </div>
        </div>
        <div className="footer-social">
          <h3>About Us</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Distinctio nisi, voluptatem, aliquam tenetur necessitatibus dicta pariatur et culpa saepe esse reprehenderit. 
            Quas assumenda exercitationem earum quaerat molestias, sint omnis quam!</p>
          <ul>
            <li><i class="fa-brands fa-square-facebook"></i></li>
            <li><i class="fa-brands fa-square-instagram"></i></li>
            <li><i class="fa-brands fa-square-youtube"></i></li>
            <li><i class="fa-brands fa-square-twitter"></i></li>
          </ul>
        </div>

    </div>
  )
}

export default Footer