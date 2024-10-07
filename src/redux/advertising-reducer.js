import { AdvertisingAPI } from '../api/info-api';

const SET_ADVERTISING = 'SET_ADVERTISING';

const initialState = {
  advertising: null,
};

const advertisingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ADVERTISING: {
      return {
        ...state,
        advertising: action.advertising,
      };
    }
    default:
      return state;
  }
};

export const actions = {
  setAdvertising: (advertising) => ({
    type: SET_ADVERTISING,
    advertising,
  }),
};

export const getAdvertising = () => async (dispatch) => {
  const data = await AdvertisingAPI.getAdvertising();
  dispatch(actions.setAdvertising(data));
};

export default advertisingReducer;
