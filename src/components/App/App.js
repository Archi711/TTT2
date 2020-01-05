import React, {useReducer}from 'react';
import { ThemeProvider } from 'styled-components';
import { StateContext, initialState, reducer, asyncMiddleware  } from '../../store/store';
import Layout from '../Layout/Layout';


const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{state, dispatch : asyncMiddleware(dispatch)}}>
      <ThemeProvider theme={state.theme}>
        <Layout></Layout>
      </ThemeProvider>
    </StateContext.Provider>
  )

}

export default App;