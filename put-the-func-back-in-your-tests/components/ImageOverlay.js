import React from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/core";

const ImageOverlay = ({ text }) => (
 
    <h1
      css={css`
        bottom: 20px;
        text-align: left;
        position: absolute;
      `}
    >
      <span 
        css={css`
            color: white;
            letter-spacing: -1px;
            background: rgb(0, 0, 0);
            background: rgba(0, 0, 0, 0.7);
            padding: 10px;
            text-transform: uppercase;
        `}>
            {text}
      </span>
    </h1>

);

ImageOverlay.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ImageOverlay;
