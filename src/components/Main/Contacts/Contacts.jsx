import PageTitle from '../../../reuse_Components/PageTitle/PageTitle';
import './Contacts.scss';
import contacts from './../../../images/main/title/contacts.png';
import contactsTel from './../../../images/main/title/contactsTel.png';

const Contacts = () => {
  return (
    <section className='contacts'>
      <PageTitle title='Контакты' image={contacts} imageTel={contactsTel} />
      <div className='container'>
        <div className='Uni_padding'>
          {/* <div className='contacts-title'>Контактная информация</div> */}
          <div className='contacts-info'>
            <iframe
              className='contacts-map'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2242.3596385148644!2d37.58836791591579!3d55.804356580567166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b549e27f86eef1%3A0x6eb7fa8c20eea136!2z0KHQsNCy0LXQu9C-0LLRgdC60LjQuSDQodC40YLQuA!5e0!3m2!1sru!2sru!4v1644392806559!5m2!1sru!2sru'
              loading='lazy'
            ></iframe>
            <div className='contacts-infoBlock'>
              <div className='contacts-infoSubtitle'>
                <b>Адрес: </b>
                <span>Новодмитровская, д.2, к.2, оф.0404 Москва, 127015</span>
              </div>
              <div className='contacts-infoSubtitle'>
                <b>Тел.: </b>
                <a className='contacts-infoSubtitleTel' href='tel: 84996615077'>
                  +7 (499) 551-50-77
                </a>
              </div>
              <div className='contacts-infoSubtitle'>
                <b>E-mail: </b> <span>info@vexelgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
