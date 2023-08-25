import React, { useState, useEffect } from "react";
import apiClient from "../../utils/http-common";
import { useMutation, useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const fetchData = () => {
  const data = apiClient.get("/inquiry/get-header");
  return data;
};
const InquiryHeader = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const data = useQuery(["inquiryHeader"], fetchData);
  useEffect(() => {
    setFormData(data?.data?.data?.data[0]);
  }, [data?.data?.data?.data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateInquiryHeader();
  };

  // useEffect(() => {}, [data.id]);
  //api call for form

  const { isLoading: isInquiryHeader, mutate: updateInquiryHeader } =
    useMutation(
      async (id) => {
        return await apiClient.put("/inquiry/update-header", formData);
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
  return (
    <>
      {isInquiryHeader ? (
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
                  <h3 className="mb-0">Inquiry Header</h3>
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
                        Title
                      </label>
                      <div className="col-lg-9">
                        <input
                          className="form-control"
                          type="text"
                          required
                          value={formData?.title}
                          name="title"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-group row mt-3">
                      <label className="col-lg-3 col-form-label form-control-label">
                        Description
                      </label>
                      <div className="col-lg-9">
                        <input
                          className="form-control"
                          type="text"
                          required
                          value={formData?.description}
                          name="description"
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

export default InquiryHeader;
