import PageTitle from '../../../reuse_Components/PageTitle/PageTitle';
import './Report.scss';
import ReportComp from './reuse/ReportComp/ReportComp';
import year from './../../../images/main/title/year.png';
import yearTel from './../../../images/main/title/yearTel.png';
import { useEffect } from 'react';
import { Field, Form } from 'react-final-form';
import {
  emailValidator,
  phoneValidator,
  requiredValidator,
} from '../../../utils/validators';
import { useState } from 'react';

const Report = (props) => {
  const [showForm, setShowForm] = useState(false);
  const [id, setId] = useState('');
  useEffect(() => {
    props.getReports();
  }, []);
  const onSubmit = (v) => {
    setShowForm(false);
    props.emailAPI(v.fio, v.phone, v.email, id);
  };

  return (
    <section className='report'>
      <PageTitle title='Годовой отчет' image={year} imageTel={yearTel} />
      <div className='container'>
        <div className='report_board Uni_padding'>
          {props.reports != null && (
            <ReportComp
              data={props.reports}
              setId={setId}
              setForm={setShowForm}
            />
          )}
        </div>
        {showForm && (
          <div>
            <div
              onClick={() => setShowForm(false)}
              className='report-backdrop'
            ></div>
            <Form
              onSubmit={onSubmit}
              render={({ handleSubmit }) => (
                <form className='report-formBlock' onSubmit={handleSubmit}>
                  <div
                    className='report-formDelete'
                    onClick={() => setShowForm(false)}
                  >
                    &#10006;
                  </div>
                  <div className='report-formTitle'>
                    Для получения данных укажите вашу контактную информацию.
                  </div>
                  <div className='report-formGrid'>
                    <Field name='fio' validate={requiredValidator}>
                      {({ input, meta }) => (
                        <input
                          className={`report-form report-formFIO ${
                            meta.error && meta.touched && 'report-formError'
                          }`}
                          {...input}
                          type='text'
                          placeholder='ФИО *'
                        />
                      )}
                    </Field>
                    <Field name='phone' validate={phoneValidator}>
                      {({ input, meta }) => (
                        <input
                          className={`report-form report-formPhone ${
                            meta.error && meta.touched && 'report-formError'
                          }`}
                          {...input}
                          type='number'
                          placeholder='Телефон *'
                        />
                      )}
                    </Field>
                    <Field name='email' validate={emailValidator}>
                      {({ input, meta }) => (
                        <div className='report-formEmailDiv'>
                          <input
                            className={`report-form report-formEmail ${
                              meta.error && meta.touched && 'report-formError'
                            }`}
                            {...input}
                            type='email'
                            placeholder='E-mail *'
                          />
                          {meta.error && meta.touched && (
                            <div className='report-error'>
                              * Заполните обязательные поля
                            </div>
                          )}
                        </div>
                      )}
                    </Field>
                  </div>
                  <button className='report-formBtn' type='submit'>
                    Скачать
                  </button>
                </form>
              )}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Report;
