import React from "react";
import { GoPerson } from "react-icons/go";
import StarRating from "../RatingStar/RatingStar";
const ReviewCard = ({
  quote,
  customerName,
  customerDesig,
  ratings,
  imagesProfile,
}) => {
  return (
    <div role="listitem" className="testimonial w-dyn-item">
      <div className="w-layout-grid flex-1col">
        <div className="quote-wr">
          <div className="quote-content">
            <img
              src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364ecdb1295f374d0bd75eb_quote.svg"
              loading="lazy"
              width="27"
              height="22"
              alt=""
              id="w-node-_73088e82-b789-5ef1-adb4-ef3629f7abfb-3e345034"
              className="quote-mark sm"
            />
            <div className="rich-text bold-text w-richtext">
              <p>{quote}</p>
            </div>
          </div>
          <div className="stars-wr">
            <img
              src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/622f3bd37169874185646b6d_clutch-logo.svg"
              loading="lazy"
              width="51"
              height="15"
              alt="Clutch"
              className="platfrom-logo"
            />
            <div className="_5stars-wr">
              <StarRating value={ratings} />
            </div>
          </div>
        </div>
        <div className="client-info-wr">
          <div className="avatar-wr">
            {imagesProfile ? (
              <img src={imagesProfile} className="avatar-img" />
            ) : (
              <GoPerson style={{ fontSize: "2rem" }} />
            )}
          </div>
          <div className="flex-1col clear-row-padding">
            <div className="paragraph1">{customerName}</div>
            <div className="paragraph1 sm">{customerDesig}</div>
          </div>
        </div>
      </div>
      <div className="w-embed"></div>
    </div>
  );
};

export default ReviewCard;
