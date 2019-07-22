import React from 'react';
import {Form, Button} from 'semantic-ui-react';
class LoginForm extends React.Component{

  render(){
    return(
      <Form>
       <Form.field>
       <label htmlFor="email">Email</label>
       <input type="email" name="email" id="email"
         placehoder="dih@gmail.com"/>
       </Form.field>
       <Form.field>
       <label htmlFor="password">Password</label>
       <input type="password"
        name="password"
        id="password"
         placehoder="Enter Password"

         />
       </Form.field>
          <Button primary> Login</Button>
      </Form>
    );
  }

}

export default LoginForm;
