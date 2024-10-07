import './Employee.scss';
import { useEffect } from 'react';
import about from '../../../images/main/title/about.png';
import aboutTel from '../../../images/main/title/aboutTel.png';
import PageTitle from './../../../reuse_Components/PageTitle/PageTitle';
import { AspectRatio } from 'react-aspect-ratio';
import ParseTexts from '../../../reuse_Components/ParseTexts/ParseTexts';

const Employee = (props) => {
  useEffect(() => {
    let employeeId = props.match.params.employeeId;
    props.getEmployee(employeeId);
  }, []);

  return (
    <section className='employee'>
      <PageTitle title='Руководство' image={about} imageTel={aboutTel} />
      <div className='container'>
        {props.employee != null && (
          <div className='employee_sec Uni_padding'>
            <AspectRatio className='AspectRatio'>
              {props.employee.employee.photo != undefined && (
                <img
                  className='employee_img'
                  src={`https://storage.googleapis.com/vexel-group-media/${props.employee.employee.photo.path}`}
                />
              )}
            </AspectRatio>
            <div className='employee_info'>
              <div className='FontSizeTitle employee_info-name'>
                {props.employee.employee.fullName}
              </div>
              <div className='employee_info-subname'>
                {props.employee.employee.position}
              </div>
              <div className='FontSizeSubtitle employee_info-text'>
                {console.log(props)}
                <ParseTexts fullText={props.employee.employee.about} />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Employee;
