import React from 'react';
import { useParams } from 'react-router-dom';
import articles from '../../../article-content.js';
import NotFoundPage from '../NotFoundPage.jsx';

function ArticlePage() {
  const { name } = useParams();
  const article = articles.find(a => a.name === name);

  if (!article) return <NotFoundPage />;

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
