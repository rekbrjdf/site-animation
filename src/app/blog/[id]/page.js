import React from 'react';
import { getApiHost } from 'utils/functions';
import BlogHeader from '../components/adaptive/BlogHeader';
import BlogContent from '../components/adaptive/BlogContent';
import News from '../../components/adaptive/News';

const newsUpdate = [
  {
    linkedin: 'https://www.linkedin.com/feed/update/urn:li:activity:7160572889300160512/',
  },
];

export async function generateStaticParams() {
  try {
    const res = await fetch(`${getApiHost()}/news-posts`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch news posts');
    const posts = await res.json();
    return posts.map((post) => ({ id: post.id.toString() }));
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function BlogDetailed({ params }) {
  const { id } = params;

  let news = null;
  try {
    const res = await fetch(`${getApiHost()}/news-posts/${id}`);
    if (!res.ok) throw new Error('Failed to fetch news');
    news = await res.json();
  } catch (error) {
    console.error(error);
    return (
      <main>
        <p>Error loading news article.</p>
      </main>
    );
  }

  return (
    <main>
      <BlogHeader
        avatar={news.author.avatar}
        position={news.author.position}
        author={news.author.name}
        title={news.title}
        date={news.publish}
        tag={news.news_category.title}
      />
      <BlogContent content={news.article} linkedin={newsUpdate[0].linkedin} />
      <News titleMain="Other news" />
    </main>
  );
}

export default BlogDetailed;
