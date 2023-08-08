import React from "react";
import FormInput from "./SubComponents/FormInput";

const FormBuilder = () => {
  // react hook form

  return (
    <div className="my-10">
      <div className="mx-8 bg-[#ecf3f9] border-2 border-slate-200 py-10 px-10 rounded-3xl">
        <h1 className="text-3xl font-bold text-slate-800">
          Start building your <br></br> beautiful forms 🐾
        </h1>
        {/* forms */}
        <form action="">
          <FormInput labelText="Your Name" placeholder="User Name"></FormInput>
          <FormInput placeholder="Email"></FormInput>
          <FormInput placeholder="password"></FormInput>
          <FormInput placeholder="Confirm Pass"></FormInput>
        </form>
      </div>
    </div>
  );
};

export default FormBuilder;
