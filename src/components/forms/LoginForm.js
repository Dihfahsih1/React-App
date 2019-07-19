import React from 'react';
import {Form, Button} from 'semantic-ui-react';
class LoginForm extends React.Component{
  state={
    data:{
      email:'',
      password:''
    },
    loading:false,
    errors:{}

  }
  onChange = e =>
   this.setState({
    data:{...this.state.data,[e.target.name]:e.target.value}});
  render(){
    const{ data } = this.state;
    return(
      <Form>
       <Form.field>
       <label htmlFor="email">Email</label>
       <input type="email" name="email" id="email"
         placehoder="dih@gmail.com"
         value={data.email}
         onChange={this.onChange}
         />
       </Form.field>
       <Form.field>
       <label htmlFor="password">Password</label>
       <input type="password"
        name="password"
        id="password"
         placehoder="Enter Password"
         value={data.email}
         onChange={this.onChange}
         />
       </Form.field>
          <Button primary> Login</Button>
      </Form>
    );
  }

}

export default LoginForm;
