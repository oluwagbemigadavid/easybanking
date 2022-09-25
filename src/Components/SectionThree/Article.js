import '../../Styling/Article.css'

const Article = (props) => {
  return (
    <div className='article'>
      <img src={props.article.image} alt={props.article.image} />
      <div className="section-three-body">
        <h5>By: {props.article.author}</h5>
        <h2>{props.article.title}</h2>
        <p>{props.article.text}</p>
      </div>
    </div>
  )
}

export default Article
