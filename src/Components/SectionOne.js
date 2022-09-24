import '../Styling/SectionOne.css'
import bgImg from '../Assets/Images/image-mockups.png'
import bgMobile from '../Assets/Images/bg-intro-mobile.svg'
import Button from './Button'

const SectionOne = (props) => {
  return (
    <div className='section-one-container'>
        <div className="background-image">
            <div className="bgMobile">
                <img src={bgMobile}  alt="bgMobile" />
            </div>      
            <div className="bgImg">
                <img src={bgImg}  alt="bgImg" />
            </div>      
        </div>
        <div className="title">
            <h1>Next generation digital banking</h1>
            <p>Take your financial life online. Your Easyank account will be a one-stop-shop 
                for spending, saving, budgeting, investing, and much more.
            </p>
        </div>
        <Button color1={'hsl(136, 65%, 51%)'} color2={' hsl(192, 70%, 51%)'} text={'Request Invite'} />
    </div>
  )
}

export default SectionOne
