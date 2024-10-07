import { connect } from 'react-redux';
import { getArticles } from '../../../redux/articles-reducer';
import Press from './Press';

const mapStateToProps = (state) => {
  return {
    articles: state.articles.articles,
  };
};

export default connect(mapStateToProps, { getArticles })(Press);
