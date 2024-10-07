import { AspectRatio } from 'react-aspect-ratio';
import { NavLink } from 'react-router-dom';
import ParseTexts from '../../../../../reuse_Components/ParseTexts/ParseTexts';
import ParseTextsMenu from '../../../../../reuse_Components/ParseTextsMenu/ParseTextsMenu';
import parseText from '../../../../../utils/parseText';
import './NewsMiniComp.scss';

const NewsMiniComp = ({ date }) => {
  return date.map((item) => (
    <section key={item} className='newsMiniComp'>
      <AspectRatio ratio='165/135' style={{ minWidth: '165px' }}>
        {item.photo != undefined && (
          <img
            className='newsMiniComp_img'
            src={`https://storage.googleapis.com/vexel-group-media/${item.photo.path}`}
            alt='img'
          />
        )}
      </AspectRatio>
      <div className='newsMiniComp_info'>
        <div className='newsMiniComp_subtitle'>
          <ParseTextsMenu fullText={item.fullText} />
        </div>
        <NavLink to={`press/${item._id}`} className='newsMiniComp_btn'>
          Подробнее
          <div className='arrow-2'>
            <div></div>
          </div>
        </NavLink>
      </div>
    </section>
  ));
};

export default NewsMiniComp;
