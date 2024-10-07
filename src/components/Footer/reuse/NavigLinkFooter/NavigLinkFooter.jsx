import './NavigLinkFooter.scss';
import { NavLink } from 'react-router-dom';

const NavigLinkFooter = ({ data }) => {
  return (
    <nav className='NavigLinkFooter'>
      <ul className='NavigLinkFooter_ul'>
        {data.map((item) => (
          <li key={item.name} className='NavigLinkFooter_li'>
            <NavLink to={item.link} className='NavigLinkFooter_link'>
              <div>{item.name}</div>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigLinkFooter;
