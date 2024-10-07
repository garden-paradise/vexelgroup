import { AspectRatio } from 'react-aspect-ratio';
import { NavLink } from 'react-router-dom';
import ParseTextsMenu from '../../../../../reuse_Components/ParseTextsMenu/ParseTextsMenu';
import './NewsMiddleComp.scss';

const NewsMiddleComp = ({ date }) => {
  return date.map((item) => (
    <section key={item._id} className='newsMiddleComp'>
      <NavLink to={`/press/${item._id}`} className='NavLink'>
        <AspectRatio style={{ maxWidth: '560px ' }}>
          <img
            className='newsMiddleComp_img'
            src={`https://storage.googleapis.com/vexel-group-media/${item.photo.path}`}
          />
        </AspectRatio>
        <div className='FontSizeTitle newsMiddleComp_title'>{item.title}</div>
      </NavLink>
      <div className='FontSizeSubtitle newsMiddleComp_subtitle'>
        <ParseTextsMenu fullText={item.fullText} />
      </div>
    </section>
  ));
};

export default NewsMiddleComp;
