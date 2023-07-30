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
    quote: "",
    customerImage: "",
    customerDesignation: "",
    customerName: "",
    ratings: "",
    isActive: true,
  });
  function getBase64(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      setFormData({ ...formData, customerImage: reader.result });

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
    }
  }, [stateData?.client?.formId]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleRadios = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value === "true" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (stateData?.client?.formId) {
      updateBlog(stateData?.client?.formId);
    } else {
      postTutorial();
    }
  };
  const { isLoading: isBlogUpdate, mutate: updateBlog } = useMutation(
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
                    onSubmit={handleSubmit}
                  >
                    <div className="form-group row mt-3">
                      <label className="col-lg-3 col-form-label form-control-label">
                        Quote
                      </label>
                      <div className="col-lg-9">
                        <input
                          className="form-control"
                          type="text"
                          value={formData.quote}
                          name="quote"
                          required
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-group row mt-3">
                      <label className="col-lg-3 col-form-label form-control-label">
                        Customer Image
                      </label>
                      <div className="col-lg-9">
                        <input
                          className="form-control"
                          style={{ height: "100%" }}
                          type="file"
                          id="formFile"
                          // required
                          name="customerImage"
                          onChange={(e) => getBase64(e.target.files[0])}
                        />
                      </div>
                    </div>
                    <div className="form-group row mt-3">
                      <label className="col-lg-3 col-form-label form-control-label">
                        Customer Name
                      </label>
                      <div className="col-lg-9">
                        <input
                          className="form-control"
                          type="text"
                          required
                          value={formData.customerName}
                          name="customerName"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-group row mt-3">
                      <label className="col-lg-3 col-form-label form-control-label">
                        Customer Designation
                      </label>
                      <div className="col-lg-9">
                        <input
                          className="form-control"
                          type="text"
                          required
                          value={formData.customerDesignation}
                          name="customerDesignation"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-group row mt-3">
                      <label className="col-lg-3 col-form-label form-control-label">
                        Rating
                      </label>
                      <div className="col-lg-9">
                        <input
                          className="form-control"
                          type="text"
                          required
                          value={formData.ratings}
                          name="ratings"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-group row mt-3">
                      <label className="col-lg-3 col-form-label form-control-label">
                        Visible on site
                      </label>
                      <div className="col-lg-9 d-flex">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="isActive"
                            id="flexRadioDefault1"
                            checked={formData?.isActive}
                            value={true}
                            onChange={handleRadios}
                          />
                          <label
                            className="form-check-label"
                            for="flexRadioDefault1"
                          >
                            Yes
                          </label>
                        </div>
                        <div
                          className="form-check"
                          style={{ marginLeft: "10px" }}
                        >
                          <input
                            className="form-check-input"
                            type="radio"
                            name="isActive"
                            id="flexRadioDefault2"
                            checked={!formData?.isActive}
                            value={false}
                            onChange={handleRadios}
                          />
                          <label
                            className="form-check-label"
                            for="flexRadioDefault2"
                          >
                            No
                          </label>
                        </div>
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
