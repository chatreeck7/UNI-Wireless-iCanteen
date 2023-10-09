import React, { useState, useEffect, useCallback } from "react";
import { Chart } from "react-google-charts";

import { ref, onValue, getDatabase } from "firebase/database";

import "./styles.css";

const options = {
  title: "Current Population Density",
  pieHole: 0.5,
  is3D: false,
  colors: ["#5D62B6", "#FFBD59"]
};

const defaultData = [
  ["Available/Unavailable", "Person"],
  ["Available", 256]
];

function PieChart(props) {
  const [availableSeat, setAvailableSeat] = useState(defaultData);

  const setPresent = () => {
    const db = getDatabase(props.app);
    const presentRef = ref(db, "present");
    onValue(presentRef, (snapshot) => {
      const data = snapshot.val();
      console.log("Data: ", data);
      console.log("Count: ", data.count);
      setAvailableSeat([
        ["Available/Unavailable", "Person"],
        ["Available", 256 - data.count],
        ["Unavailable", data.count]
      ]);
      console.log(availableSeat);
    });
  };

  useEffect(() => {
    console.log("render");
    if (props.app) {
      console.log("Start set records .....");
      setPresent();
    }
  }, []);

  return (
    <div className="pie-chart">
      <Chart
        chartType="PieChart"
        width="100%"
        height="400px"
        data={availableSeat}
        options={options}
      />
    </div>
  );
}

export default PieChart;
