import { ReportsAPI } from '../api/info-api';

const SET_REPORTS = 'SET_REPORTS';
const SET_REPORT = 'SET_REPORT';

const initialState = {
  reports: null,
  report: null,
};

const reportsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REPORTS: {
      return {
        ...state,
        reports: action.reports,
      };
    }
    case SET_REPORT: {
      return {
        ...state,
        report: action.report,
      };
    }
    default:
      return state;
  }
};

export const actions = {
  setReports: (reports) => ({
    type: SET_REPORTS,
    reports,
  }),
  setReport: (report) => ({
    type: SET_REPORT,
    report,
  }),
};

export const getReports = () => async (dispatch) => {
  const data = await ReportsAPI.getReports();
  dispatch(actions.setReports(data));
};

export const getReport = (reportId) => async (dispatch) => {
  const data = await ReportsAPI.getReport(reportId);
  dispatch(actions.setReport(data));
};

export default reportsReducer;
