import React from "react";
import { RendererStars } from "./RendererStar";
import arrow from "../images/arrow.svg";
import "../css-styles/HouseSheets.scss";

const CollapseItem = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div className="description-wrapper">
      <button
        className="button-info"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="button-title">{title}</h3>
        <img
          src={arrow}
          alt="arrow"
          className={`arrow ${isExpanded ? "rotate180" : "rotateReverse"}`}
        />
      </button>
      <div className={`description-info ${isExpanded ? "active" : ""}`}>
        {content}
      </div>
    </div>
  );
};

const HouseSheets = ({ property }) => {
  const { id, title, description, location, equipments, rating, tags, host } =
    property;

  return (
    <div className="property-description" key={id}>
      <div className="title-rating-wrapper">
        <div className="title-name-wrapper">
          <div className="title-location-wrapper">
            <h2>{title}</h2>
            <p>{location}</p>
          </div>
          <div className="tags-wrapper">
            {tags.map((tag, index) => (
              <span className="tag" key={index}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="rate-tag-wrapper">
          <div className="host-name-wrapper">
            <p>{host.name}</p>
            <img
              className="host-picture"
              src={host.picture}
              alt={host.name}
            />
          </div>
          <div className="rating">
            <RendererStars rating={rating} />
          </div>
        </div>
      </div>

      <div className="description-equip-wrapper">
        <CollapseItem title="Description" content={description} />
        <CollapseItem title="Équipements"
          content={
            <ul className="content-item-equipement">
              {equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
};

export default HouseSheets;