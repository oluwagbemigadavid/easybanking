import '../../Styling/SectionTwo.css'
import Boxes from './Boxes';

const SectionTwo = () => {
  return (
    <div className='section-two-container'>
      <div className="section-two-contents">
        <div className="title">
            <h1> Why choose Easybank?</h1>
            <p>We leverage Open Banking to turn your bank account into your financial hub. 
                Control your financies like never before
            </p>
        </div>
        <Boxes />
      </div>
    </div>
  )
}

export default SectionTwo
