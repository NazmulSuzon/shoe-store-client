import React from "react";

const login = () => {
  return (
    <div className="flex justify-around my-14">
        <div>
            <h3 className="mb-4 text-3xl font-bold">LOGIN</h3>
            <div className="p-8 border shadow-lg w-96 w-50">
            <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="Enter Your Email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="Enter Your Password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="mt-6 form-control">
          <button className="btn btn-primary">Login</button>
        </div>
            </div>
        </div>
        <div>
        <h3 className="font-bold">NEW CUSTOMER</h3>
        </div>
    </div>
  );
};

export default login;
