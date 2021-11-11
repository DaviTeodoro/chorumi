import { createContext, useReducer, useContext } from 'react';

const StateContext = createContext();
const DispatchContext = createContext();

export { ViewportProvider, useViewport, useViewportState, useViewportDispatch };

function ViewportProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

function useViewportState() {
  const state = useContext(StateContext);
  if (!state) {
    throw new Error('ViewportProvider not found');
  }
  return state;
}

function useViewportDispatch() {
  const dispatch = useContext(DispatchContext);
  if (!dispatch) {
    throw new Error('ViewportProvider not found');
  }
  return dispatch;
}

function useViewport() {
  return [useViewportState(), useViewportDispatch()];
}

const INITIAL_STATE = {
  viewport: '',
  url: '',
};

function reducer(state, [type, payload]) {
  console.log(type, payload);
  switch (type) {
    case 'SET_VIEWPORT':
      return {
        ...state,
        viewport: payload,
      };
    case 'SET_URL':
      return {
        ...state,
        url: payload,
      };
    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
}
