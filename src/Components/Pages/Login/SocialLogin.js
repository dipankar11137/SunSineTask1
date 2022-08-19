import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";
import Loading from "../Home/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, loading, user, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  let errorElement;
  if (loading) {
    return <Loading></Loading>;
  }

  if (error) {
    errorElement = (
      <p className="text-danger">
        Error: {error?.message}
        {error?.message}
      </p>
    );
  }

  if (user) {
    navigate("/");
  }
  return (
    <div>
      <div className="d-flex align-items-center p-3">
        <div style={{ height: "2px" }} className="bg-warning w-50"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "2px" }} className="bg-warning w-50"></div>
      </div>
      {errorElement}
      <div className="shadow p-3">
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-primary w-75 d-block mx-auto mb-2"
        >
          <span className="px-2 fw-bold fs-5"> Google Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
