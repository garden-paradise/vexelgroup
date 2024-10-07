import { AspectRatio } from 'react-aspect-ratio';
import './ReportComp.scss';

const ReportComp = ({ data, setForm, setId }) => {
  return data.map((item) => (
    <section key={item._id} className='reportComp'>
      <AspectRatio className='reportComp_AspectRatio'>
        <img
          src={`https://storage.googleapis.com/vexel-group-media/${item.photo.path}`}
        />
      </AspectRatio>
      <div className='reportComp_info'>
        <div className='reportComp_title'>{item.title}</div>
        <button
          onClick={() => {
            setForm(true);
            setId(item._id);
          }}
          className='reportComp_btn'
        >
          Скачать
        </button>
      </div>
    </section>
  ));
};

export default ReportComp;
