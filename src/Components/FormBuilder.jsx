import React from "react";

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
          <label
            className="text-sm font-bold tracking-wider text-slate-800"
            htmlFor=""
          >
            Your Name
          </label>
          {/* <input
            className="px-7 py-2 border border-slate-800 rounded-sm"
            type="text"
            name="name"
            placeholder="John Doe"
          /> */}
        </form>
      </div>
    </div>
  );
};

export default FormBuilder;
