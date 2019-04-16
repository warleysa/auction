import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



class ChangePassword extends Component {
  constructor(props, context) {
    super(props, context);
    this.state={
      oldPassword: '',
      newPassword: '',
      newPassword2: '',
      newPasswordError: '',
      showModal: false,
      validated: false

    }

  }


  handleClose = () => {
    this.setState({
      showModal: false,
      oldPassword: '',
      newPassword: '',
      newPassword2: '',
      });
  }

  handleShow = () => {
    this.setState({ showModal: true });
  }


  handleInputChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })

    if(event.target.name === 'newPassword'){
      document.getElementById('newPass2').classList.remove('is-valid')
      if(event.target.value.length > 3){
        event.target.classList.remove('is-invalid')
        event.target.classList.add('is-valid')
      }else{
        if(event.target.value.length === 0){
          this.setState({
            newPasswordError: "password is required"
          })
        }else{
          this.setState({
            newPasswordError: "password needs a minimum of 4 characters"
          })
        }
        event.target.classList.remove('is-valid')
        event.target.classList.add('is-invalid')
      }

    }else if(event.target.name === 'newPassword2'){
        if(event.target.value !== this.state.newPassword){
          event.target.classList.remove('is-valid')
          event.target.classList.add('is-invalid')
        }else{
          if(event.target.value.length > 3){
            event.target.classList.remove('is-invalid')
            event.target.classList.add('is-valid')
          }
        }
    }
  };

  onSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.setState({ validated: true });
  }


  render() {

    return(
      <>
      <Button variant='warning'  onClick={this.handleShow} className='m-1'><i className="m-1 fas fa-lock"></i> Change Password</Button>
        <Modal size="md"
               show={this.state.showModal}
               onHide={this.handleClose}
               aria-labelledby="change-password-modal"
               centered>
          <Modal.Header closeButton><h5>Change your password</h5></Modal.Header>

          <Modal.Body>
            <Form noValidate
                  validated={this.state.validated}>

              <Form.Group>
                <Form.Label>Old password</Form.Label>
                <Form.Control type="password"
                              name="oldPassword"
                              value={this.state.oldPassword}
                              onChange={this.handleInputChange}
                              required/>
                <Form.Control.Feedback type='invalid'>password must be 4 characters or longer</Form.Control.Feedback>
              </Form.Group>

              <Form.Group>
                <Form.Label>New password</Form.Label>
                <Form.Control type="password"
                              name="newPassword"
                              value={this.state.newPassword}
                              onChange={this.handleInputChange} />
                <Form.Control.Feedback type='valid'>looks good</Form.Control.Feedback>
                <Form.Control.Feedback type='invalid'>{this.state.newPasswordError}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group>
                <Form.Label>Confirm new password</Form.Label>
                <Form.Control type="password"
                              name="newPassword2"
                              value={this.state.newPassword2}
                              onChange={this.handleInputChange}
                              id="newPass2"/>
                <Form.Control.Feedback type='invalid'>Passwords do not match</Form.Control.Feedback>
                <Form.Control.Feedback type='valid'>Passwords match!</Form.Control.Feedback>
              </Form.Group>
            </Form>


          </Modal.Body>

          <Modal.Footer>
            <Button variant="success" className="float-right">Submit</Button>
          </Modal.Footer>
        </Modal>
        </>
    );
  }
}

export default ChangePassword;
