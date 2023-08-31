/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useState, useEffect } from "react";
import apiClient from "../../utils/http-common";
import { useMutation } from "@tanstack/react-query";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { useSelector } from "react-redux";

const fetchData = (id) => {
  const data = apiClient.get(`/review/${id}`);
  return data;
};

const ReviewForm = () => {
  const stateData = useSelector((state) => state.app);
  const [formData, setFormData] = useState({
    clutchReviewImage: "",
    clutchReviewImageFileName: "",
    clutchReviewLink: "",
    isActive: true,
  });
  function getBase64(file, fileName, val) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      setFormData({
        ...formData,
        [val]: reader.result,
        [val + "FileName"]: fileName,
      });
      console.log(reader.result);
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  }

  useEffect(() => {
    if (stateData?.client?.formId) {
      fetchData(stateData?.client?.formId).then((data) => {
        setFormData(data?.data?.data);
      });
    } else {
      setFormData({
        clutchReviewImage: "",
        clutchReviewImageFileName: "",
        clutchReviewLink: "",
        isActive: true,
      });
    }
  }, [stateData?.client?.formId]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (stateData?.client?.formId) {
      updateBlog(stateData?.client?.formId);
    } else {
      postTutorial();
    }
  };
  const { mutate: updateBlog } = useMutation(
    async (id) => {
      return await apiClient.put(`/review/${id}`, formData);
    },
    {
      onSuccess: (res) => {
        const result = {
          status: res.status + "-" + res.statusText,
          headers: res.headers,
          data: res.data,
        };
        console.log(result);
        alert("Data updated successfully");
      },
      onError: (err) => {
        console.log(err);
      },
    }
  );
  const { isLoading: isPostingTutorial, mutate: postTutorial } = useMutation(
    async () => {
      return await apiClient.post("/add-review", formData, {});
    },
    {
      onSuccess: (res) => {
        const result = {
          status: res.status + "-" + res.statusText,
          headers: res.headers,
          data: res.data,
        };
        console.log(result);
        setFormData({
          clutchReviewImage: "",
          clutchReviewImageFileName: "",
          clutchReviewLink: "",
        });
        alert("Data added successfully");
      },
      onError: (err) => {
        console.log(err);
      },
    }
  );
  return (
    <>
      {isPostingTutorial ? (
        <LoadingSpinner />
      ) : (
        <div
          className=""
          style={{ width: "calc(98vw - 250px)", marginLeft: "auto" }}
        >
          <div className="row justify-content-center">
            <div className="col-md-12">
              <span className="anchor" id="formUserEdit"></span>
              <hr className="my-5" />
              <div className="card card-outline-secondary">
                <div className="card-header">
                  <h3 className="mb-0">Review Information</h3>
                </div>
                <div className="card-body">
                  <form
                    autocomplete="off"
                    className="form"
                    role="form"
                    noValidate
                    onSubmit={handleSubmit}
                  >
                    <div className="form-group row mt-3">
                      <div className="col-lg-3">
                        <label className=" col-form-label form-control-label">
                          Review Image
                        </label>
                      </div>
                      <div className="col-lg-9 position-relative">
                        <input
                          className="col-lg-9 form-control file-control"
                          value={formData.clutchReviewImageFileName}
                          style={{ padding: "1.3rem" }}
                          disabled
                        />
                        <input
                          className="form-control d-none align-item-center position-relative"
                          type="file"
                          id="clutchReviewImage"
                          required
                          name="clutchReviewImage"
                          onChange={(e) => {
                            getBase64(
                              e.target.files[0],
                              e.target.files[0].name,
                              "clutchReviewImage"
                            );
                          }}
                        />
                        <label
                          className="btn position-absolute p-2 choose-btn"
                          htmlFor="clutchReviewImage"
                        >
                          Choose File
                        </label>
                      </div>
                    </div>
                    <div className="form-group row mt-3">
                      <label className="col-lg-3 col-form-label form-control-label">
                        Review Link
                      </label>
                      <div className="col-lg-9">
                        <input
                          className="form-control"
                          type="text"
                          value={formData.clutchReviewLink}
                          name="clutchReviewLink"
                          required
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="form-group row mt-3 mt-4">
                      <label className="col-lg-3 col-form-label form-control-label"></label>
                      <div className="col-lg-9">
                        <input
                          className="btn btn-secondary"
                          type="reset"
                          value="Cancel"
                        />
                        <input
                          className="btn btn-primary"
                          type="submit"
                          value="Save Changes"
                          style={{ marginLeft: "1rem" }}
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReviewForm;
