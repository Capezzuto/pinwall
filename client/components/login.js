import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, ControlLabel, FormGroup, FormControl, Button, Row, Col} from 'react-bootstrap';
import { login, logorgs } from '../actions/login-action.js';
import OrgModal from './org-modal.js';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      showModal: false
    }
  }

  onInputChange(event) {
    let key = event.target.id;
    this.setState({
      [key]: event.target.value
    });
  }

  submitUserInfo(event) {
    event.preventDefault();
    axios.post('api/users/login', {
      "email"   : this.state.email,
      "password": this.state.password
    })
    .then((response) => {
      let userId = response.data.id;
      this.props.login(response);
      return axios.get(`api/user/${userId}/organizations`);
    })
    .then((response) => {
      this.props.logorgs(response.data);
      this.displayModal();
    })
    .catch((err) => {
      alert("There were no organizations associated with this user");
    });
  }

  displayModal() {
    this.setState({showModal: true});
  }

  hideModal() {
    this.setState({showModal: false});
  }

  render() {
    return(
      <Row>
        <Col xs={6} xsOffset={3}>
          <Form onSubmit={this.submitUserInfo.bind(this)}>
            <FormGroup controlId="email">
              <ControlLabel>Email Address</ControlLabel>
              <FormControl
                type="text"
                placeholder="Enter email"
                onChange={this.onInputChange.bind(this)}
                value={this.state.username} />
            </FormGroup>
            <FormGroup controlId="password">
              <ControlLabel>Password</ControlLabel>
              <FormControl
                type="password"
                placeholder="Enter password"
                onChange={this.onInputChange.bind(this)}
                value={this.state.password} />
            </FormGroup>
            <Button bsStyle="success" type="submit">Submit</Button>
          </Form>
          <OrgModal
            show={this.state.showModal}
            hideModal={this.hideModal.bind(this)}
            />
        </Col>
    </Row>
    )
  }
}

// function mapStateToProps(state) {
//   return {orgs: state.user.orgs, user: state.user}
// }

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ login, logorgs }, dispatch);
}

export default connect(null, mapDispatchToProps)(Login);
