import { BusinessesAPI } from '../api/info-api';

const SET_BUSINESSES = 'SET_BUSINESSES';
const SET_BUSINESS = 'SET_BUSINESS';
const SET_BUSINESSES_CATEGORY = 'SET_BUSINESSES_CATEGORY';

const initialState = {
  businesses: null,
  business: null,
  businessesCategory: null,
};

const businessesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BUSINESSES: {
      return {
        ...state,
        businesses: action.businesses,
      };
    }
    case SET_BUSINESS: {
      return {
        ...state,
        business: action.business,
      };
    }
    case SET_BUSINESSES_CATEGORY: {
      return {
        ...state,
        businessesCategory: action.businessesCategory,
      };
    }
    default:
      return state;
  }
};

export const actions = {
  setBusinesses: (businesses) => ({
    type: SET_BUSINESSES,
    businesses,
  }),
  setBusiness: (business) => ({
    type: SET_BUSINESS,
    business,
  }),
  setBusinessesCategory: (businessesCategory) => ({
    type: SET_BUSINESSES_CATEGORY,
    businessesCategory,
  }),
};

export const getBusinesses = () => async (dispatch) => {
  const data = await BusinessesAPI.getBusinesses();
  dispatch(actions.setBusinesses(data));
};

export const getBusiness = (businessId) => async (dispatch) => {
  const data = await BusinessesAPI.getBusiness(businessId);
  dispatch(actions.setBusiness(data));
};

export const getBusinessesCategory = (category) => async (dispatch) => {
  const data = await BusinessesAPI.getBusinessesCategory(category);
  dispatch(actions.setBusinessesCategory(data));
};

export default businessesReducer;
