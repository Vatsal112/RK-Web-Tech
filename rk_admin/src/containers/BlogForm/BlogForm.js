import React, { useState, useEffect } from "react";
import QuillEditor from "../../components/Quill-editor/QuillEditor";
import apiClient from "../../utils/http-common";
import { useMutation } from "@tanstack/react-query";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { useSelector } from "react-redux";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const fetchData = (id) => {
  const data = apiClient.get(`/blog/${id}`);
  return data;
};
const BlogForm = () => {
  const stateData = useSelector((state) => state.app);
  const queryClient = useQueryClient();
  let { fileName, blob } = "";
  const [quillData, setQuillData] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    blogImage: "",
    content: "",
    date: "",
    isActive: true,
  });

  useEffect(() => {
    setFormData({ ...formData, content: quillData });
  }, [quillData]);

  useEffect(() => {
    if (stateData?.client?.formId) {
      fetchData(stateData?.client?.formId).then((data) => {
        setFormData(data?.data?.data);
        setQuillData(data?.data?.data?.content);
      });
    }
  }, [stateData?.client?.formId]);
  function getBase64(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      setFormData({ ...formData, blogImage: reader.result });

      console.log(reader.result);
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  }

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

  // useEffect(() => {}, [data.id]);
  //api call for form
  const { isLoading: isPostingTutorial, mutate: postTutorial } = useMutation(
    async () => {
      return await apiClient.post("/add-blog", formData);
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
  const { isLoading: isBlogUpdate, mutate: updateBlog } = useMutation(
    async (id) => {
      return await apiClient.put(`/blog/${id}`, formData);
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
          style={{ width: "calc(98vw - 250px)", marginLeft: "auto" }}
        >
          <div className="row justify-content-center">
            <div className="col-md-12">
              <span className="anchor" id="formUserEdit"></span>
              <hr className="my-5" />
              <div className="card card-outline-secondary">
                <div className="card-header">
                  <h3 className="mb-0">Blog Information</h3>
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
                          value={formData.title}
                          name="title"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-group row mt-3">
                      <label className="col-lg-3 col-form-label form-control-label">
                        Blog Image
                      </label>
                      <div className="col-lg-9">
                        <input
                          className="form-control"
                          style={{ height: "100%" }}
                          type="file"
                          required
                          id="formFile"
                          name="blogImage"
                          // value={formData?.blogImage}
                          onChange={(e) => getBase64(e.target.files[0])}
                        />
                      </div>
                    </div>
                    <div className="form-group row mt-3">
                      <label className="col-lg-3 col-form-label form-control-label">
                        Content
                      </label>
                      <div className="col-lg-9">
                        <QuillEditor
                          name="content"
                          value={quillData}
                          setValue={setQuillData}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group row mt-3">
                      <label className="col-lg-3 col-form-label form-control-label">
                        Date
                      </label>
                      <div className="col-lg-9">
                        <input
                          className="form-control"
                          type="date"
                          required
                          value={formData.date}
                          name="date"
                          onChange={handleChange}
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
                            value={true}
                            onChange={handleRadios}
                            checked={formData?.isActive}
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
                            value={false}
                            checked={!formData?.isActive}
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

export default BlogForm;