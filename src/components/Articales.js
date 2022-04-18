import React, { useState, useEffect } from 'react';
import SkeletonArticle from '../skeletons/SkeletonArticle';

const Articales = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setArticles(data);
    }, 3000)
    // console.log(articles);
  }, []);
  return (
    <main className='articale'>
      <h2>Articales</h2>

      {articles && articles.map(article => (
        <div className="article" key={article.id.toString()}>
          <h3>{article.title}</h3>
          <p>{article.body}</p>
        </div>
      ))}
      {!articles && [1, 2, 3, 4, 5].map(n => (<SkeletonArticle key={n} />))}
    </main>
  )
}

export default Articales;