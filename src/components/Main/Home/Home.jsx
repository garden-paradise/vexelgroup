import { NavLink } from 'react-router-dom';
import './Home.scss';
import NewsComp from './reuse/NewsComp/NewsComp';
import NewsMiniComp from './reuse/NewsMiniComp/NewsMiniComp';
import about from '../../../images/main/home/about.png';
import biznes from '../../../images/main/home/biznes.png';
import ImageGallery from 'react-image-gallery';
import { useEffect } from 'react';
import { AspectRatio } from 'react-aspect-ratio';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Home = (props) => {
  useEffect(() => {
    props.getArticles();
    props.getAdvertising();
    props.getPartners();
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className='home Uni_padding'>
      <AspectRatio className='home_car'>
        {props.advertising != null && (
          <ImageGallery
            showBullets={false}
            lazyLoad={true}
            autoPlay={true}
            showPlayButton={false}
            showFullscreenButton={false}
            showNav={false}
            slideInterval='6000'
            renderItem={(item) => (
              <img
                src={item.original}
                className='gallery_img'
                style={{
                  maxHeight: '812px',
                  margin: '0 auto',
                  objectFit: 'contain',
                }}
              />
            )}
            items={props.advertising.map((item) => {
              return {
                original: `https://storage.googleapis.com/vexel-group-media/${item.photo.path}`,
              };
            })}
          />
        )}
      </AspectRatio>

      <div className='container'>
        <section className='home_sec2 '>
          <div className='home_sec2_news'>
            <NewsComp
              data={[
                {
                  title: 'О нас',
                  subtitle:
                    'Наша цель – предложить потребителям широкий выбор альтернатив обычным сигаретам с меньшим вредом для здоровья.',
                  btnLink: '/about',
                },
                {
                  title: 'Деятельность',
                  subtitle:
                    'Мы выстраиваем долгосрочные отношения с компаниями в сфере розничной и оптовой торговли, а также в сфере франчайзинга.',
                  btnLink: '/businesses',
                },
              ]}
            />
          </div>
          <div className='home_sec2_news_block'>
            <div className='home_sec2_news_block_info'>
              <div className='home_sec2_news_block_info_title'>Новости</div>
              <NavLink to='/press' className='home_sec2_news_block_all'>
                Все новости
              </NavLink>
            </div>
            {props.articles != null && <NewsMiniComp date={props.articles} />}
          </div>
        </section>
        <div className='FontSizeTitle carousel_title'>Партнеры</div>
      </div>

      <div className='carousel'>
        {props.partners && (
          <Carousel
            swipeable={true}
            draggable={true}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={8000}
            arrows={false}
            partialVisible={false}
            keyBoardControl={false}
            customTransition='transform 4000ms linear'
            transitionDuration={4000}
            containerClass='carousel-container'
            itemClass='carousel-item'
          >
            {props.partners.map((item, i) => (
              <img
                src={`https://storage.googleapis.com/vexel-group-media/${item.photo.path}`}
                alt={item.name}
                key={i}
              />
            ))}
          </Carousel>
        )}
      </div>
    </section>
  );
};

export default Home;
