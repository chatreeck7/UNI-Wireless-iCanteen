export const chart_props = {
  timeseriesDs: {
    type: "timeseries",
    width: "700",
    height: "500",
    dataEmptyMessage: "Fetching data...",
    dataSource: {
      xAxis: {
        initialInterval: {
          from: "10/03/2023 11:10:00",
          to: "10/03/2023 16:00:00"
        }
      },
      caption: { text: "Population in iCanteen" },
      data: null,
      extensions: {
        standardRangeSelector: {
          enabled: "1"
        }
      },
      yAxis: [
        {
          plot: [
            {
              value: "Population (person)"
            }
          ]
        }
      ]
    }
  }
};

export const mock_Data = [
  { count: 68, id: "11", timestamp: 1696176061181 },
  { count: 70, id: "10", timestamp: 1696176055624 }
];
