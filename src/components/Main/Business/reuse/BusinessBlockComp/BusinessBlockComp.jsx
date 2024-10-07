import { AspectRatio } from 'react-aspect-ratio';
import { NavLink } from 'react-router-dom';
import ParseTextsMenu from '../../../../../reuse_Components/ParseTextsMenu/ParseTextsMenu';
import './BusinessBlockComp.scss';

const BusinessBlockComp = ({ data }) => {
  return data.map((item) => (
    <section key={item._id} className='businessBlockComp'>
      <AspectRatio className='businessBlockComp-AspectRatio'>
        {item.photo !== undefined && (
          <img
            src={`https://storage.googleapis.com/vexel-group-media/${item.photo.path}`}
          />
        )}
      </AspectRatio>
      <div className='businessBlockComp-info'>
        <NavLink
          to={`/businesses/${item.category}/${item._id}`}
          className=' businessBlockComp-link'
        >
          <p className='FontSizeTitle businessBlockComp-title'>{item.name} </p>
        </NavLink>

        <p className='FontSizeSubtitle businessBlockComp-subtitle'>
          <ParseTextsMenu fullText={item.descripton} />
        </p>
        <NavLink
          to={`/businesses/${item.category}/${item._id}`}
          className=' businessBlockComp-btn'
        >
          Подробнее
          <div className='arrow-1'>
            <div></div>
          </div>
        </NavLink>
      </div>
    </section>
  ));
};

export default BusinessBlockComp;
