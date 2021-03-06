import React from "react";
import { Button} from "reactstrap";
import {Message } from "semantic-ui-react";
import PropTypes from 'prop-types';
import { AvForm, AvField } from "availity-reactstrap-validation";
import Validator from 'validator';
import InlineError from '../messages/InlineErrors';
export default class LoginForm extends React.Component {
  state = {
    data:{
    email:'',
    password:''
    },
    loading:false,
    errors:{}
  };
  onChange= e => this.setState(
    {data:{...this.state.data,[e.target.name]: e.target.value}});
  onSubmit = () =>{
    const errors = this.validate(this.state.data);
    this.setState({errors});
    if(Object.keys(errors).length===0){
      this.setState({loading:true});
      this.props.submit(this.state.data)
      .catch(err=>
        this.setState({errors: err.response.data.errors, loading:false})
    );

    }
  };
  validate = (data) => {
    const errors = {};
    if(!Validator.isEmail(data.email)) errors.email = "invalid email";
    if (!data.password) errors.password = "password can't be blank";
    return errors;
  }

  render() {
    const {data, errors, loading} = this.state;
    return (
      <div className="card col-lg-6">
      <AvForm onSubmit={this.onSubmit}>
      {errors.global && (
        <Message negative>
       <Message.Header>Something went Wrong</Message.Header>
       <p>{errors.global}</p>
       </Message>
     )}

        <AvField
          error={!!errors.email}
          name="email"
          label="Email"
          type="text"
          value={data.email}
          onChange={this.onChange}
        />
        {errors.email && <InlineError text={errors.email} />}
        <AvField
          error={!!errors.password}
          name="password"
          label="Password"
          type="password"
          value={data.email}
          onChange={this.onChange}
        />
        {errors.password && <InlineError text={errors.password} />}
        <Button id="submit">Submit</Button>
      </AvForm>
      </div>
    );
  }
}
LoginForm.propTypes = {
  submit: PropTypes.func.isRequired
}
