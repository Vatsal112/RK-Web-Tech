import React, { useEffect, useState } from "react";
import QuillEditor from "../../components/Quill-editor/QuillEditor";
import "../../assets/css/portal.css";
import apiClient from "../../utils/http-common";
import { useMutation } from "@tanstack/react-query";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { useSelector } from "react-redux";

const fetchData = (id) => {
  const data = apiClient.get(`/portfolio/${id}`);
  return data;
};

const PortfolioForm = () => {
  const [quillData, setQuillData] = useState("");
  const stateData = useSelector((state) => state.app);
  const [formData, setFormData] = useState({
    type: "",
    title: "",
    bannerImage: "",
    cardImage: "",
    mobileAppImage: "",
    mobileAppImageMobile: "",
    uiUxImage: "",
    uiUxImageMobile: "",
    websiteImage: "",
    websiteImageMobile: "",
    projectDetails: {
      content: "",
      projectYear: null,
      teamSize: null,
    },
    technologiesUsed: [],
    toolsLibraryUsed: [],
    isActive: true,
  });
  useEffect(() => {
    setFormData({ ...formData, content: quillData });
  }, [quillData]);

  useEffect(() => {
    if (stateData?.client?.formId) {
      fetchData(stateData?.client?.formId).then((data) => {
        setFormData(data?.data?.data);
        setQuillData(data?.data?.data?.projectDetails?.content);
      });
    }
  }, [stateData?.client?.formId]);
  useEffect(() => {
    setFormData({
      ...formData,
      projectDetails: { ...formData.projectDetails, content: quillData },
    });
  }, [quillData]);
  function getBase64(file, val) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      setFormData({ ...formData, [val]: reader.result });
      console.log(reader.result);
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  }
  const handleChange = (e, val) => {
    const { name, value } = e.target;
    if (val) {
      setFormData({ ...formData, [name]: value.split(",") });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    val === "projectYear" &&
      setFormData({
        ...formData,
        projectDetails: { ...formData.projectDetails, [name]: parseInt(value) },
      });
    val === "teamSize" &&
      setFormData({
        ...formData,
        projectDetails: { ...formData.projectDetails, [name]: parseInt(value) },
      });
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
  const { isLoading: isPostingTutorial, mutate: postTutorial } = useMutation(
    async () => {
      return await apiClient.post("/add-portfolio", formData);
    },
    {
      onSuccess: (res) => {
        const result = {
          status: res.status + "-" + res.statusText,
          headers: res.headers,
          data: res.data,
        };
        setFormData({
          formData: {
            type: "",
            title: "",
            bannerImage: "",
            cardImage: "",
            mainPortfolioImage: "",
            projectDetails: {
              content: "",
              projectYear: null,
              teamSize: null,
            },
            technologiesUsed: [],
            toolsLibraryUsed: [],
            isActive: true,
          },
        });
        console.log(result);
        alert("Data updated successfully");
      },
      onError: (err) => {
        console.log(err);
      },
    }
  );
  const { isLoading: isBlogUpdate, mutate: updateBlog } = useMutation(
    async (id) => {
      return await apiClient.put(`/portfolio/${id}`, formData);
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
      {isPostingTutorial ? (
        <LoadingSpinner />
      ) : (
        <div
          className=""
          style={{
            width: "calc(98vw - 250px)",
            marginLeft: "auto",
            marginBottom: "2rem",
          }}
        >
          <div className="row justify-content-center">
            <div className="col-md-12">
              <span className="anchor" id="formUserEdit"></span>
              <hr className="my-5" />
              <div className="card card-outline-secondary">
                <div className="card-header">
                  <h3 className="mb-0">Portfolio Information</h3>
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
                        Type
                      </label>
                      <div className="col-lg-9">
                        <select
                          className="form-control pt-0 pb-0"
                          id="user_time_zone"
                          size="0"
                          name="type"
                          value={formData?.type}
                          required
                          onChange={handleChange}
                        >
                          <option>Select</option>
                          <option value="Ui-Ux">UI/UX</option>
                          <option value="Web">Website</option>
                          <option value="Mobile">Mobile</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group row mt-3">
                      <label className="col-lg-3 col-form-label form-control-label">
                        Title
                      </label>
                      <div className="col-lg-9">
                        <input
                          className="form-control pt-0 pb-0"
                          type="text"
                          value={formData?.title}
                          name="title"
                          required
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-group row mt-3">
                      <label className="col-lg-3 col-form-label form-control-label">
                        Banner Image
                      </label>
                      <div className="col-lg-9">
                        <input
                          className="form-control"
                          style={{ height: "100%" }}
                          type="file"
                          id="formFile"
                          name="bannerImage"
                          required
                          onChange={(e) =>
                            getBase64(e.target.files[0], "bannerImage")
                          }
                        />
                      </div>
                    </div>
                    <div className="form-group row mt-3">
                      <label className="col-lg-3 col-form-label form-control-label">
                        Card Image
                      </label>
                      <div className="col-lg-9">
                        <input
                          className="form-control"
                          style={{ height: "100%" }}
                          type="file"
                          id="formFile"
                          name="cardImage"
                          required
                          onChange={(e) =>
                            getBase64(e.target.files[0], "cardImage")
                          }
                        />
                      </div>
                    </div>
                    {/* <div className="form-group row mt-3">
                      <label className="col-lg-3 col-form-label form-control-label">
                        Main Portfolio Image
                      </label>
                      <div className="col-lg-9">
                        <input
                          className="form-control"
                          style={{ height: "100%" }}
                          type="file"
                          id="formFile"
                          name="mainPortfolioImage"
                          // required
                          onChange={(e) =>
                            getBase64(e.target.files[0], "mainPortfolioImage")
                          }
                        />
                      </div>
                    </div> */}

                    <div className="form-group row mt-3">
                      <label className="col-lg-3 col-form-label form-control-label">
                        Mobile App Image
                      </label>
                      <div className="col-lg-9">
                        <input
                          className="form-control"
                          style={{ height: "100%" }}
                          type="file"
                          id="formFile"
                          name="mobileAppImage"
                          // required
                          onChange={(e) =>
                            getBase64(e.target.files[0], "mobileAppImage")
                          }
                        />
                      </div>
                    </div>
                    <div className="form-group row mt-3">
                      <label className="col-lg-3 col-form-label form-control-label">
                        Mobile App Image For Mobile
                      </label>
                      <div className="col-lg-9">
                        <input
                          className="form-control"
                          style={{ height: "100%" }}
                          type="file"
                          id="formFile"
                          name="mobileAppImageMobile"
                          // required
                          onChange={(e) =>
                            getBase64(e.target.files[0], "mobileAppImageMobile")
                          }
                        />
                      </div>
                    </div>
                    <div className="form-group row mt-3">
                      <label className="col-lg-3 col-form-label form-control-label">
                        Ui/Ux Image
                      </label>
                      <div className="col-lg-9">
                        <input
                          className="form-control"
                          style={{ height: "100%" }}
                          type="file"
                          id="formFile"
                          name="uiUxImage"
                          // required
                          onChange={(e) =>
                            getBase64(e.target.files[0], "uiUxImage")
                          }
                        />
                      </div>
                    </div>
                    <div className="form-group row mt-3">
                      <label className="col-lg-3 col-form-label form-control-label">
                        Ui/Ux Image Mobile
                      </label>
                      <div className="col-lg-9">
                        <input
                          className="form-control"
                          style={{ height: "100%" }}
                          type="file"
                          id="formFile"
                          name="uiUxImageMobile"
                          // required
                          onChange={(e) =>
                            getBase64(e.target.files[0], "uiUxImageMobile")
                          }
                        />
                      </div>
                    </div>
                    <div className="form-group row mt-3">
                      <label className="col-lg-3 col-form-label form-control-label">
                        Website Image
                      </label>
                      <div className="col-lg-9">
                        <input
                          className="form-control"
                          style={{ height: "100%" }}
                          type="file"
                          id="formFile"
                          name="websiteImage"
                          // required
                          onChange={(e) =>
                            getBase64(e.target.files[0], "websiteImage")
                          }
                        />
                      </div>
                    </div>
                    <div className="form-group row mt-3">
                      <label className="col-lg-3 col-form-label form-control-label">
                        Website Image Mobile
                      </label>
                      <div className="col-lg-9">
                        <input
                          className="form-control"
                          style={{ height: "100%" }}
                          type="file"
                          id="formFile"
                          name="websiteImageMobile"
                          // required
                          onChange={(e) =>
                            getBase64(e.target.files[0], "websiteImageMobile")
                          }
                        />
                      </div>
                    </div>
                    <div className="form-group row mt-3">
                      <label className="col-lg-3 col-form-label form-control-label">
                        Project Details
                      </label>
                      <div className="col-lg-9">
                        <QuillEditor
                          name="projectDetails"
                          value={quillData}
                          setValue={setQuillData}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group row mt-3">
                      <label className="col-lg-3 col-form-label form-control-label">
                        Project Year
                      </label>
                      <div className="col-lg-9">
                        <input
                          className="form-control pt-0 pb-0"
                          type="text"
                          required
                          value={formData?.projectDetails?.projectYear}
                          name="projectYear"
                          onChange={(e) => handleChange(e, "projectYear")}
                        />
                      </div>
                    </div>
                    <div className="form-group row mt-3">
                      <label className="col-lg-3 col-form-label form-control-label">
                        Team Size
                      </label>
                      <div className="col-lg-9">
                        <input
                          className="form-control pt-0 pb-0"
                          type="text"
                          value={formData?.projectDetails?.teamSize}
                          name="teamSize"
                          required
                          onChange={(e) => handleChange(e, "teamSize")}
                        />
                      </div>
                    </div>
                    <div className="form-group row mt-3">
                      <label className="col-lg-3 col-form-label form-control-label">
                        Technologies
                      </label>
                      <div className="col-lg-9">
                        <input
                          className="form-control"
                          type="text"
                          required
                          value={formData?.technologiesUsed}
                          name="technologiesUsed"
                          onChange={(e) => handleChange(e, "technology")}
                        />
                      </div>
                    </div>
                    <div className="form-group row mt-3">
                      <label className="col-lg-3 col-form-label form-control-label">
                        Tools
                      </label>
                      <div className="col-lg-9">
                        <input
                          className="form-control"
                          type="text"
                          required
                          value={formData?.toolsLibraryUsed}
                          name="toolsLibraryUsed"
                          onChange={(e) => handleChange(e, "tools")}
                        />
                      </div>
                    </div>
                    <div className="form-group row mt-3">
                      <label className="col-lg-3 col-form-label form-control-label">
                        Visible on site
                      </label>
                      <div className="col-lg-9 d-flex">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="isActive"
                            id="flexRadioDefault1"
                            checked={formData?.isActive}
                            value={true}
                            onChange={handleRadios}
                          />
                          <label
                            class="form-check-label"
                            for="flexRadioDefault1"
                          >
                            Yes
                          </label>
                        </div>
                        <div class="form-check" style={{ marginLeft: "10px" }}>
                          <input
                            class="form-check-input"
                            type="radio"
                            name="isActive"
                            id="flexRadioDefault2"
                            checked={!formData?.isActive}
                            value={false}
                            onChange={handleRadios}
                          />
                          <label
                            class="form-check-label"
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
                          type="submit"
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

export default PortfolioForm;
