import '../../Styling/Icon.css'

const Icon = (props) => {
  return (
    <div className='icon'>
      <img src={props.icon.icon} alt={props.icon.icon} title={props.icon.name} />
    </div>
  )
}

export default Icon
