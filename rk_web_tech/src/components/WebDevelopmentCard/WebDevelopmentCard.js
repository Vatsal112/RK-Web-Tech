import React from "react";
import { Link } from "react-router-dom";

const WebDevelopmentCard = ({ icon, title, para, subtitle }) => {
  return (
    <div class="col-lg-4 col-md-6 mb-4">
      <Link class="dedicated-team-box py-4 px-4">
        <i class={icon}></i>
        <h4 class="mt-3 mb-2 h3">{title}</h4>
        <p>{subtitle}</p>
      </Link>
    </div>
  );
};

export default WebDevelopmentCard;
