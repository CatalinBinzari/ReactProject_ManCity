import React from "react";
import AdminLayout from "../../Hoc/AdminLayout";

const FormField = ({ formdata, id, change }) => {
  const showError = () => {
    let errorMessage = (
      <div className="error_labels">
        {formdata.validation && !formdata.valid
          ? formdata.validationMessage
          : null}
      </div>
    );
    return errorMessage;
  };
  const renderTemplate = () => {
    let formTemplate = null; //if a mistake or is wrong, it's going to return nothing
    //switch will check what king of input we have in email
    switch (formdata.element) {
      case "input":
        formTemplate = (
          <div>
            {formdata.showlabel ? (
              <div className="label_inputs"> {formdata.config.label}</div>
            ) : null}
            <input
              {...formdata.config}
              value={formdata.value}
              onChange={(event) => change({ event, id })}
            />
            {showError()}
          </div>
        );
        break;
      case "select":
        formTemplate = (
          <div>
            {formdata.showlabel ? (
              <div className="label_inputs"> {formdata.config.label}</div>
            ) : null}
            <select
              value={formdata.value}
              onChange={(event) => change({ event, id })}
            >
              <option value="">Select one</option>
              {formdata.config.options.map((item) => (
                <option key={item.key} value={item.key}>
                  {item.value}
                </option>
              ))}
            </select>
            {showError()}
          </div>
        );
        break;
      default:
        formTemplate = null;
    }
    return formTemplate;
  };
  return <div>{renderTemplate()}</div>;
};

export default FormField;
