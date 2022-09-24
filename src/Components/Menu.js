import '../Styling/Menu.css'

const Menu = (props) => {
  return (
    <div className={` menu ${props.showMen ? 'active' : ''}`} >
    <a href="/">Home</a>
    <a href="/">About</a>
    <a href="/">Contact</a>
    <a href="/">Blog</a>
    <a href="/">Careers</a>
    </div>
  )
}

export default Menu
