import React, {useReducer}from 'react';
import { StateContext, initialState, reducer, asyncMiddleware  } from '../../store/store';
import Layout from '../Layout/Layout';


const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{state, dispatch : asyncMiddleware(dispatch)}}>
      <Layout></Layout>
    </StateContext.Provider>
  )

}

export default App;