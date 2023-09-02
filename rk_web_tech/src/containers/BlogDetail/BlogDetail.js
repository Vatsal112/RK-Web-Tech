import React from "react";
import "./blogdetails.css";
import { useLocation } from "react-router-dom";
import PageBanner from "../../components/PageBanner/PageBanner";
import useDynamicTitle from "../../hooks/useDynamicTitle";

const BlogDetail = () => {
  const location = useLocation();
  const propsData = location.state;
  useDynamicTitle(`${propsData?.title} | RK WebTechnology`);
  return (
    <>
      <PageBanner
        mainTitle={propsData?.title}
        firstText="Home"
        firstLink="/"
        secondText="Blog"
        thirdText="Blog Detail"
      />
      <section className="blog-details">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6">
              <img src={propsData.mainImage} alt="" className="card-img" />
            </div>
            <div className="col-12 col-md-6">
              <h2 className="content">{propsData.title}</h2>
            </div>
          </div>
        </div>
        <div
          className="container mt-5 pb-5"
          dangerouslySetInnerHTML={{
            __html: propsData?.content,
          }}
        ></div>
      </section>
    </>
  );
};

export default BlogDetail;
