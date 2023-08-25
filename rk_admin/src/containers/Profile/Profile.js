import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import apiClient from "../../utils/http-common";
import "./Profile.css";
import { useMutation, useQuery } from "@tanstack/react-query";

const Profile = () => {
  const [profileForm, setProfileForm] = useState({
    email: localStorage.getItem("profileEmail"),
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileForm({ ...profileForm, [name]: value });
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    postTutorial();
  };
  const { isLoading: isPostingTutorial, mutate: postTutorial } = useMutation(
    async () => {
      return await apiClient.put("/user/forget-password", profileForm);
    },
    {
      onSuccess: (res) => {
        const result = {
          status: res.status + "-" + res.statusText,
          headers: res.headers,
          data: res.data,
        };

        let date = new Date();
        date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
        let expires = "expires=" + date.toUTCString();
        document.cookie =
          "token=" + result.data.token + ";" + expires + ";path=/";
        alert("Password Updated Successsfull");
        navigate("/");
      },
      onError: (err) => {
        console.log(err);
        alert("Something went wrong");
        toast(
          { err },
          {
            position: "top-center",
            autoClose: 5000,
            pauseOnHover: true,
            theme: "light",
          }
        );
      },
    }
  );
  return (
    <>
      <ToastContainer />
      <div className="login-form profile">
        <div class="row g-0 app-auth-wrapper mt-0 d-flex align-items-center">
          <div class="col-12 col-md-12 col-lg-12 auth-main-col text-center p-5">
            <div class="d-flex flex-column align-content-end">
              <div class="app-auth-body mx-auto">
                <div class="app-auth-branding mb-4">
                  <a class="app-logo" href="index.html">
                    {/* <img
                      class="logo-icon me-2"
                      src="assets/images/app-logo.svg"
                      alt="logo"
                    /> */}
                    <h4 className="mt-2">Update Password</h4>
                  </a>
                </div>
                <div class="auth-form-container text-start">
                  <form class="auth-form login-form" onSubmit={handleSubmit}>
                    <div class="email mb-3">
                      <label class="sr-only" for="signin-email">
                        Email
                      </label>
                      <input
                        id="signin-email"
                        name="email"
                        type="email"
                        class="form-control signin-email"
                        placeholder="Email address"
                        required="required"
                        disabled
                        value={localStorage.getItem("profileEmail")}
                      />
                    </div>
                    <div class="password mb-3">
                      <label class="sr-only" for="signin-password">
                        Password
                      </label>
                      <input
                        id="signin-password"
                        name="password"
                        type="password"
                        class="form-control signin-password"
                        placeholder="Password"
                        required="required"
                        onChange={handleChange}
                      />
                    </div>
                    <div class="text-center">
                      <input
                        type="submit"
                        class="btn app-btn-primary w-100 theme-btn mx-auto"
                        value="Change Password"
                      ></input>
                    </div>
                  </form>

                  {/* <div class="auth-option text-center pt-5">
              No Account? Sign up{" "}
              <a class="text-link" href="signup.html">
                here
              </a>
              .
            </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
