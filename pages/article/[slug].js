import ReactMarkdown from 'react-markdown';
import Moment from 'react-moment';
import { fetchAPI } from '../../src/lib/api';
import Layout from '../../src/components/Layout';
import Image from '../../src/components/Image';
import Seo from '../../src/components/Seo';
import { getStrapiMedia } from '../../src/lib/media';

const Article = ({ article, categories }) => {
  const imageUrl = getStrapiMedia(article.image);

  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.image,
    article: true,
  };

  return (
    <Layout categories={categories}>
      <Seo seo={seo} />
      <div
        id='banner'
        data-src={imageUrl}
        data-srcset={imageUrl}
        data-uk-img
      >
        <h1>{article.title}</h1>
      </div>
      <div>
        <div>
          <ReactMarkdown source={article.content} escapeHtml={false} />
          <hr />
          <div>
            <div>
              {article.author.picture && (
                // eslint-disable-next-line jsx-a11y/alt-text
                <Image
                  image={article.author.picture}
                  style={{
                    position: 'static',
                    borderRadius: '50%',
                    height: 30,
                  }}
                />
              )}
            </div>
            <div>
              <p>
                By {article.author.name}
              </p>
              <p>
                <Moment format='MMM Do YYYY'>{article.published_at}</Moment>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const articles = await fetchAPI('/articles');

  return {
    paths: articles.map((article) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const articles = await fetchAPI(`/articles?slug=${params.slug}`);
  const categories = await fetchAPI('/categories');

  return {
    props: { article: articles[0], categories },
    revalidate: 1,
  };
}

export default Article;
