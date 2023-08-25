import { Routes, Route } from "react-router-dom";
import Home from "./containers/HomePage/Home";
import Login from "./containers/Login/Login";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import PortfolioListPage from "./containers/PortfolioListPage/PortfolioListPage";
import ReviewListPage from "./containers/ReviewListPage/ReviewListPage";
import BlogListPage from "./containers/BlogListPage/BlogListPage";
import PortfolioForm from "./containers/PortfolioForm/PortfolioForm";
import ReviewForm from "./containers/ReviewForm/ReviewForm";
import BlogForm from "./containers/BlogForm/BlogForm";
import ContactUsListPage from "./containers/ContactUsListPage/ContactUsListPage";
import InquiryListPage from "./containers/InquiryListPage/InquiryListPage";
import "./assets/css/portal.css";
import Layout from "./utils/Layout";
import PrivateRoute from "./utils/PrivateRoute";
import Profile from "./containers/Profile/Profile";
import { MainContext } from "./MainContext";
import { useState } from "react";
import InquiryHeader from "./containers/InquiryHeader/InquiryHeader";

function App() {
  const [email, setEmail] = useState("");
  return (
    <>
      <MainContext.Provider value={{ email, setEmail }}>
        <Routes>
          <Route element={<Layout hideHeaderPaths={["/user/login"]} />}>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route
              path="/user/profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route path="/user">
              <Route path="login" element={<Login />} />
            </Route>
            <Route
              path="/contact-us"
              element={
                <PrivateRoute>
                  <ContactUsListPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/inquiries"
              exact
              element={
                <PrivateRoute>
                  <InquiryListPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/inquiry-header"
              element={
                <PrivateRoute>
                  <InquiryHeader />
                </PrivateRoute>
              }
            />
            <Route path="/portfolio">
              <Route
                path="add"
                element={
                  <PrivateRoute>
                    <PortfolioForm />
                  </PrivateRoute>
                }
              />
              <Route
                path=":id"
                element={
                  <PrivateRoute>
                    <PortfolioForm />
                  </PrivateRoute>
                }
              />
              <Route
                path="list"
                element={
                  <PrivateRoute>
                    <PortfolioListPage />
                  </PrivateRoute>
                }
              />
            </Route>
            <Route path="/review">
              <Route
                path="add"
                element={
                  <PrivateRoute>
                    <ReviewForm />
                  </PrivateRoute>
                }
              />
              <Route
                path=":id"
                element={
                  <PrivateRoute>
                    <ReviewForm />
                  </PrivateRoute>
                }
              />
              <Route
                path="list"
                element={
                  <PrivateRoute>
                    <ReviewListPage />
                  </PrivateRoute>
                }
              />
            </Route>
            <Route path="/blog">
              <Route
                path="add"
                element={
                  <PrivateRoute>
                    <BlogForm />
                  </PrivateRoute>
                }
              />
              <Route
                path=":id"
                element={
                  <PrivateRoute>
                    <BlogForm />
                  </PrivateRoute>
                }
              />
              <Route
                path="list"
                element={
                  <PrivateRoute>
                    <BlogListPage />
                  </PrivateRoute>
                }
              />
            </Route>
          </Route>
        </Routes>
      </MainContext.Provider>
    </>
  );
}

export default App;
