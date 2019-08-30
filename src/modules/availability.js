import axios from 'axios';
import to from 'await-to-js';
import { createConstants } from '../utils/constant';
import { createAction, createErrorAction } from '../utils/action';
// Constants
export const NAMESPACE = 'sauce-labs';
export const AVAILABILITY_TYPE = createConstants(NAMESPACE, 'availability')(
  'FETCH',
  'SUCCESS',
  'FAIL',
);

// Selectors
export const isAvailabilityLoadingSelector = state => state.availability.loading;
export const AvailabilitySelector = state => state.availability.items;

const initialState = {
  items: {},
  loading: false,
  error: null
};
// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case AVAILABILITY_TYPE.FETCH: 
      return {
        ...state,
        loading: true
      }
    case AVAILABILITY_TYPE.SUCCESS:
      const availability = {}

      action.payload.availability.forEach(item => availability[item] = true);

      return {
        ...state,
        loading: false,
        items: availability
      }
    case AVAILABILITY_TYPE.FAIL: 
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }

    default: return state;
  }
}
// Actions
export const fetchAvailabilityBegin = createAction(AVAILABILITY_TYPE.FETCH);
export const fetchAvailabilitySuccess = createAction(AVAILABILITY_TYPE.SUCCESS);
export const fetchAvailabilityFail = createErrorAction(AVAILABILITY_TYPE.FAIL);

export const checkAvailability = () => async dispatch => {
  dispatch(fetchAvailabilityBegin());
  let errorUs, errorEu, usAvailability, euAvailability;

  [errorUs, usAvailability] = await to(axios.get(`http://localhost:3004/us-availability`));
  [errorEu, euAvailability] = await to(axios.get(`http://localhost:3004/eu-availability`));

  const availability = [
    ...(usAvailability ? [...usAvailability.data] : []),
    ...(euAvailability ? [...euAvailability.data] : []),
  ]

  if (errorUs || errorEu) {
    console.error('One of data center request failed');
  }
  
  if (errorUs && errorEu) {
    console.error('Both of data center request failed');
    dispatch(fetchAvailabilityFail({error: { errorUs, errorEu }}));
  } else {
    dispatch(fetchAvailabilitySuccess({ availability }))
  }
};

