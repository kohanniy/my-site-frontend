import React from 'react';
import Link from 'next/link';
import Image from './image';

const Card = ({ article }) => {
  return (
    <Link as={`/article/${article.slug}`} href='/article/[id]'>
      <a>
        <div>
          <div>
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <Image image={article.image} />
          </div>
          <div>
            <p id='category'>{article.category.name}</p>
            <p id='title'>{article.title}</p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;
