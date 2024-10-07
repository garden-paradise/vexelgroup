import './ParseTextsMenu.scss';

const ParseTextsMenu = ({ fullText }) => {
  return fullText.map((item) => (
    <section key={item._id}>
      {console.log(fullText)}
      {item.value}
    </section>
  ));
};

export default ParseTextsMenu;
