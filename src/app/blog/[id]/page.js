// import React from 'react';
// import { getApiHost } from 'utils/functions';
// import BlogHeader from '../components/adaptive/BlogHeader';
// import BlogContent from '../components/adaptive/BlogContent';
// import News from '../../components/adaptive/News';

// const newsUpdate = [
//   {
//     linkedin: 'https://www.linkedin.com/feed/update/urn:li:activity:7160572889300160512/',
//   },
// ];
// //
// async function BlogDetailed({ params }) {
//   const { id } = params;

//   const news = await (await fetch(`${getApiHost()}/news-posts/${id}`)).json();

//   return (
//     <main>
//       <BlogHeader
//         avatar={news.author.avatar}
//         position={news.author.position}
//         author={news.author.name}
//         title={news.title}
//         date={news.publish}
//         tag={news.news_category.title}
//       />
//       <BlogContent content={news.article} linkedin={newsUpdate[0].linkedin} />
//       <News titleMain="Other news" />
//     </main>
//   );
// }

// export default BlogDetailed;
