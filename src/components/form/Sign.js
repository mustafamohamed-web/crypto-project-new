import React from "react";
import "../../styles/SignUp.css";
import UseForm from "./UseForm";

const Sign = () => {
  const { handleChange, values, handleSubmit } = UseForm();
  return (
    <div className="form-content-right">
      <form className="form">
        <h1>
          Get started with us today, create your account and fill out the form
          below.
        </h1>
        <div className="form-input">
          <label htmlFor="" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="input-form"
            name="username"
            placeholder="Enter your username"
            value={values.username}
            onChange={handleChange}
          />
        </div>
        <div className="form-input">
          <label htmlFor="" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="input-form"
            name="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-input">
          <label htmlFor="" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="input-form"
            name="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-input">
          <label htmlFor="" className="form-label">
            Confirm password
          </label>
          <input
            type="password"
            className="input-form"
            name="password2"
            placeholder="Enter your password"
            value={values.password2}
            onChange={handleChange}
          />
        </div>
        <button className="btn-form" type="submit">
          Sign up
        </button>
        <span>
          Already have an account? login in <a href="">here</a>
        </span>
      </form>
    </div>
  );
};

export default Sign;
