import { useState, useEffect } from 'react'
import ArticleList from '../../components/ArticleList.jsx'
import articles from '../../../article-content.js'
import '../../styles/ArticleList.css'

const ArticleListPage = () => {
    const[articleData, setArticleData] = useState ([])
    const[isLoading, setIsLoading] = useState (true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setArticleData(articles);
            setIsLoading(false);
        }, 1000)

        return () => clearTimeout(timer);
    }, []);


  return (
    <div className="page">
  <div className="page-header-hero-container">
    <div className="page-header">
      <p className="eyebrow">Library</p>
      <h1>Articles crafted for UI-minded developers.</h1>
      <p className="lead">
        Click on the articles below to read more. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices in velit varius rutrum vitae arcu.
      </p>
    </div>

    <div className="hero-visual">
      <div className="hero-panel">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2372&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Design desk with colorful UI elements"
        />
      </div>
    </div>
  </div>

  <div className="article-list">
    {isLoading ? (
      <p>Loading articles...</p>
    ) : articleData.length > 0 ? (
      <ArticleList articles={articleData} /> 
    ) : (
      <h1>No articles available.</h1>
    )}
  </div>
</div>
  )
}

export default ArticleListPage
