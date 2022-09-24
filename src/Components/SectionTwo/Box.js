import '../../Styling/Box.css'

const Box = (props) => {
  return (
    <div className='box'>
      <img src={props.box.icon} alt={props.box.icon} />
      <h2>{props.box.title}</h2>
      <p>{props.box.text}</p>
    </div>
  )
}

export default Box
