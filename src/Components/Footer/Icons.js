import '../../Styling/Icons.css'
import { useState } from "react";
import facebook from '../../Assets/Images/icon-facebook.svg'
import youtube from '../../Assets/Images/icon-youtube.svg'
import twitter from '../../Assets/Images/icon-twitter.svg'
import pintrest from '../../Assets/Images/icon-pinterest.svg'
import instagram from '../../Assets/Images/icon-instagram.svg'
import Icon from './Icon';

const Icons = () => {
    const [icons, setIcons] = useState ([
        {
            id: 1,
            icon: facebook,
            name: facebook,
        },
        {
            id: 2,
            icon: youtube,
            name: youtube,
        },
        {
            id: 3,
            icon: twitter,
            name: twitter,
        },
        {
            id: 4,
            icon: pintrest,
            name: pintrest,
        },
        {
            id: 5,
            icon: instagram,
            name: instagram,
        },
    ])

  return (
    <div className='icons'>
        {icons.map((icon) => (
            <Icon
              key={icon.id}
              icon={icon}
            />
        ))}
    </div>
  )
}

export default Icons

