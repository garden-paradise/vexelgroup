import { useEffect, useState } from 'react';
import { AspectRatio } from 'react-aspect-ratio';
import s from '../PageTitle/PageTitle.module.css';

const PageTitle = ({ image, title, imageTel }) => {
  const [img, setImg] = useState(image);
  useEffect(() => {
    if (window.innerWidth < 480) {
      setImg(imageTel);
    }
  }, [window.innerWidth]);

  return (
    <section className={s.press_block}>
      <AspectRatio className={s.press_ratio}>
        {/* <img className={s.press_block_img} src={img} alt='img' /> */}
        <div className={s.press_block_img}></div>
      </AspectRatio>
      <div className={s.press_block_title}>{title}</div>
    </section>
  );
};

export default PageTitle;
