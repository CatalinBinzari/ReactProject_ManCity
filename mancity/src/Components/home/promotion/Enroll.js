import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import FormField from "../../ui/formFields";
import { validate } from "../../ui/misc";
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
      formdata: newFormdata,
    });
    console.log(newFormdata);
  }
  submitForm() {}
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
            </div>
          </form>
        </div>
      </Fade>
    );
  }
}

export default Enroll;
