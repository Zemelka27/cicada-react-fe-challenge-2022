import "./styles/App.css";
import React from "react";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import HistoricTables from "./components/HistoricTables";
import Chart from "./components/Chart";

export default function App() {
  //-------------------Declare-States---------------------------------------------------------
  const [pairsData, setPairsData] = React.useState([]);
  const [socketData, setSocketData] = React.useState({});
  const [mergedData, setMergedData] = React.useState([]);
  const [historicData, setHistoricData] = React.useState([]);
  const [socketConnectError, setSocketConnectError] = React.useState(true);
  const [socketDataError, setsocketDataError] = React.useState(true);
  const [currentPairId, setCurrentPairId] = React.useState("EURUSD");
  //-----------------Set-pairsData------------------------------------------------------------
  React.useEffect(() => {
    fetch("http://67.205.189.142:8000/pairs")
      .then((response) => response.json())
      .then((data) => setPairsData(data));
  }, []);
  //-----------------Set-currentPairId---------------------------------------------------------
  React.useEffect(() => {
    setCurrentPairId(pairsData[0] ? pairsData[0].id : "");
  }, [pairsData]);
  //-----------------Set-socketData------------------------------------------------------------
  React.useEffect(() => {
    let socket = new WebSocket("ws://67.205.189.142:8000/websockets/");

    const handleOpen = () => {
      socket.send(JSON.stringify({ action: "subscribe", pair: currentPairId }));
    };

    const handleMessage = (event) => {
      if (event.data[0] === "{") {
        let incomingData = JSON.parse(event.data);

        setSocketData(() => ({
          ...incomingData,
          point: incomingData.point.toFixed(5),
          lowestPoint: incomingData.point,
          highestPoint: incomingData.point,
        }));
        setsocketDataError(false);
      } else {
        setsocketDataError(true);
      }
    };

    const handleClose = () => {
      console.log("disconnected");
      setSocketConnectError(true);
    };

    socket.addEventListener("open", handleOpen);
    socket.addEventListener("message", handleMessage);
    socket.addEventListener("close", handleClose);

    return () => {
      socket.removeEventListener("open", handleOpen);
      socket.removeEventListener("message", handleMessage);
      socket.removeEventListener("close", handleClose);
      socket.close();
      setSocketConnectError(false);
    };
  }, [currentPairId, socketConnectError]);
  //-----------------Set-socketData-and-pairsData-to-mergedData--------------------------------------------------
  React.useEffect(() => {
    setMergedData(pairsData);
  }, [pairsData]);

  React.useEffect(() => {
    setMergedData((prevState) =>
      prevState.map((obj) => {
        if (obj.id === socketData.currency) {
          let currentDate = new Date();

          return {
            ...obj,
            point: socketData.point,
            lowestPoint:
              obj.lowestPoint < socketData.point
                ? obj.lowestPoint
                : socketData.point,
            highestPoint:
              obj.highestPoint > socketData.point
                ? obj.highestPoint
                : socketData.point,
            date: currentDate.toUTCString(),
          };
        } else {
          return obj;
        }
      })
    );
  }, [socketData]);
  //---------------------------Set-historicData------------------------------------------------
  React.useEffect(() => {
    fetch(`http://67.205.189.142:8000/historic-data/${currentPairId}`)
      .then((response) => response.json())
      .then((data) => data["Time Series FX (Daily)"])
      .then((data) => Object.entries(data))
      .then((data) =>
        data.map((historicData) => {
          let formattedDate = new Date(historicData[0]).toLocaleString(
            "en-US",
            {
              month: "long",
              day: "numeric",
              year: "numeric",
            }
          );
          return {
            date: formattedDate,
            open: historicData[1]["1. open"],
            close: historicData[1]["4. close"],
            low: historicData[1]["3. low"],
            high: historicData[1]["2. high"],
            difference:
              historicData[1]["4. close"] - historicData[1]["1. open"],
          };
        })
      )
      .then((data) => setHistoricData(data));
  }, [currentPairId]);
  //--------------------------Switch-currencyPairId-------------------------------------------------
  function handleClick(pairId) {
    setCurrentPairId(pairId);
  }
  //---------------------------------------------------------------------------
  return (
    <div className="App">
      <Nav
        pairsData={pairsData}
        currentPairId={currentPairId}
        handleClick={handleClick}
      />
      {socketDataError ? (
        <div className="error">
          <div className="loading">Loading...</div>
          <div className="loading--error">
            If after 3-5 seconds there is no data received, that means that we
            have a problem with with our server and we are working on it.
          </div>
        </div>
      ) : (
        <Banner mergedData={mergedData} currentPairId={currentPairId} />
      )}
      <HistoricTables historicData={historicData} />
      <Chart historicData={historicData} />
    </div>
  );
}
