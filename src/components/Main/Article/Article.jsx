import './Article.scss';
import { useEffect } from 'react';
import press from '../../../images/main/title/press.png';
import pressTel from '../../../images/main/title/pressTel.png';
import PageTitle from '../../../reuse_Components/PageTitle/PageTitle';
import { AspectRatio } from 'react-aspect-ratio';
import ParseTextP from '../../../reuse_Components/ParseTextP/ParseTextP';
import ParseTexts from '../../../reuse_Components/ParseTexts/ParseTexts';

const Article = (props) => {
  useEffect(() => {
    let articleId = props.match.params.articleId;
    props.getArticle(articleId);
  }, []);

  return (
    <section className='article'>
      <PageTitle title='Пресс-центр' image={press} imageTel={pressTel} />
      <div className='container'>
        {props.article != null && (
          <div className='article_sec Uni_padding'>
            <AspectRatio className='article_aspectRatio'>
              {
                <img
                  src={`https://storage.googleapis.com/vexel-group-media/${props.article.article.photo.path}`}
                />
              }
            </AspectRatio>
            <div className='article_block'>
              <ParseTexts fullText={props.article.article.fullText} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Article;
