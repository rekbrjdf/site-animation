import React from 'react';
import { getApiHost } from 'utils/functions';
import Content from './components/adaptive/Content';

export default async function Blog() {
  const posts = await (
    await fetch(
      `${getApiHost()}/news-posts?_sort=publish:DESC&_limit=10`, // поставил ограничение пока нет скелетонов или лоадера, чтобы верстка прогружалась
    )
  ).json();
  return <Content posts={posts} />;
}
