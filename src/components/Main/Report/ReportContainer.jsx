import { connect } from 'react-redux';
import { emailAPI } from '../../../api/email-api';
import { getReports } from '../../../redux/reports-reducer';
import Report from './Report';

const mapStateToProps = (state) => {
  return {
    reports: state.reports.reports,
  };
};

export default connect(mapStateToProps, { getReports, emailAPI })(Report);
