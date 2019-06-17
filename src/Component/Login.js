import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Router, Switch, Redirect} from "react-router-dom";

import Form from 'react-jsonschema-form';

const schema = {
    title: "Ingrese aquí",
    type: "object",
    required: ["user","pwd"],
    properties: {
      user: {type: "string"},
      pwd: {type: "string"}
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
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    /*
    state = {
      toDashborad: false
    }*/

    handleSubmit({formData}) {
        console.log(formData);
        //toDashboard: true;
    }

    render() {

      /*if (this.state.toDashborad === true) {
        <Redirect to='/Dashboard'/>
      }*/
      return (
        <div>
          <Form schema={schema} uiSchema={uiSchema} onSubmit={this.handleSubmit}/>
        </div>
      )
    }
}
  
const rootElement = document.getElementById('root')
ReactDOM.render(<Login />, rootElement)
  

export default Login;