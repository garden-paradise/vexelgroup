import './AboutComp.scss';
import { AspectRatio } from 'react-aspect-ratio';
import { NavLink } from 'react-router-dom';

const AboutComp = ({ data }) => {
  return data.map((item) => (
    <NavLink
      key={item._id}
      className='aboutCompLink'
      to={`/employees/${item._id}`}
    >
      <section className='aboutComp'>
        <AspectRatio ratio='350/560' className='AspectRatio'>
          <img
            className='aboutComp_img'
            src={`https://storage.googleapis.com/vexel-group-media/${item.photo.path}`}
          />
        </AspectRatio>
        <div className='aboutComp_info'>
          <p className='FontSizeTitle aboutComp_title'>{item.fullName}</p>
          <p className='aboutComp_subtitle'>{item.position}</p>
        </div>
      </section>
    </NavLink>
  ));
};

export default AboutComp;
