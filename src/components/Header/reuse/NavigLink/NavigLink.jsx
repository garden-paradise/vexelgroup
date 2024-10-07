import { useRef } from 'react';
import './NavigLink.scss';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const NavigLink = ({ data, tel }) => {
  const [backdrop, setBackdrop] = useState(false);
  const menuCheckboxRef = useRef(null);

  let hideMenu = () => {
    menuCheckboxRef.current.checked = false;
    setBackdrop(false);
  };

  return (
    <nav className='NavigLink'>
      <input
        type='checkbox'
        id='hmt'
        className='hidden_menu_ticker'
        ref={menuCheckboxRef}
      ></input>
      <label
        onClick={() => setBackdrop(!backdrop)}
        className='btn_menu'
        htmlFor='hmt'
      >
        <span className='first'></span>
        <span className='second'></span>
      </label>

      {backdrop && (
        <div onClick={hideMenu} className='NavigLink_backdrop'></div>
      )}

      <div className='NavigLink_block hidden_menu'>
        <div className='NavigLink_divColor'></div>
        <ul className='NavigLink_ul'>
          {data.map((item, i) => (
            <NavLink
              key={i}
              to={item.link}
              onClick={hideMenu}
              activeClassName='NavigLink_active'
              className='NavigLink_link'
            >
              <li className='NavigLink_li'>{item.name}</li>
            </NavLink>
          ))}
        </ul>
        {/* <a className='NavigLink_phone' href={`tel:${tel}`}>
          {tel}
        </a> */}
      </div>
    </nav>
  );
};

export default NavigLink;
