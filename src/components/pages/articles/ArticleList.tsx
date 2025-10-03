import ArticleCard from './ArticleCard';
import { ArticleDetails } from '@/types/articles';

interface ArticleListProps {
  articles: ArticleDetails[];
}

export default function ArticleList({ articles }: ArticleListProps) {
  if (!articles || articles.length === 0) {
    return <p className="text-center text-gray-500">Belum ada artikel.</p>;
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
}
