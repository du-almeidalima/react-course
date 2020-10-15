import React from "react";
import PropTypes from "prop-types";
import BuildControlStyle from "./BuildControl.module.css";

const buildControl = (props) => {
  return (
    <div className={BuildControlStyle.BuildControlWrapper}>
      <span>{props.label}</span>
      <div className={BuildControlStyle.BuildControlButtonsWrapper}>
        <button className={`${BuildControlStyle.BuildControlBtn} ${BuildControlStyle.More}`}
          onClick={props.added}
        >
          +
        </button>
        <button className={`${BuildControlStyle.BuildControlBtn} ${BuildControlStyle.Less}`}
          onClick={props.removed}
          disabled={props.disabled}
        >
          -
        </button>
      </div>
    </div>
  );
};

buildControl.propTypes = {
  label: PropTypes.string.isRequired,
  added: PropTypes.func.isRequired,
  removed: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

export default buildControl;
