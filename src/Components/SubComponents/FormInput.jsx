import React from "react";
import "./FormInput.css";

const FormInput = (props) => {
  return (
    <div className="formInput flex flex-col items-start gap-0">
      <label className="block text-xs font-bold" htmlFor="">
        {props.labelText}
      </label>
      <input
        className="my-4 p-3 rounded-md"
        placeholder={props.placeholder}
        type="text"
      />
    </div>
  );
};

export default FormInput;
