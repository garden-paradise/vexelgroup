import { connect } from 'react-redux';
import { getBusinesses } from '../../../redux/businesses-reducer';
import { getPartners } from '../../../redux/partners-reducer';
import Business from './Business';

const mapStateToProps = (state) => {
  return {
    businesses: state.businesses.businesses,
    partners: state.partners.partners,
  };
};

export default connect(mapStateToProps, {
  getBusinesses,
  getPartners,
})(Business);
