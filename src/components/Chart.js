import "../styles/Chart.css";
import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export default function Chart(props) {
  //-------------------Declare-States---------------------------------------------------------
  const [reversedHistoricData, setReversedHistoricData] = React.useState([]);
  const [chartState, setChartState] = React.useState({
    open: true,
    close: true,
    high: true,
    low: true,
    difference: false,
  });
  //-------------------set-reversedHistoricData---------------------------------------------------------
  React.useEffect(() => {
    const sorted = [...props.historicData].sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );
    setReversedHistoricData(sorted);
  }, [props.historicData]);
  //--------------------toggle-Graphs------------------------------------------------------
  function toggleChartState(property) {
    setChartState((prevState) => ({
      ...prevState,
      [property]: prevState[property] ? false : true,
    }));
  }
  //---------------------------------------------------------------------------

  return (
    <div className="chart--wrapper">
      <div className="chart--button--container">
        <div
          className="chart--button"
          onClick={() => toggleChartState("high")}
          style={
            chartState.high
              ? {
                  borderTop: "2px solid #00FFC4",
                  color: "white",
                }
              : {}
          }
        >
          High
        </div>
        <div
          className="chart--button"
          onClick={() => toggleChartState("low")}
          style={
            chartState.low
              ? {
                  borderTop: "2px solid #F56565",
                  color: "white",
                }
              : {}
          }
        >
          Low
        </div>
        <div
          className="chart--button"
          style={
            chartState.open
              ? {
                  borderTop: "2px solid #FFBF00",
                  color: "white",
                }
              : {}
          }
          onClick={() => toggleChartState("open")}
        >
          Open
        </div>
        <div
          className="chart--button"
          onClick={() => toggleChartState("close")}
          style={
            chartState.close
              ? {
                  borderTop: "2px solid #6495ED",
                  color: "white",
                }
              : {}
          }
        >
          Close
        </div>
        <div
          className="chart--button"
          onClick={() => toggleChartState("difference")}
          style={
            chartState.difference
              ? {
                  borderTop: "2px solid #A7C957",
                  color: "white",
                }
              : {}
          }
        >
          Difference
        </div>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={reversedHistoricData}
          margin={{ top: 5, right: -5, bottom: 20, left: 40 }}
        >
          {chartState.high && (
            <Line
              type="linear"
              dataKey="high"
              stroke="#00FFC4"
              dot={false}
              isAnimationActive={false}
            />
          )}
          {chartState.low && (
            <Line
              type="linear"
              dataKey="low"
              stroke="#F56565"
              dot={false}
              isAnimationActive={false}
            />
          )}
          {chartState.open && (
            <Line
              type="linear"
              dataKey="open"
              stroke="#FFBF00"
              dot={false}
              isAnimationActive={false}
            />
          )}
          {chartState.close && (
            <Line
              type="linear"
              dataKey="close"
              stroke="#6495ED"
              dot={false}
              isAnimationActive={false}
            />
          )}
          {chartState.difference && (
            <Line
              type="linear"
              dataKey="difference"
              stroke="#A7C957"
              dot={false}
              isAnimationActive={false}
            />
          )}
          <XAxis dataKey="date" />
          <YAxis orientation="right" domain={["auto", "auto"]} />
          <CartesianGrid strokeDasharray="2 2" />
          <Tooltip
            isAnimationActive={false}
            wrapperStyle={{ borderWidth: "1px" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
