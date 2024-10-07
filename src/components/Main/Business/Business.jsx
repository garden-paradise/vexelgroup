import PageTitle from '../../../reuse_Components/PageTitle/PageTitle';
import './Business.scss';
import BusinessBlockComp from './reuse/BusinessBlockComp/BusinessBlockComp';
import biznes from './../../../images/main/title/biznes.png';
import biznesTel from './../../../images/main/title/biznesTel.png';
import { useEffect } from 'react';
import { useState } from 'react';
import Dropdown from 'react-dropdown';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Business = (props) => {
  let [dataMap, setDataMap] = useState({
    brand: [],
    franchising: [],
    retailSale: [],
    wholeSale: [],
    distributor: [],
  });
  let [cards, setCards] = useState([]);
  let [style, setStyle] = useState('');
  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    props.getBusinesses();
    props.getPartners();
    sizeChange();
  }, []);

  useEffect(() => {
    if (props.businesses != null) {
      let newDataMap = {
        brand: [],
        franchising: [],
        retailSale: [],
        wholeSale: [],
        distributor: [],
      };
      props.businesses.forEach((item) => {
        switch (item.category) {
          case 'brand':
            newDataMap.brand.push(item);
            break;
          case 'franchising':
            newDataMap.franchising.push(item);
            break;
          case 'retailSale':
            newDataMap.retailSale.push(item);
            break;
          case 'wholeSale':
            newDataMap.wholeSale.push(item);
            break;
          case 'distributor':
            newDataMap.distributor.push(item);
            break;
          default:
            break;
        }
      });
      setDataMap(newDataMap);
    }
  }, [props.businesses]);

  useEffect(() => {
    if (dataMap !== null) {
      showBusinessCards('brand');
      setStyle('brand');
    }
  }, [dataMap]);

  let sizeChange = () => {
    window.innerWidth < 1300 ? setDropdown(true) : setDropdown(false);
  };

  useEffect(() => {
    window.addEventListener('resize', sizeChange);
    return () => window.removeEventListener('resize', sizeChange);
  }, [window.innerWidth]);

  const showBusinessCards = (category) => {
    try {
      if (category === 'brand') {
        setCards(dataMap['brand'].concat(dataMap['distributor']));
      } else {
        setCards(dataMap[category]);
      }
      setStyle(category);
    } catch {
      console.log('wrong category');
    }
  };

  let onSelect = (option) => showBusinessCards(option.value);

  const options = [
    { label: 'Бренды', value: 'brand', className: 'myOptionClassName' },
    {
      label: 'Франчайзинг',
      value: 'franchising',
      className: 'myOptionClassName',
    },
    {
      label: 'Розничные продажи',
      value: 'retailSale',
      className: 'myOptionClassName',
    },
    {
      label: 'Оптовые продажи',
      value: 'wholeSale',
      className: 'myOptionClassName',
    },
  ];

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
    <section className='business'>
      <PageTitle
        title='Виды деятельности'
        image={biznes}
        imageTel={biznesTel}
      />
      <div className=' Uni_padding'>
        <div className='container'>
          <nav className='business_link'>
            {dropdown ? (
              <Dropdown
                options={options}
                value={options[0]}
                onChange={onSelect}
                controlClassName='myControlClassName'
                menuClassName='myMenuClassName'
                arrowClosed={<span className='arrow-closed' />}
                arrowOpen={<span className='arrow-open' />}
              />
            ) : (
              <ul className='business_link_ul'>
                <li
                  onClick={() => showBusinessCards('brand')}
                  className={`business_link_li ${
                    style === 'brand' && 'active'
                  }`}
                >
                  Бренды
                </li>
                <li
                  onClick={() => showBusinessCards('franchising')}
                  className={`business_link_li ${
                    style === 'franchising' && 'active'
                  }`}
                >
                  Франчайзинг
                </li>
                <li
                  onClick={() => showBusinessCards('retailSale')}
                  className={`business_link_li ${
                    style === 'retailSale' && 'active'
                  }`}
                >
                  Розничные продажи
                </li>
                <li
                  onClick={() => showBusinessCards('wholeSale')}
                  className={`business_link_li ${
                    style === 'wholeSale' && 'active'
                  }`}
                >
                  Оптовые продажи
                </li>
              </ul>
            )}
          </nav>
          <BusinessBlockComp data={cards} />
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
      </div>
    </section>
  );
};

export default Business;
