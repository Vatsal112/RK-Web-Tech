import React from "react";
import BlogCard from "../../components/BlogCard/BlogCard";
import PageBanner from "../../components/PageBanner/PageBanner";
import Title from "../../components/Title/Title";
import "./Blog.css";
import apiClient from "../../utils/http-common";
import { useQuery } from "@tanstack/react-query";

const fetchData = async () => {
  const data = await apiClient.get("/blogs");
  return data.data.data;
};
const Blog = () => {
  const { data, isLoading, isError, error } = useQuery(["blogs"], fetchData);

  return (
    <>
      {isLoading ? (
        <div className="d-flex justify-content-center h-100 w-100`">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <PageBanner
            mainTitle="Contact Us"
            firstText="Home"
            firstLink="/"
            secondText="Contact Us"
            // thirdText="Mobile Application Development"
          />

          <section className="blog-sec pt-4 pb-4">
            <Title normalText="Blog" />
            <div className="container">
              <div className="row">
                {data?.map((item) => {
                  return <BlogCard cardData={item} />;
                })}
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Blog;
