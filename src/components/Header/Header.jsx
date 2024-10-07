import { NavLink } from 'react-router-dom';
import NavigLink from './reuse/NavigLink/NavigLink';
import './Header.scss';
import logoWeb from './../../images/header/logo.png';
import logoTel from './../../images/header/logoTel.svg';
import { useEffect, useState } from 'react';

const Header = () => {
  const [logo, setLogoTel] = useState(logoWeb);
  const [headerGray, setHeaderGray] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 480) {
      setLogoTel(logoTel);
    }
    if (window.location.pathname === '/') {
      setLogoTel(logoWeb);
      setHeaderGray(true);
    }
  }, [window.innerWidth]);

  return (
    <header className={`header ${headerGray && 'header_gray'}`}>
      <div className='header_section'>
        <NavLink to='/'>
          <img className='header_logo' src={logo} alt='img' />
        </NavLink>

        <NavigLink
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
          // tel='+7(495)532-95-22'
        />

        {/* <a className='header_tel' href='tel: 84955329522'>
          +7 (495) 532-95-22
        </a> */}
      </div>
    </header>
  );
};
export default Header;
