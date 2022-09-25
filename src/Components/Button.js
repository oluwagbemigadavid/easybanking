import PropTypes from 'prop-types'
import '../Styling/Button.css'
import { useEffect } from 'react';

const Button = ({color1, color2, text, onClick}) => {
    useEffect(() => {
        document.documentElement.style.setProperty('--colorA', color1);
        document.documentElement.style.setProperty('--colorB', color2);
    }, [])
  return (
    <button onClick={onClick} className='btn'>{text}</button>
  )
}
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}
export default Button
