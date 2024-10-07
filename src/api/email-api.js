import { instance } from './api';

export const emailAPI = (fullName, phone, email, id) => {
  return instance
    .post(`send_annual_report_request/`, {
      fullName: fullName,
      phone: phone,
      email: email,
      id: id,
    })
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      console.log('Error: ' + e);
      return [];
    });
};