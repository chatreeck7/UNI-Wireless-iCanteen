import React, { useState, useEffect, useCallback } from "react";

import FusionCharts from "fusioncharts";
import ReactFC from "react-fusioncharts";
import TimeSeries from "fusioncharts/fusioncharts.timeseries";

import schema from "../utils/schema";
import { chart_props } from "../utils/chart";
import { ref, onValue, getDatabase } from "firebase/database";
import { objectToArrayOfArrays } from "../utils/transformer";

import "./styles.css";

ReactFC.fcRoot(FusionCharts, TimeSeries);

function ChartViewer(props) {
  const [ds, setds] = useState(chart_props);

  const setRecords = () => {
    const db = getDatabase(props.app);
    const recordRef = ref(db, "records");
    onValue(recordRef, (snapshot) => {
      const data = snapshot.val();
      const formattedData = objectToArrayOfArrays(data);
      loadData(formattedData);
    });
  };

  const loadData = useCallback(
    async (data) => {
      if (data) {
        const fusionTable = new FusionCharts.DataStore().createDataTable(
          data,
          schema
        );
        const options = { ...ds };
        options.timeseriesDs.dataSource.data = fusionTable;
        setds(options);
      }
    },
    [ds]
  );

  useEffect(() => {
    console.log("render");
    if (props.app) {
      console.log("Start set records .....");
      setRecords();
    }
  }, []);

  return (
    <div className="line-chart">
      <ReactFC {...ds.timeseriesDs} />
    </div>
  );
}

export default ChartViewer;
