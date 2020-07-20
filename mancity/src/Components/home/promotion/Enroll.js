import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import FormField from "../../ui/formFields";
import { validate } from "../../ui/misc";
import { firebasePromotion } from "../../../firebase";
import { firebasePromotions } from "../../../firebase";
class Enroll extends Component {
  state = {
    formError: false,
    formSuccess: "",
    formdata: {
      email: {
        element: "input",
        value: "",
        config: {
          name: "email_input",
          type: " email",
          placeholder: "Enter your email",
        },
        validation: {
          required: true,
          email: true,
        },
        valid: false,
        validationMessage: "",
      },
    },
  };
  updateForm(element) {
    const newFormdata = { ...this.state.formdata }; // make a copy of formdata and then update the whole state
    //console.log(newFormdata);
    const newElement = { ...newFormdata[element.id] };
    console.log(element.event.target.value);

    newElement.value = element.event.target.value;

    let valiData = validate(newElement); //host the data that says that element is valid or not

    newElement.valid = valiData[0];
    newElement.validationMessage = valiData[1];
    //console.log(valiData)

    newFormdata[element.id] = newElement;

    this.setState({
      formError: false,
      formdata: newFormdata,
    });
    //console.log(newFormdata);
  }

  resetFormSuccess(type) {
    //clear everything from state.formdata
    const newFormdata = { ...this.state.formdata };

    for (let key in newFormdata) {
      newFormdata[key].value = "";
      newFormdata[key].valid = false;
      newFormdata[key].validationMessage = "";
    }
    this.setState({
      formError: false,
      formdata: newFormdata,
      formSuccess: type ? "Congratulations" : "already in the db",
    });
    this.successMessage();
  }
  successMessage() {
    setTimeout(() => {
      this.setState({
        formSuccess: "",
      });
    }, 2000);
  }
  submitForm(event) {
    event.preventDefault();

    let dataToSubmit = {};
    let formIsValid = true; //true or false
    //parcurgem all elements from forma data and check if valid is true
    for (let key in this.state.formdata) {
      dataToSubmit[key] = this.state.formdata[key].value;
      formIsValid = this.state.formdata[key].valid && formIsValid;
    }

    if (formIsValid) {
      firebasePromotions
        .orderByChild("email")
        .equalTo(dataToSubmit.email)
        .once("value")
        .then((snapshot) => {
          if (snapshot.val() === null) {
            //push to bd
            firebasePromotions.push(dataToSubmit);
            this.resetFormSuccess(true);
          } else {
            this.resetFormSuccess(false);
          }
        });
      //.orderByChild('email') order and search by email key
      //this.resetFormSuccess();
    } else {
      this.setState({
        formError: true,
      });
    }
    //console.log(dataToSubmit);
  }
  render() {
    return (
      <Fade>
        <div className="enroll_wrapper">
          <form onSumbit={(event) => this.submitForm(event)}>
            <div className="enroll_title">Enter email</div>
            <div className="enroll_input">
              <FormField
                id={"email"}
                formdata={this.state.formdata.email}
                change={(element) => this.updateForm(element)}
              />
              {this.state.formError ? (
                <div className="error_label">Smth is wrong</div>
              ) : null}
              <div className="success_label">{this.state.formSuccess}</div>
              <button onClick={(event) => this.submitForm(event)}>
                Enroll
              </button>
            </div>
          </form>
        </div>
      </Fade>
    );
  }
}

export default Enroll;
