import '../../Styling/Boxes.css'
import { useState } from "react";
import online from '../../Assets/Images/icon-online.svg'
import budgeting from '../../Assets/Images/icon-budgeting.svg'
import Onboarding from '../../Assets/Images/icon-onboarding.svg'
import openApi from '../../Assets/Images/icon-api.svg'
import Box from './Box';

const Boxes = () => {
    const [boxes, setBoxes] = useState ([
        {
            id: 1,
            icon: online,
            title: 'Online Banking',
            text: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.'
        },
        {
            id: 2,
            icon: budgeting,
            title: 'Simple Budgeting',
            text: 'See exactly where your money goes each month. Recieve notifications when youre close to your hitting limits.'
        },
        {
            id: 3,
            icon: Onboarding,
            title: 'Fast Onboarding',
            text: 'We dont do branches. Open your account in minutes online and start taking control of your financies right away.'
        },
        {
            id: 4,
            icon: openApi,
            title: 'Open API',
            text: 'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier'
        },
    ])

  return (
    <div className='boxes'>
        {boxes.map((box) => (
            <Box 
            key={box.id}
            box={box}
            />
        ))}
    </div>
  )
}

export default Boxes

