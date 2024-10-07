import { employeesAPI } from '../api/info-api';

const SET_EMPLOYEES = 'SET_EMPLOYEES';
const SET_EMPLOYEE = 'SET_EMPLOYEE';

const initialState = {
  employees: null,
  employee: null,
};

const employeesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EMPLOYEES: {
      return {
        ...state,
        employees: action.employees,
      };
    }
    case SET_EMPLOYEE: {
      return {
        ...state,
        employee: action.employee,
      };
    }
    default:
      return state;
  }
};

export const actions = {
  setEmployees: (employees) => ({
    type: SET_EMPLOYEES,
    employees,
  }),
  setEmployee: (employee) => ({
    type: SET_EMPLOYEE,
    employee,
  }),
};

export const getEmployees = () => async (dispatch) => {
  const data = await employeesAPI.getEmployees();
  dispatch(actions.setEmployees(data));
};

export const getEmployee = (employeeId) => async (dispatch) => {
  const data = await employeesAPI.getEmployee(employeeId);
  dispatch(actions.setEmployee(data));
};

export default employeesReducer;
