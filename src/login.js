import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import logo from './logo.svg';

import Form from 'react-jsonschema-form';

const schema = {
    title: "Login",
    type: "object",
    required: ["user","pwd"],
    properties: {
      user: {type: "string"},
      pwd: {type: "string"},
      done: {type: "boolean", title: "Done?", default: false}
    }
};

const uiSchema = {
    user: {
      'ui:autofocus': true,
      'ui:placeholder': 'Ingrese su usuario',
      'ui:title': 'Usuario'
    },
    pwd: {
       'ui:autofocus': true,
       'ui:placeholder': 'Ingrese su contraseña',
       'ui:title': 'Password' 
    }
  }

const log = (type) => console.log.bind(console, type);
/*
function Login(){
    
    return(
        <div>
            <Form schema={schema}
            onChange={log("changed")}
            onSubmit={log("submitted")}
            onError={log("errors")}
            uiSchema={uiSchema}
            noHtml5Validate
            onSubmit={console.log}
            showErrorList={false} />
        </div>
        );    
}
*/

// Remove the `uiSchema` prop to see the difference
export class Login extends Component {
    render() {
      return (
        <div>
          <Form schema={schema} uiSchema={uiSchema} />
        </div>
      )
    }
}
  
const rootElement = document.getElementById('root')
ReactDOM.render(<Login />, rootElement)
  

export default Login;