import { assets } from '../../assets/assets'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, veniam repellat, ipsum voluptatibus sapiente provident ipsam inventore iusto, autem ratione vel deserunt. Est, cum expedita. Odio accusamus praesentium repellendus molestiae.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
               <h2>COMPANY</h2>
               <li>Home</li>
               <li>About Us</li>
               <li>Delivery</li>
               <li>Privacy Policy</li>
            </div>
            <div className="footer-content-right">
               <h2>GET IN TOUCH</h2>
               <ul>
                <li>020998746</li>
                <li>condos@gmail.com</li>
               </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">
            Copyright 2024 Tomato.com -All Rights Reserved.
        </p>
    </div>
  )
}

export default Footer