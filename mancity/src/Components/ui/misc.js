import React from "react";
import { Link } from "react-router-dom";

export const Tag = (props) => {
  const template = (
    <div
      style={{
        background: props.bck,
        fontSize: props.size,
        color: props.color,
        padding: "5px 10px",
        display: "inline-block",
        fontFamily: "Righteus",
        ...props.add,
      }}
    >
      {props.children}
    </div>
  );

  if (props.link) {
    return <Link to={props.linkto}>{template}</Link>;
  } else {
    return template;
  }
};

export const firebaseLooper = (snapshot) => {
  const data = [];
  snapshot.forEach((childSnapshot) => {
    data.push({
      ...childSnapshot.val(),
      id: childSnapshot.key,
    });
  });
  return data;
};

export const reverseArray = (actualArray) => {
  let reversedArray = [];
  for (let i = actualArray.length - 1; i >= 0; i--) {
    reversedArray.push(actualArray[i]);
  }
  return reversedArray;
};
export const validate = (element) => {
  //element contains all the data we have
  let error = [true, ""]; //if is valid, we return an array, containing input: true/false and message" valid email/please enter valid email

  if (element.validation.required) {
    //true
    const valid = element.value.trim() !== ""; //trim  and evaluate if value is equal with nothing //return true or false
    const message = `${!valid ? "This field is required" : ""}`;
    error = !valid ? [valid, message] : error;
  }
  console.log(error);
  return error;
};
