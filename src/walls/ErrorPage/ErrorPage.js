import React from 'react';
import { useHistory } from 'react-router-dom';


const ErrorPage = props => {
  const history = useHistory();


  return (
    <div>Error Code : {props.location ? props.location.state ? props.location.state.code : 404 : 404}
      <button onClick={() => history.push("/")}>Home</button>
    </div>
    
  )
}


export default ErrorPage;