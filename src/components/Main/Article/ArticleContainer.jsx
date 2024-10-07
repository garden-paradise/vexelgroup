import { connect } from 'react-redux';
import { getArticle } from '../../../redux/articles-reducer';
import Article from './Article';

const mapStateToProps = (state) => {
  return {
    article: state.articles.article,
  };
};

export default connect(mapStateToProps, { getArticle })(Article);
