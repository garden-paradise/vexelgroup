import { connect } from 'react-redux';
import { getEmployees } from '../../../redux/employees-reducer';
import About from './About';

const mapStateToProps = (state) => {
  return {
    employees: state.employees.employees,
  };
};

export default connect(mapStateToProps, { getEmployees })(About);
