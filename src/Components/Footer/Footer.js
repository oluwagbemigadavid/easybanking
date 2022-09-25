import '../../Styling/Footer.css'
import logo from '../../Assets/Images/logo.svg'   
import Icons from './Icons'
import Button from '../Button'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className="footer-contents">  
        <img src={logo}  alt="logo" className='logo'/>
        <Icons className="icons" />
        <div className="footer-menu" >
          <a href="/">About Us</a>
          <a href="/">Contact</a>
          <a href="/">Blog</a>
          <a href="/">Careers</a>
          <a href="/">Support</a>
          <a href="/">Privacy Policy</a>
          </div>

          <Button color1={'hsl(136, 65%, 51%)'} color2={' hsl(192, 70%, 51%)'} text={'Request Invite'} className="btn"/>

          <p> &copy; Easybank. All Rights Reserverd</p>
      </div>
    </div>
  )
}

export default Footer
