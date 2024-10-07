import { connect } from 'react-redux';
import { getAdvertising } from '../../../redux/advertising-reducer';
import { getArticles } from '../../../redux/articles-reducer';
import { getPartners } from '../../../redux/partners-reducer';
import Home from './Home';

const mapStateToProps = (state) => {
  return {
    articles: state.articles.articles,
    advertising: state.advertising.advertising,
    partners: state.partners.partners,
  };
};

export default connect(mapStateToProps, {
  getArticles,
  getAdvertising,
  getPartners,
})(Home);
