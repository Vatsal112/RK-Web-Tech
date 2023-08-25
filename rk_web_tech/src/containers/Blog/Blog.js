import React, { useState } from "react";
import BlogCard from "../../components/BlogCard/BlogCard";
import PageBanner from "../../components/PageBanner/PageBanner";
import Title from "../../components/Title/Title";
import "./Blog.css";
import apiClient from "../../utils/http-common";
import { useQuery } from "@tanstack/react-query";
import useDynamicTitle from "../../hooks/useDynamicTitle";

const fetchData = async () => {
  const data = await apiClient.get("/blogs");
  return data.data.data;
};
const Blog = () => {
  useDynamicTitle("Blogs | RK WebTechnology");
  const { data, isLoading, isError, error } = useQuery(["blogs"], fetchData);
  data?.sort((a, b) => new Date(b.date) - new Date(a.date));
  const [index, setIndex] = useState(9);
  const initialPost = data?.slice(0, index);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleLoadMore = () => {
    setIndex(index + 3);

    if (index >= data.length) {
      setIsCompleted(true);
    } else {
      setIsCompleted(false);
    }
  };

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
            <div className="container mb-5">
              <div className="row">
                {initialPost?.map((item) => {
                  return <BlogCard cardData={item} />;
                })}
              </div>
            </div>
            {!isCompleted && (
              <button
                className="btn d-block m-auto mt-5 load-more"
                onClick={handleLoadMore}
              >
                Load More
              </button>
            )}
          </section>
        </>
      )}
    </>
  );
};

export default Blog;
