import { instance } from './api';

export const employeesAPI = {
  getEmployees() {
    return instance
      .get(`get_all_employees/`)
      .then((response) => {
        return response.data;
      })
      .catch((e) => {
        console.log('Error: ' + e);
        return [];
      });
  },
  getEmployee(employeeId) {
    return instance
      .post(`get_employee/`, {
        id: employeeId,
      })
      .then((response) => {
        return response.data;
      })
      .catch((e) => {
        console.log('Error: ' + e);
        return [];
      });
  },
};

export const ArticlesAPI = {
  getArticles() {
    return instance
      .get(`get_all_articles`)
      .then((response) => {
        return response.data;
      })
      .catch((e) => {
        console.log('Error: ' + e);
        return [];
      });
  },
  getArticle(articleId) {
    return instance
      .post(`get_article/`, {
        id: articleId,
      })
      .then((response) => {
        return response.data;
      })
      .catch((e) => {
        console.log('Error: ' + e);
        return [];
      });
  },
};

export const ReportsAPI = {
  getReports() {
    return instance
      .get(`get_all_annual_reports`)
      .then((response) => {
        return response.data;
      })
      .catch((e) => {
        console.log('Error: ' + e);
        return [];
      });
  },
  getReport(reportId) {
    return instance
      .post(`get_annual_report/`, {
        id: reportId,
      })
      .then((response) => {
        return response.data;
      })
      .catch((e) => {
        console.log('Error: ' + e);
        return [];
      });
  },
};

export const BusinessesAPI = {
  getBusinesses() {
    return instance
      .get(`get_all_businesses`)
      .then((response) => {
        return response.data;
      })
      .catch((e) => {
        console.log('Error: ' + e);
        return [];
      });
  },
  getBusiness(businessId) {
    return instance
      .post(`get_business/`, {
        id: businessId,
      })
      .then((response) => {
        return response.data;
      })
      .catch((e) => {
        console.log('Error: ' + e);
        return [];
      });
  },
  getBusinessesCategory(category) {
    return instance
      .post(`get_businesses_by_category`, {
        category: category,
      })
      .then((response) => {
        return response.data;
      })
      .catch((e) => {
        console.log('Error: ' + e);
        return [];
      });
  },
};

export const AdvertisingAPI = {
  getAdvertising() {
    return instance
      .get(`get_all_advertising`)
      .then((response) => {
        return response.data;
      })
      .catch((e) => {
        console.log('Error: ' + e);
        return [];
      });
  },
};

export const PartnersAPI = {
  getPartners() {
    return instance
      .get(`get_all_partners`)
      .then((response) => {
        return response.data;
      })
      .catch((e) => {
        console.log('Error: ' + e);
        return [];
      });
  },
};
