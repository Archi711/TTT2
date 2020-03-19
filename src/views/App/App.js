import React, { useReducer }from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { StateContext, initialState, reducer, asyncMiddleware } from '../../store/store';
import Landing from '../../walls/Landing/Landing';
import Game from '../Game/Game';
import ErrorPage from '../../walls/ErrorPage/ErrorPage';
import CreateForm from '../../walls/CreateForm/CreateForm';
import JoinForm from '../../walls/JoinForm/JoinForm';
import Home from '../Home/Home';

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <StateContext.Provider value={{state, dispatch : asyncMiddleware(dispatch)}}>
      <ThemeProvider theme={state.theme}>
        <BrowserRouter>
          <Switch>
            <Route path="/game/:room" component={Game}/>
            <Home>
              <Route component={
                ({match}) => 
                  <>
                    <Route path="/error" component={ErrorPage} /> 
                    <Route exact path='/' component={Landing}/>
                    <Route path="/create" component={CreateForm}/>
                    <Route path="/join" component={JoinForm}/>
                  </>
              }>
              </Route>
            </Home>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </StateContext.Provider>
  )

}

export default App;