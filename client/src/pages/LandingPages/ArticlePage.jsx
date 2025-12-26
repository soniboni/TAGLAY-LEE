import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchArticles } from '../../services/ArticleService';
import NotFoundPage from '../NotFoundPage.jsx';

function ArticlePage() {
  const { name } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadArticle = async () => {
      try {
        setLoading(true);
        const { data } = await fetchArticles();
        const found = data.articles.find(a => a.name === name && a.isActive);
        if (!found) {
          setError('Article not found.');
        } else {
          setArticle(found);
        }
      } catch (err) {
        console.error('Error fetching article:', err);
        setError('Unable to load article.');
      } finally {
        setLoading(false);
      }
    };

    loadArticle();
  }, [name]);

  if (loading) return <p className="muted">Loading article...</p>;
  if (error) return <NotFoundPage />;

  const contentArray = Array.isArray(article.content) ? article.content : [article.content];

  return (
    <div className="page article-page">
      <div className="page-header">
        <p className="eyebrow">Article</p>
        <h1>{article.title}</h1>
      </div>
      <div className="article-body">
        {contentArray.map((p, i) => <p key={i}>{p}</p>)}
      </div>
    </div>
  );
}

export default ArticlePage;
