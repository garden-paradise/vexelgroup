import { NavLink } from 'react-router-dom';
import './NewsComp.scss';

const NewsComp = ({ data }) => {
  return data.map((item) => (
    <section key={item.title} className='newsComp'>
      {/* <img className='newsComp_img' src={item.img} alt='img' /> */}
      <div className='newsComp_img'></div>
      <div className='newsComp_info'>
        <h3 className='newsComp_title'>{item.title}</h3>
        <p className='newsComp_subtitle'>{item.subtitle} </p>
        <NavLink to={item.btnLink} className='newsComp_btn'>
          Подробнее
          <div className='arrow-1'>
            <div></div>
          </div>
        </NavLink>
      </div>
    </section>
  ));
};

export default NewsComp;
