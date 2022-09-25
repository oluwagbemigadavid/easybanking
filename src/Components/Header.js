import '../Styling/Header.css'
import { useState } from "react";
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'
import logo from '../Assets/Images/logo.svg'
import Menu from './Menu'
import Button from './Button';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false)

  return (
    <div className="div">
        <div className='header'>
        <img src={logo}  alt="logo"  className='logo'/>
        { !showMenu ? <GiHamburgerMenu onClick={() => setShowMenu(!showMenu)} className="menuIcon" /> : <GrClose  onClick={() => setShowMenu(!showMenu)} className="menuIcon" />}
        <Menu showMen={showMenu} />
        
        <Button color1={'hsl(136, 65%, 51%)'} color2={' hsl(192, 70%, 51%)'} text={'Request Invite'} className="btn"/>

      </div>
        <div className={` overlay ${showMenu ? 'active' : ''}`}></div>
    </div>
    
  )
}

export default Header
