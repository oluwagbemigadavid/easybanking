import '../../Styling/SectionThree.css'
import Articles from './Articles'

const SectionThree = () => {

  return (
    <div className='section-three-container'>
      <div className="section-three-contents">
        <div className="title">
            <h1> Latest Articles </h1>
        </div>
        <Articles />
      </div>
    </div>
  )
}

export default SectionThree
