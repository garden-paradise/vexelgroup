import './ParseTextP.scss';

const ParseTextP = ({ text }) => {
  return (
    <section>
      {text.split('\\n').map((item, i) => (
        <div key={i} className='parseTextP'>{item}</div>
      ))}
    </section>
  );
};

export default ParseTextP;
