import React, { useEffect, useState } from "react";
import QuillEditor from "../../components/Quill-editor/QuillEditor";
import "../../assets/css/portal.css";
import apiClient from "../../utils/http-common";
import { useMutation } from "@tanstack/react-query";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { useSelector } from "react-redux";
import "./PortfolioForm.css";
import { type } from "@testing-library/user-event/dist/type";

const fetchData = (id) => {
  const data = apiClient.get(`/portfolio/${id}`);
  return data;
};

const PortfolioForm = () => {
  const [quillData, setQuillData] = useState("");
  const [typeArray, setTypeArray] = useState([]);
  const [tyepChecked, setTypeChecked] = useState({
    isUIUX: false,
    isWebsite: false,
    isMobile: false,
  });
  const initialState = {
    type: "",
    title: "",
    bannerImage: "",
    bannerImageFileName: "",
    cardImage: "",
    cardImageFileName: "",
    mobileAppImage: "",
    mobileAppImageFileName: "",
    mobileAppImageMobile: "",
    mobileAppImageMobileFileName: "",
    uiUxImage: "",
    uiUxImageFileName: "",
    uiUxImageMobile: "",
    uiUxImageMobileFileName: "",
    websiteImage: "",
    websiteImageFileName: "",
    websiteImageMobile: "",
    websiteImageMobileFileName: "",
    projectDetails: {
      content: "",
      projectYear: "",
      teamSize: "",
    },
    technologiesUsed: [],
    toolsLibraryUsed: [],
    isActive: true,
  };
  const stateData = useSelector((state) => state.app);
  const [formData, setFormData] = useState(initialState);
  useEffect(() => {
    setFormData({ ...formData, content: quillData });
  }, [quillData]);

  useEffect(() => {
    if (stateData?.client?.formId) {
      fetchData(stateData?.client?.formId).then((data) => {
        let finalData = data?.data?.data;
        setFormData(finalData);
        handleFormEditData(finalData);
      });
    } else {
      setFormData(initialState);
      setTypeArray([]);
      setTypeChecked({
        isUIUX: false,
        isWebsite: false,
        isMobile: false,
      });
      setQuillData("");
    }
  }, [stateData?.client?.formId]);
  useEffect(() => {
    setFormData({
      ...formData,
      projectDetails: { ...formData.projectDetails, content: quillData },
    });
  }, [quillData]);

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

  const handleFormEditData = (data) => {
    setQuillData(data?.projectDetails?.content);
    setTypeArray(data?.type?.split(","));
    data?.type?.split(",")?.map((item) => {
      if (item === "Ui/Ux") {
        setTypeChecked((prevTypeCheck) => ({
          ...prevTypeCheck,
          isUIUX: true,
        }));
      } else if (item === "website") {
        setTypeChecked((prevTypeCheck) => ({
          ...prevTypeCheck,
          isWebsite: true,
        }));
      } else if (item === "App") {
        setTypeChecked((prevTypeCheck) => ({
          ...prevTypeCheck,
          isMobile: true,
        }));
      }
    });
  };

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
        projectDetails: { ...formData.projectDetails, [name]: value },
      });
    val === "teamSize" &&
      setFormData({
        ...formData,
        projectDetails: { ...formData.projectDetails, [name]: value },
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
        setFormData(initialState);
        setQuillData("");
        setTypeChecked({
          isUIUX: false,
          isWebsite: false,
          isMobile: false,
        });
        alert("Data submitted successfully");
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

  useEffect(() => {
    setFormData({ ...formData, type: typeArray.toString() });
  }, [typeArray.length]);

  const handleType = (e, name) => {
    if (e.target.checked) {
      setTypeArray([...typeArray, e.target.value]);
      setTypeChecked({ ...tyepChecked, [name]: true });
    } else {
      setTypeArray([
        ...typeArray.filter(function (item) {
          return item !== e.target.value;
        }),
      ]);
      if (e.target.name === "Ui/Ux") {
        setFormData({
          ...formData,
          uiUxImage: "",
          uiUxImageMobile: "",
          uiUxImageMobileFileName: "",
          uiUxImageFileName: "",
        });
      } else if (e.target.name === "website") {
        setFormData({
          ...formData,
          websiteImage: "",
          websiteImageMobile: "",
          websiteImageFileName: "",
          websiteImageMobileFileName: "",
        });
      } else {
        setFormData({
          ...formData,
          mobileAppImage: "",
          mobileAppImageMobile: "",
          mobileAppImageFileName: "",
          mobileAppImageMobileFileName: "",
        });
      }
      setTypeChecked({ ...tyepChecked, [name]: false });
    }
  };
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
                    noValidate
                    onSubmit={handleSubmit}
                  >
                    <div className="form-group row mt-3">
                      <label className="col-lg-3 col-form-label form-control-label">
                        Type
                      </label>
                      <div className="col-lg-9">
                        <div class="form-check-inline">
                          <label class="form-check-label d-flex">
                            <input
                              type="checkbox"
                              id="Ui/Ux"
                              name="Ui/Ux"
                              class="form-check-input mr-2"
                              value="Ui/Ux"
                              checked={tyepChecked.isUIUX}
                              onChange={(e) => handleType(e, "isUIUX")}
                            />
                            <label
                              className=""
                              htmlFor="Ui/Ux"
                              style={{ marginLeft: "0.2rem" }}
                            >
                              Ui/Ux
                            </label>
                          </label>
                        </div>
                        <div class="form-check-inline">
                          <label class="form-check-label">
                            <input
                              type="checkbox"
                              id="website"
                              name="website"
                              class="form-check-input"
                              value="website"
                              checked={tyepChecked.isWebsite}
                              onChange={(e) => handleType(e, "isWebsite")}
                            />
                            <label
                              htmlFor="website"
                              style={{ marginLeft: "0.2rem" }}
                            >
                              Website
                            </label>
                          </label>
                        </div>
                        <div class="form-check-inline">
                          <label class="form-check-label">
                            <input
                              type="checkbox"
                              class="form-check-input"
                              name="App"
                              id="App"
                              value="App"
                              checked={tyepChecked.isMobile}
                              onChange={(e) => handleType(e, "isMobile")}
                            />
                            <label
                              style={{ marginLeft: "0.2rem" }}
                              htmlFor="App"
                            >
                              App
                            </label>
                          </label>
                        </div>
                        {/* <select
                          className="form-control pt-0 pb-0"
                          id="user_time_zone"
                          size="0"
                          name="type"
                          value={formData?.type}
                          required
                          onChange={(e) => {
                            handleChange(e);
                            handleFields(e);
                          }}
                        >
                          <option>Select</option>
                          <option value="Ui-Ux">UI/UX</option>
                          <option value="Web">Website</option>
                          <option value="Mobile">Mobile</option>
                        </select> */}
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
                      <div className="col-lg-3">
                        <label className=" col-form-label form-control-label">
                          Banner Image
                        </label>
                      </div>
                      <div className="col-lg-9 position-relative">
                        <input
                          className="col-lg-9 form-control file-control"
                          value={formData.bannerImageFileName}
                          style={{ padding: "1.3rem" }}
                          disabled
                        />
                        <input
                          className="form-control d-none align-item-center position-relative"
                          type="file"
                          id="bannerImage"
                          required
                          name="bannerImage"
                          onChange={(e) => {
                            getBase64(
                              e.target.files[0],
                              e.target.files[0].name,
                              "bannerImage"
                            );
                          }}
                        />
                        <label
                          className="btn position-absolute p-2 choose-btn"
                          htmlFor="bannerImage"
                        >
                          Choose File
                        </label>
                      </div>
                    </div>
                    <div className="form-group row mt-3">
                      <div className="col-lg-3">
                        <label className=" col-form-label form-control-label">
                          Card Image
                        </label>
                      </div>
                      <div className="col-lg-9 position-relative">
                        <input
                          className="col-lg-9 form-control file-control"
                          value={formData.cardImageFileName}
                          style={{ padding: "1.3rem" }}
                          disabled
                        />
                        <input
                          className="form-control d-none align-item-center position-relative"
                          type="file"
                          id="cardImage"
                          required
                          name="cardImage"
                          onChange={(e) => {
                            getBase64(
                              e.target.files[0],
                              e.target.files[0].name,
                              "cardImage"
                            );
                          }}
                        />
                        <label
                          className="btn position-absolute p-2 choose-btn"
                          htmlFor="cardImage"
                        >
                          Choose File
                        </label>
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
                    {typeArray.filter((item) => item === "App").length == 1 && (
                      <>
                        <div className="form-group row mt-3">
                          <div className="col-lg-3">
                            <label className=" col-form-label form-control-label">
                              Mobile App Image
                            </label>
                          </div>
                          <div className="col-lg-9 position-relative">
                            <input
                              className="col-lg-9 form-control file-control"
                              value={formData.mobileAppImageFileName}
                              style={{ padding: "1.3rem" }}
                              disabled
                            />
                            <input
                              className="form-control d-none align-item-center position-relative"
                              type="file"
                              id="mobileAppImage"
                              required
                              name="mobileAppImage"
                              onChange={(e) => {
                                getBase64(
                                  e.target.files[0],
                                  e.target.files[0].name,
                                  "mobileAppImage"
                                );
                              }}
                            />
                            <label
                              className="btn position-absolute p-2 choose-btn"
                              htmlFor="mobileAppImage"
                            >
                              Choose File
                            </label>
                          </div>
                        </div>
                        <div className="form-group row mt-3">
                          <div className="col-lg-3">
                            <label className=" col-form-label form-control-label">
                              Mobile App Image For Mobile
                            </label>
                          </div>
                          <div className="col-lg-9 position-relative">
                            <input
                              className="col-lg-9 form-control file-control"
                              value={formData.mobileAppImageMobileFileName}
                              style={{ padding: "1.3rem" }}
                              disabled
                            />
                            <input
                              className="form-control d-none align-item-center position-relative"
                              type="file"
                              id="mobileAppImageMobile"
                              required
                              name="mobileAppImageMobile"
                              onChange={(e) => {
                                getBase64(
                                  e.target.files[0],
                                  e.target.files[0].name,
                                  "mobileAppImageMobile"
                                );
                              }}
                            />
                            <label
                              className="btn position-absolute p-2 choose-btn"
                              htmlFor="mobileAppImageMobile"
                            >
                              Choose File
                            </label>
                          </div>
                        </div>
                      </>
                    )}
                    {typeArray.filter((item) => item === "Ui/Ux").length ==
                      1 && (
                      <>
                        <div className="form-group row mt-3">
                          <div className="col-lg-3">
                            <label className=" col-form-label form-control-label">
                              Ui/Ux Image
                            </label>
                          </div>
                          <div className="col-lg-9 position-relative">
                            <input
                              className="col-lg-9 form-control file-control"
                              value={formData.uiUxImageFileName}
                              style={{ padding: "1.3rem" }}
                              disabled
                            />
                            <input
                              className="form-control d-none align-item-center position-relative"
                              type="file"
                              id="uiUxImage"
                              required
                              name="uiUxImage"
                              onChange={(e) => {
                                getBase64(
                                  e.target.files[0],
                                  e.target.files[0].name,
                                  "uiUxImage"
                                );
                              }}
                            />
                            <label
                              className="btn position-absolute p-2 choose-btn"
                              htmlFor="uiUxImage"
                            >
                              Choose File
                            </label>
                          </div>
                        </div>

                        <div className="form-group row mt-3">
                          <div className="col-lg-3">
                            <label className=" col-form-label form-control-label">
                              Ui/Ux Image Mobile
                            </label>
                          </div>
                          <div className="col-lg-9 position-relative">
                            <input
                              className="col-lg-9 form-control file-control"
                              value={formData.uiUxImageMobileFileName}
                              style={{ padding: "1.3rem" }}
                              disabled
                            />
                            <input
                              className="form-control d-none align-item-center position-relative"
                              type="file"
                              id="uiUxImageMobile"
                              required
                              name="uiUxImageMobile"
                              onChange={(e) => {
                                getBase64(
                                  e.target.files[0],
                                  e.target.files[0].name,
                                  "uiUxImageMobile"
                                );
                              }}
                            />
                            <label
                              className="btn position-absolute p-2 choose-btn"
                              htmlFor="uiUxImageMobile"
                            >
                              Choose File
                            </label>
                          </div>
                        </div>
                      </>
                    )}
                    {typeArray.filter((item) => item === "website").length ==
                      1 && (
                      <>
                        <div className="form-group row mt-3">
                          <div className="col-lg-3">
                            <label className=" col-form-label form-control-label">
                              Website Image
                            </label>
                          </div>
                          <div className="col-lg-9 position-relative">
                            <input
                              className="col-lg-9 form-control file-control"
                              value={formData.websiteImageFileName}
                              style={{ padding: "1.3rem" }}
                              disabled
                            />
                            <input
                              className="form-control d-none align-item-center position-relative"
                              type="file"
                              id="websiteImage"
                              required
                              name="websiteImage"
                              onChange={(e) => {
                                getBase64(
                                  e.target.files[0],
                                  e.target.files[0].name,
                                  "websiteImage"
                                );
                              }}
                            />
                            <label
                              className="btn position-absolute p-2 choose-btn"
                              htmlFor="websiteImage"
                            >
                              Choose File
                            </label>
                          </div>
                        </div>

                        <div className="form-group row mt-3">
                          <div className="col-lg-3">
                            <label className=" col-form-label form-control-label">
                              Website Image Mobile
                            </label>
                          </div>
                          <div className="col-lg-9 position-relative">
                            <input
                              className="col-lg-9 form-control file-control"
                              value={formData.websiteImageMobileFileName}
                              style={{ padding: "1.3rem" }}
                              disabled
                            />
                            <input
                              className="form-control d-none align-item-center position-relative"
                              type="file"
                              id="websiteImageMobile"
                              required
                              name="websiteImageMobile"
                              onChange={(e) => {
                                getBase64(
                                  e.target.files[0],
                                  e.target.files[0].name,
                                  "websiteImageMobile"
                                );
                              }}
                            />
                            <label
                              className="btn position-absolute p-2 choose-btn"
                              htmlFor="websiteImageMobile"
                            >
                              Choose File
                            </label>
                          </div>
                        </div>
                      </>
                    )}

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
