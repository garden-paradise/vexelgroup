import PageTitle from '../../../reuse_Components/PageTitle/PageTitle';
import './Press.scss';
import NewsMiddleComp from './reuse/NewsMiddleComp/NewsMiddleComp';
import press from './../../../images/main/title/press.png';
import pressTel from './../../../images/main/title/pressTel.png';
import { useEffect } from 'react';

const Press = (props) => {
  useEffect(() => {
    props.getArticles();
  }, []);

  return (
    <section className='press'>
      <PageTitle title='Пресс-центр' image={press} imageTel={pressTel} />
      <div className='container'>
        <div className='press_board Uni_padding'>
          {props.articles != null && <NewsMiddleComp date={props.articles} />}
        </div>
      </div>
    </section>
  );
};

export default Press;
