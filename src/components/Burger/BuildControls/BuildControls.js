import React from "react";
import BuildControlsStyle from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const buildControls = (props) => {
  const controls = [
    { label: "Salad", type: "salad" },
    { label: "Bacon", type: "bacon" },
    { label: "Cheese", type: "cheese" },
    { label: "Meat", type: "meat" },
  ];
  return (
    <div className={BuildControlsStyle.BuildControlsWrapper}>
      <span className={BuildControlsStyle.BuildControlsTotalPrice}>
        Total: {props.totalPrice.toFixed(2)}$
      </span>
      <button 
        className={BuildControlsStyle.OrderBtn} 
        disabled={!props.canPurchase}
        onClick={props.openPurchaseModal}
      >
        Order Now!
      </button>
      <div className={BuildControlsStyle.BuildControlsContainer}>
        {controls.map((c) => (
          <BuildControl
            key={c.type}
            label={c.label}
            added={() => {props.ingredientAdded(c.type)}}
            removed={() => {props.ingredientRemoved(c.type)}}
            disabled={props.disabledInfo[c.type]}
          />
        ))}
      </div>
    </div>
  );
};

export default buildControls;
