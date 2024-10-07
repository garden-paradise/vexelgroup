import { connect } from 'react-redux';
import {
  getBusiness,
  getBusinessesCategory,
} from '../../../redux/businesses-reducer';
import Busines from './Busines';

const mapStateToProps = (state) => {
  return {
    business: state.businesses.business,
    businessesCategory: state.businesses.businessesCategory,
  };
};

export default connect(mapStateToProps, { getBusiness, getBusinessesCategory })(
  Busines
);
