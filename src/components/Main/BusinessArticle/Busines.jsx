import './Busines.scss';
import { useEffect } from 'react';
import { useState } from 'react';
import biznes from '../../../images/main/title/biznes.png';
import biznesTel from '../../../images/main/title/biznesTel.png';
import PageTitle from '../../../reuse_Components/PageTitle/PageTitle';
import { AspectRatio } from 'react-aspect-ratio';
import { NavLink } from 'react-router-dom';
import Dropdown from 'react-dropdown';
import ParseTexts from '../../../reuse_Components/ParseTexts/ParseTexts';

const Busines = (props) => {
  // const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    let businessId = props.match.params.businessId;
    props.getBusiness(businessId);
  }, []);

  // useEffect(() => {
  //   let businessId = props.match.params.businessId;
  //   props.getBusiness(businessId);
  //   let category = props.match.params.category;
  //   props.getBusinessesCategory(category);
  // }, [props.match.params.businessId]);

  // let sizeChange = () => {
  //   window.innerWidth < 1200 ? setDropdown(true) : setDropdown(false);
  // };

  // useEffect(() => {
  //   window.addEventListener('resize', sizeChange);
  //   return () => window.removeEventListener('resize', sizeChange);
  // }, [window.innerWidth]);

  // const options =
  //   props.businessesCategory &&
  //   props.businessesCategory.businesses.map((item) => {
  //     return {
  //       label: `${item.name}`,
  //       className: 'myOptionClassName',
  //     };
  //   });

  return (
    props.business != null && (
      <section className='business'>
        <PageTitle title='Деятельность' image={biznes} imageTel={biznesTel} />
        <div className='container'>
          <div className=' Uni_padding'>
            <NavLink to='/businesses' className='NavLink'>
              <div className='business-title'>Все категории</div>
            </NavLink>
            <div className='business-sec'>
              <div className='business-menu'>
                {/* {dropdown ? (
                    <Dropdown
                      options={options}
                      value={options[0]}
                      // onChange={_onSelect}
                      controlClassName='myControlClassName'
                      menuClassName='myMenuClassName'
                      arrowClosed={<span className='arrow-closed' />}
                      arrowOpen={<span className='arrow-open' />}
                    />
                  ) : (
                    <div>
                      {props.businessesCategory.businesses.map((item, i) => (
                        <NavLink
                          to={`/businesses/${item.category}/${item._id}`}
                          className=' business-btn'
                          key={i}
                        >
                          <div className='business-menuItem'>{item.name}</div>
                        </NavLink>
                      ))}
                    </div>
                  )} */}

                <div className='business-menuItem'>
                  {props.business.business.name}
                </div>
              </div>

              <div className='business-block'>
                <div className='business-info'>
                  <div className='business-infoTitle'>
                    {props.business.business.name}
                  </div>
                  <div className='FontSizeSubtitle business-infoSubtitle'>
                    <ParseTexts fullText={props.business.business.descripton} />
                  </div>
                  <div className='business-infoContacts'>
                    {props.business.business.phone.length != 0 && (
                      <div className='business-infoPhone'>
                        <div>
                          <b>Тел.: </b>
                        </div>
                        <div className='business-infoPhoneBlock'>
                          {props.business.business.phone.map((numb, i) => (
                            <div key={i}>
                              <a
                                className='business-phone'
                                href={`tel:+${numb} `}
                              >
                                {numb}
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    {props.business.business.email && (
                      <div className='business-infoEmail'>
                        <b>E-mail: </b>
                        {props.business.business.email}
                      </div>
                    )}
                    {props.business.business.siteUrl && (
                      <div>
                        <b>Сайт: </b>
                        <a
                          className='business-infoSite'
                          href={props.business.business.siteUrl}
                          target='_blank'
                        >
                          {props.business.business.siteUrl}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
                <AspectRatio style={{ Width: '560px' }}>
                  {
                    <img
                      className='business-img'
                      src={`https://storage.googleapis.com/vexel-group-media/${props.business.business.fullPhoto.path}`}
                    />
                  }
                </AspectRatio>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default Busines;
