import { ArticlesAPI } from '../api/info-api';

const SET_ARTICLES = 'SET_ARTICLES';
const SET_ARTICLE = 'SET_ARTICLE';

const initialState = {
  articles: null,
  article: null,
};

const articlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ARTICLES: {
      return {
        ...state,
        articles: action.articles,
      };
    }
    case SET_ARTICLE: {
      return {
        ...state,
        article: action.article,
      };
    }
    default:
      return state;
  }
};

export const actions = {
  setArticles: (articles) => ({
    type: SET_ARTICLES,
    articles,
  }),
  setArticle: (article) => ({
    type: SET_ARTICLE,
    article,
  }),
};

export const getArticles = () => async (dispatch) => {
  const data = await ArticlesAPI.getArticles();
  dispatch(actions.setArticles(data));
};

export const getArticle = (articleId) => async (dispatch) => {
  const data = await ArticlesAPI.getArticle(articleId);
  dispatch(actions.setArticle(data));
};

export default articlesReducer;
