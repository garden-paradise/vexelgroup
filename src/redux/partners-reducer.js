import { PartnersAPI } from '../api/info-api';

const SET_PARTNERS = 'SET_PARTNERS';

const initialState = {
  partners: null,
};

const partnersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PARTNERS: {
      return {
        ...state,
        partners: action.partners,
      };
    }
    default:
      return state;
  }
};

export const actions = {
  setPartners: (partners) => ({
    type: SET_PARTNERS,
    partners,
  }),
};

export const getPartners = () => async (dispatch) => {
  const data = await PartnersAPI.getPartners();
  dispatch(actions.setPartners(data));
};

export default partnersReducer;
