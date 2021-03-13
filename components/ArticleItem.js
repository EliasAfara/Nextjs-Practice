import Link from 'next/link';
import articleStyles from '../styles/Article.module.css';

const ArticleItem = ({ article }) => {
  return (
    <Link href={`/article/${article.id}`}>
      <a className={articleStyles.card}>
        <h3 className={articleStyles.title}>{article.title}</h3>
        <p>{article.excerpt}</p>
      </a>
    </Link>
  );
};

export default ArticleItem;
