import { userAPI } from '../api/user-api';

const SET_USER_PROFILE = 'SET_USER_PROFILE';

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_PROFILE: {
      return {
        ...state,
        profiles: action.profiles,
      };
    }
    default:
      return state;
  }
};

export const actions = {
  setUserProfile: (profiles) => ({
    type: SET_USER_PROFILE,
    profiles,
  }),
};

export const getUserProfile = (currentPage) => async (dispatch) => {
  let response = await userAPI.getUsers(currentPage);
  dispatch(actions.setUserProfile(response.data.items));
};

export default usersReducer;
