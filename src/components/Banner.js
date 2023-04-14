import "../styles/Banner.css";
import React from "react";

export default function Banner(props) {
  //---------------------------------------------------------------------------
  const [currentData, setCurrentData] = React.useState({});
  //---------------------------------------------------------------------------
  React.useEffect(() => {
    const result = props.mergedData.find(
      ({ id }) => id === props.currentPairId
    );
    setCurrentData(result);
  }, [props.mergedData, props.currentPairId]);
  //---------------------------------------------------------------------------
  return (
    <div className="banner">
      <div className="banner--item banner--item--currency">
        <div className="banner--item--label ">Currency Pair</div>
        <div className="banner--item--value">
          {currentData ? currentData.id : ""}
        </div>
      </div>
      <div className="banner--item">
        <div className="banner--item--label">Current Exchange-Rate Value</div>
        <div className="banner--item--value banner--item--green">
          {currentData ? currentData.point : ""}
        </div>
      </div>
      <div className="banner--item">
        <div className="banner--item--label">Highest Exchange-Rate Today</div>
        <div className="banner--item--value">
          {currentData ? currentData.highestPoint : ""}
        </div>
      </div>
      <div className="banner--item">
        <div className="banner--item--label">Lowest Exchange-Rate Today</div>
        <div className="banner--item--value">
          {currentData ? currentData.lowestPoint : ""}
        </div>
      </div>
      <div className="banner--item">
        <div className="banner--item--label">Last Update (UTC)</div>
        <div className="banner--item--value">
          {currentData ? currentData.date : ""}
        </div>
      </div>
    </div>
  );
}
