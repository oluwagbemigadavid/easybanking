import '../../Styling/Articles.css'
import { useState } from "react";
import currency from '../../Assets/Images/image-currency.jpg'
import restaurant from '../../Assets/Images/image-restaurant.jpg'
import plane from '../../Assets/Images/image-plane.jpg'
import confetti from '../../Assets/Images/image-confetti.jpg'
import Article from './Article';

const Articles = () => {
    const [articles, setArticles] = useState ([
        {
            id: 1,
            image: currency,
            author: 'Clarie Robinson',
            title: 'Recieve money in any currency with no fees',
            text: 'The world is getting smaller and were becoming more mobie. So why should you be forced to only recieve money in a single...'
        },
        {
            id: 2,
            image: restaurant,
            author: 'Wilson Hutton',
            title: 'Treat yourself without worring about money',
            text: 'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you...'
        },
        {
            id: 3,
            image: plane,
            author: 'Wilson Hutton',
            title: 'Take you Easybank card wherever you go',
            text: "We want you to enjoy your travels. This is why we don't charge any fees on purchases while youre abroad. We'll even show you..."
        },
        {
            id: 4,
            image: confetti,
            author: 'Clarie Robinson',
            title: 'Our invite-only Beta accounts are now live!',
            text: "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site...."
        },
    ])

  return (
    <div className='articles'>
        {articles.map((article) => (
            <Article 
                key={article.id}
                article={article}
            />
        ))}
    </div>
  )
}

export default Articles

