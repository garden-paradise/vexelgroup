import './AboutUs.scss';
import press from '../../../images/main/title/press.png';
import pressTel from '../../../images/main/title/pressTel.png';
import PageTitle from '../../../reuse_Components/PageTitle/PageTitle';
import aboutUs from '../../../images/main/title/aboutUs.png';
import aboutUsTel from '../../../images/main/title/aboutUsTel.png';
import vexelLogo from '../../../images/main/about/vexelLogo.png';

import { AspectRatio } from 'react-aspect-ratio';

const AboutUs = () => {
  return (
    <section className='aboutUs'>
      <PageTitle title='О нас' image={aboutUs} imageTel={aboutUsTel} />
      <div className='container'>
        <div className='aboutUs-sec Uni_padding'>
          <div className='FontSizeSubtitle aboutUs-info'>
            <div className='FontSizeTitle'>О нас</div>
            <div className='aboutUs-subtitle'>
              Группа компаний ООО «Вексель групп» работает с 2021 года на рынке
              табачной продукции. Председатель правления – Шефлер Алексей
              Юрьевич.
            </div>
            <div className='aboutUs-subtitle'>
              Главные принципы нашей работы – высокий профессионализм и
              комплексный подход. Мы стремимся высоко зарекомендовать себя в
              табачной отрасли и сделать свою работу максимально эффективной.
            </div>
            <div className='aboutUs-subtitle'>
              Мы предлагаем потребителям широкий выбор альтернатив обычным
              сигаретам с меньшим вредом для здоровья.
            </div>
            <div className='aboutUs-subtitle'>
              ООО «Вексель групп» выстраивает долгосрочные взаимовыгодные
              отношения с компаниями в сфере розничной и оптовой торговли, а
              также в сфере франчайзинга. Под управлением ООО «Вексель групп»
              находится бренд одноразовых электронных сигарет – «H5»,
              осуществляющий оптовые поставки дистрибьюторам по всей России.
            </div>
            <div className='aboutUs-subtitle'>
              Также в структуру группы компаний входит сеть магазинов
              электронных сигарет «Smoky Island», которая включает в себя четыре
              розничных магазина в Москве и ориентирована на дальнейшую продажу
              своих франшиз.
            </div>
          </div>
          <img className='aboutUs-img' src={vexelLogo} alt='img' />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
