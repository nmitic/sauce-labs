import axios from 'axios';
import to from 'await-to-js';
import { createConstants } from '../utils/constant';
import { createAction, createErrorAction } from '../utils/action';
// Constants
export const NAMESPACE = 'sauce-labs';
export const DEVICE_TYPE = createConstants(NAMESPACE, 'devices')(
  'FETCH',
  'SUCCESS',
  'FAIL',
);

// Selectors
export const isDeviceLoadingSelector = state => state.devices.loading;
export const devicesSelector = state => state.devices.items;

const initialState = {
  items: [],
  loading: false,
  error: null
};
// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case DEVICE_TYPE.FETCH: 
      return {
        ...state,
        loading: true
      }
    case DEVICE_TYPE.SUCCESS: 
      return {
        ...state,
        loading: false,
        items: action.payload.devices
      }
    case DEVICE_TYPE.FAIL: 
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }

    default: return state;
  }
}
// Utils
const buildParams = params => {
  const paramNames = Object.keys(params);

  return `?${paramNames.map(name => `${name}=${params[name]}`).join('&')}`;
}
// Actions
export const fetchDevicesBegin = createAction(DEVICE_TYPE.FETCH);
export const fetchDevicesSuccess = createAction(DEVICE_TYPE.SUCCESS);
export const fetchDevicesFail = createErrorAction(DEVICE_TYPE.FAIL);

export const loadDevices = (params = {}) => async dispatch => {
  dispatch(fetchDevicesBegin());
  let errorUs, errorEu, usDevices, euDevices;

  [errorUs, usDevices] = await to(axios.get(`http://localhost:3004/us-devices${buildParams(params)}`));
  [errorEu, euDevices] = await to(axios.get(`http://localhost:3004/eu-devices${buildParams(params)}`));

  const devices = [
    ...(usDevices ? [...usDevices.data] : []),
    ...(euDevices ? [...euDevices.data] : []),
  ]

  if (errorUs || errorEu) {
    console.error('One of data center request failed');
  }
  
  if (errorUs && errorEu) {
    console.error('Both of data center request failed');
    dispatch(fetchDevicesFail({error: { errorUs, errorEu }}));
  } else {
    dispatch(fetchDevicesSuccess({ devices }))
  }
};

