import React from "react";
import blog_img from "./Artboard_21_3x.png";
import { Link } from "react-router-dom";

const BlogCard = ({ cardData }) => {
  return (
    <div className="col-12 col-md-4 col-lg-4">
      <Link to={`/blog/${cardData.title}`} state={cardData}>
        <div className="card border-0">
          <img src={cardData?.blogImage} alt="blog img" />
          <div className="content">
            <span className="heading  d-block">white label | 14 min read</span>
            <h3 className="main-head mt-3">{cardData?.title}</h3>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
