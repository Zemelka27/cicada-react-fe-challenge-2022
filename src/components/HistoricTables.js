import "../styles/HistoricTables.css";
import React from "react";

export default function HistoricTables(props) {
  //-------------------Declare-States---------------------------------------------------------
  const [sortedHistoricData, setSortedHistoricData] = React.useState([]);
  const [sortedDailyData, setSortedDailyData] = React.useState([]);
  const [historicTableState, setHistoricTableState] = React.useState({
    date: true,
    high: true,
    low: true,
    currentProperty: "date",
  });
  const [dailyTableState, setDailyTableState] = React.useState({
    date: true,
    open: true,
    close: true,
    difference: false,
    currentProperty: "date",
  });
  //-----------------------Set-sortedHistoricData----------------------------------------------------------
  React.useEffect(() => {
    setSortedHistoricData(props.historicData);
  }, [props.historicData]);
  //-----------------------Set-sortedDailyData----------------------------------------------------------
  React.useEffect(() => {
    setSortedDailyData(props.historicData);
  }, [props.historicData]);
  //------------------------Toggle-&-Sort-Historic-Data-------------------------------------------------------
  function sortHistoricData(property) {
    // eslint-disable-next-line array-callback-return
    const sorted = [...props.historicData].sort((a, b) => {
      if (property === "date") {
        if (historicTableState.date === true) {
          return new Date(a.date) - new Date(b.date);
        } else {
          return new Date(b.date) - new Date(a.date);
        }
      } else if (property === "high") {
        if (historicTableState.high === true) {
          return a.high - b.high;
        } else {
          return b.high - a.high;
        }
      } else if (property === "low") {
        if (historicTableState.low === true) {
          return a.low - b.low;
        } else {
          return b.low - a.low;
        }
      }
    });
    setSortedHistoricData(sorted);
    setHistoricTableState((prevState) => ({
      ...prevState,
      [property]: prevState[property] ? false : true,
      currentProperty: property,
    }));
  }
  //------------------------Toggle-&-Sort-Daily-Data-------------------------------------------------------
  function sortDailyData(property) {
    // eslint-disable-next-line array-callback-return
    const sorted = [...props.historicData].sort((a, b) => {
      if (property === "date") {
        if (dailyTableState.date === true) {
          return new Date(a.date) - new Date(b.date);
        } else {
          return new Date(b.date) - new Date(a.date);
        }
      } else if (property === "open") {
        if (dailyTableState.open === true) {
          return a.open - b.open;
        } else {
          return b.open - a.open;
        }
      } else if (property === "close") {
        if (dailyTableState.close === true) {
          return a.close - b.close;
        } else {
          return b.close - a.close;
        }
      } else if (property === "difference") {
        if (dailyTableState.difference === true) {
          return a.difference - b.difference;
        } else {
          return b.difference - a.difference;
        }
      }
    });
    setSortedDailyData(sorted);
    setDailyTableState((prevState) => ({
      ...prevState,
      [property]: prevState[property] ? false : true,
      currentProperty: property,
    }));
  }
  //--------------------------create-Historic-Table-Element-------------------------------------------------------
  const historicPricesDivs = sortedHistoricData.map((data) => (
    <div className="table--items--grid table--items--grid--hp" key={data.date}>
      <div>{data.date}</div>
      <div>{data.high}</div>
      <div>{data.low}</div>
    </div>
  ));
  //--------------------------create-Daily-Table-Element-------------------------------------------------------
  const dailyTrendDivs = sortedDailyData.map((data) => {
    const roundedDifference = data.difference.toFixed(5);
    return (
      <div
        className="table--items--grid table--items--grid--dt"
        key={data.date}
      >
        <div>{data.date}</div>
        <div>{data.open}</div>
        <div>{data.close}</div>
        <div
          style={
            roundedDifference > 0 ? { color: "#00FFC4" } : { color: "#F56565" }
          }
        >
          {roundedDifference > 0 ? `+${roundedDifference}` : roundedDifference}
        </div>
      </div>
    );
  });
  //-----------------------------------------------------------------------------------
  return (
    <div className="tables--grid">
      <div className="table--container">
        <div className="table--title">Historic Prices</div>
        <div className="table--labels--wrapper">
          <div className="table--items--grid table--items--grid--hp table--labels">
            <div
              className="table--sorting--button"
              onClick={() => {
                sortHistoricData("date");
              }}
            >
              Date{" "}
              {historicTableState.currentProperty === "date" && (
                <img
                  src={
                    historicTableState.date
                      ? "../assets/arrow-down.png"
                      : "../assets/arrow-up.png"
                  }
                  alt="arrow"
                />
              )}
            </div>
            <div
              className="table--sorting--button"
              onClick={() => {
                sortHistoricData("high");
              }}
            >
              High{" "}
              {historicTableState.currentProperty === "high" && (
                <img
                  src={
                    historicTableState.high
                      ? "../assets/arrow-down.png"
                      : "../assets/arrow-up.png"
                  }
                  alt="arrow"
                />
              )}
            </div>
            <div
              className="table--sorting--button"
              onClick={() => {
                sortHistoricData("low");
              }}
            >
              Low{" "}
              {historicTableState.currentProperty === "low" && (
                <img
                  src={
                    historicTableState.low
                      ? "../assets/arrow-down.png"
                      : "../assets/arrow-up.png"
                  }
                  alt="arrow"
                />
              )}
            </div>
          </div>
        </div>
        <div className="table--items--wrapper">{historicPricesDivs}</div>
      </div>
      <div className="table--container">
        <div className="table--title">Daily Trend</div>
        <div className="table--labels--wrapper">
          <div className="table--items--grid table--items--grid--dt table--labels">
            <div
              className="table--sorting--button"
              onClick={() => {
                sortDailyData("date");
              }}
            >
              Date{" "}
              {dailyTableState.currentProperty === "date" && (
                <img
                  src={
                    dailyTableState.date
                      ? "../assets/arrow-down.png"
                      : "../assets/arrow-up.png"
                  }
                  alt="arrow"
                />
              )}
            </div>
            <div
              className="table--sorting--button"
              onClick={() => {
                sortDailyData("open");
              }}
            >
              Open{" "}
              {dailyTableState.currentProperty === "open" && (
                <img
                  src={
                    dailyTableState.open
                      ? "../assets/arrow-down.png"
                      : "../assets/arrow-up.png"
                  }
                  alt="arrow"
                />
              )}
            </div>
            <div
              className="table--sorting--button"
              onClick={() => {
                sortDailyData("close");
              }}
            >
              Close{" "}
              {dailyTableState.currentProperty === "close" && (
                <img
                  src={
                    dailyTableState.close
                      ? "../assets/arrow-down.png"
                      : "../assets/arrow-up.png"
                  }
                  alt="arrow"
                />
              )}
            </div>
            <div
              className="table--sorting--button"
              onClick={() => {
                sortDailyData("difference");
              }}
            >
              Difference{" "}
              {dailyTableState.currentProperty === "difference" && (
                <img
                  src={
                    dailyTableState.difference
                      ? "../assets/arrow-down.png"
                      : "../assets/arrow-up.png"
                  }
                  alt="arrow"
                />
              )}
            </div>
          </div>
        </div>
        <div className="table--items--wrapper">{dailyTrendDivs}</div>
      </div>
    </div>
  );
}
