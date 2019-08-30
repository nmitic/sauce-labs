import { createConstants } from '../utils/constant';
import { createAction } from '../utils/action';
// Constants
export const NAMESPACE = 'sauce-labs';
export const SIDEBAR_TYPE = createConstants(NAMESPACE, 'sidebar')('GET');

// Selectors
export const sidebarDataSelector = state => state.sidebar.data;

// Reducer
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case SIDEBAR_TYPE.GET: 
      return {
        ...state,
        data: action.payload
      }
    default: return state;
  }
}
// Actions
export const setSidebarData = createAction(SIDEBAR_TYPE.GET);

