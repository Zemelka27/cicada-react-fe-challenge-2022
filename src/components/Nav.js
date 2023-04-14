import "../styles/Nav.css";
import React from "react";

export default function Nav(props) {
  //-------------------Declare-Styles---------------------------------------------------------
  const stylesActive = {
    color: "white",
    background: "#2D3748",
    borderTop: "3px solid #00FFC4",
  };
  const stylesInactive = {
    color: "grey",
    background: "#202837",
  };
  //--------------------create-Elements--------------------------------------------------------------
  const nav = props.pairsData.map((pair) => (
    <div
      className="nav--item"
      key={pair.id}
      onClick={() => {
        props.handleClick(pair.id);
      }}
      style={props.currentPairId === pair.id ? stylesActive : stylesInactive}
    >
      {pair.label}
    </div>
  ));
  //-----------------------------------------------------------------------------------
  return <div className="nav">{nav}</div>;
}
