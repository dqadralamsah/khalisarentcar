'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArticleDetails } from '@/types/articles';

type ArticleCardProps = {
  article: ArticleDetails;
};

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <div className="flex flex-col items-center max-h-[30rem] gap-2">
      {article.thumbnailUrl && (
        <Image
          src={article.thumbnailUrl}
          alt={article.title}
          width={400}
          height={225}
          className="w-full h-[225px] object-cover"
        />
      )}
      <div className="w-full text-xs text-gray-500">
        {new Date(article.createdAt).toLocaleDateString('id-ID')}
      </div>
      <div className="w-full">
        <h3 className="text-base font-bold">{article.title}</h3>
        <p className="text-sm text-gray-500">{article.excerpt}</p>
      </div>
      <div className="w-full">
        <Link
          href={`/articles/${article.slug}`}
          className="text-xs font-extrabold hover:text-khsblue2"
        >
          BACA DETAIL →
        </Link>
      </div>
    </div>
  );
}
