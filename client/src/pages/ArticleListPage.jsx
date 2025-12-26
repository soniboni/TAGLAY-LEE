import { useState, useEffect } from 'react'
import ArticleList from '../components/ArticleList.jsx'
import articles from '../../article-content.js'
import '../styles/ArticleList.css'

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
    <>
    <h1>Articles</h1>
    <div className='article-list'>
        {isLoading ? (
            <p>Loading articles...</p>
        ) : articleData.length > 0 ? (
            <ArticleList articles={articleData} /> 
        ) : (<h1>No articles available.</h1>)}
    </div>
    
    </>
  )
}

export default ArticleListPage
