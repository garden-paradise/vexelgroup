import PageTitle from '../../../reuse_Components/PageTitle/PageTitle';
import './About.scss';
import AboutComp from './reuse/AboutComp/AboutComp';
import about from './../../../images/main/title/about.png';
import aboutTel from './../../../images/main/title/aboutTel.png';
import { useEffect } from 'react';

const About = (props) => {
  useEffect(() => {
    props.getEmployees();
  }, []);

  return (
    <section className='about'>
      <PageTitle title='Руководство' image={about} imageTel={aboutTel} />
      <div className='container'>
        <div className='Uni_padding'>
          <div className='about_board'>
            {props.employees != null && <AboutComp data={props.employees} />}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
