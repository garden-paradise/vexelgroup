import './ParseTexts.scss';

const ParseTexts = ({ fullText }) => {
  return fullText.map((item) => (
    <section key={item._id} className='parseTexts'>
      {item.category === 'regular' && (
        <div className='FontSizeSubtitle parseTexts-regular'>{item.value}</div>
      )}
      {item.category === 'marker' && (
        <ul>
          <li className='FontSizeSubtitle parseTexts-marker'> {item.value}</li>
        </ul>
      )}
      {item.category === 'title' && (
        <div className='FontSizeTitle parseTexts-title'>{item.value}</div>
      )}
    </section>
  ));
};

export default ParseTexts;
