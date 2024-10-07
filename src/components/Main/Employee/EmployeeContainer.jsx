import { connect } from 'react-redux';
import { getEmployee } from '../../../redux/employees-reducer';
import Employee from './Employee';

const mapStateToProps = (state) => {
  return {
    employee: state.employees.employee,
  };
};

export default connect(mapStateToProps, { getEmployee })(Employee);
