import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import "./Login.css";
import apiClient from "../../utils/http-common";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// const loginCall = () => {
//   const data = apiClient.post("/user/login", {
//     params: {},
//   });
// };
const Login = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  const navigate = useNavigate();

  // const { isLoading: isPostingTutorial, mutate: postTutorial } = useMutation(
  //   async () => {
  //     return await apiClient.post("/user/login", loginForm);
  //   },
  //   {
  //     onSuccess: (res) => {
  //       const result = {
  //         status: res.status + "-" + res.statusText,
  //         headers: res.headers,
  //         data: res.data,
  //       };
  //       // navigate("/");
  //     },
  //     onError: (err) => {
  //       console.log(err);
  //       // navigate("/user/login");
  //     },
  //   }
  // );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginForm);
    postTutorial();
  };

  const { isLoading: isPostingTutorial, mutate: postTutorial } = useMutation(
    async () => {
      return await apiClient.post("/user/login", loginForm);
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
        // localStorage.setItem("token", result.data.token);
        alert("Login Successsfull");
      },
      onError: (err) => {
        console.log(err);
        alert("Something went wrong");
        toast(
          { err },
          {
            position: "top-center",
            autoClose: 5000,
            // hideProgressBar: false,
            // closeOnClick: true,
            pauseOnHover: true,
            // draggable: true,
            // progress: undefined,
            theme: "light",
          }
        );
      },
    }
  );
  return (
    <>
      <ToastContainer />
      <div className="login-form">
        <div class="row g-0 app-auth-wrapper mt-0">
          <div class="col-12 col-md-7 col-lg-6 auth-main-col text-center p-5">
            <div class="d-flex flex-column align-content-end">
              <div class="app-auth-body mx-auto">
                <div class="app-auth-branding mb-4">
                  <a class="app-logo" href="index.html">
                    <img
                      class="logo-icon me-2"
                      src="assets/images/app-logo.svg"
                      alt="logo"
                    />
                  </a>
                </div>
                <h2 class="auth-heading text-center mb-5">Log in to Portal</h2>
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
                        onChange={handleChange}
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
                        value="Log in"
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

              <footer class="app-auth-footer">
                <div class="container text-center py-3">
                  <small class="copyright">
                    Designed with <span class="sr-only">love</span>
                    <i
                      class="fas fa-heart"
                      style={{ color: "#fb866a" }}
                    ></i> by{" "}
                    <a
                      class="app-link"
                      href="http://themes.3rdwavemedia.com"
                      target="_blank"
                    >
                      Xiaoying Riley
                    </a>{" "}
                    for developers
                  </small>
                </div>
              </footer>
            </div>
          </div>
          <div class="col-12 col-md-5 col-lg-6 h-100 auth-background-col">
            <div class="auth-background-holder"></div>
            <div class="auth-background-mask"></div>
            <div class="auth-background-overlay p-3 p-lg-5">
              <div class="d-flex flex-column align-content-end h-100">
                <div class="h-100"></div>
                <div class="overlay-content p-3 p-lg-4 rounded">
                  <h5 class="mb-3 overlay-title">
                    Explore Portal Admin Template
                  </h5>
                  <div>
                    Portal is a free Bootstrap 5 admin dashboard template. You
                    can download and view the template license{" "}
                    <a href="https://themes.3rdwavemedia.com/bootstrap-templates/admin-dashboard/portal-free-bootstrap-admin-dashboard-template-for-developers/">
                      here
                    </a>
                    .
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
