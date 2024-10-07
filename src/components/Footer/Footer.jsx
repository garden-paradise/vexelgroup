import { NavLink } from 'react-router-dom';
import './Footer.scss';
import logo from './../../images/header/logo.png';
import NavigLinkFooter from './reuse/NavigLinkFooter/NavigLinkFooter';

const Footer = () => {
  return (
    <header className='footer'>
      <div className='container'>
        <div className='footer_section'>
          <NavLink to='/'>
            <img className='footer_logo' src={logo} alt='img' />
          </NavLink>
          <NavigLinkFooter
            data={[
              { link: '/about', name: 'О нас' },
              {
                link: '/press',
                name: 'Пресс-центр',
              },
              { link: '/businesses', name: 'Деятельность' },
              { link: '/employees', name: 'Руководство' },
              { link: '/report', name: 'Годовой отчет' },
              { link: '/contacts', name: 'Контакты' },
            ]}
          />
        </div>
        <div className='footer_argo'>
          Сайт создан компанией
          <b>
            <a
              className='footer_argo_a'
              target='_blank'
              href='https://argo-soft-works.ru/'
            >
              ArgoSoftWorks
            </a>
          </b>
        </div>
        <div className='footer_allrights'>© 2024 Все права защищены </div>
      </div>
    </header>
  );
};
export default Footer;
