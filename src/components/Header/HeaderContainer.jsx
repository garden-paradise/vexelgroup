import { connect } from 'react-redux';
import Header from './Header';

const mapStateToProps = (state) => {
  return {
    selectedItems: state.product.selectedItems,
  };
};

export default connect(mapStateToProps, { undefined })(Header);
