import Chart from "react-apexcharts";
import DashCard from "./DashCard";
import DashCardHeader from "./DashCardHeader";
import DashCardBox from "./DashCardBox";

// chart data series
const SERIES = [
  {
    name: "Net income",
    type: "area",
    data: [4645, 716, 3613, 3667, 6279, 6123, 6216, 8883, 4721, 7111, 9068],
  },
  {
    name: "Net revenues",
    type: "area",
    data: [
      32304, 26178, 32493, 34275, 35155, 34631, 37945, 40107, 41538, 48757,
      59755,
    ],
  },
];

const ChartSiteVisits = () => {
  const options = {
    chart: {
      id: "basic-bar",
      stacked: false,
      toolbar: {
        show: true,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "15%",
        borderRadius: 4,
      },
    },
    stroke: { curve: "smooth", width: [5, 5] },
    markers: { size: 5 },
    fill: {
      opacity: [0.85, 0.25, 1],
      gradient: {
        inverseColors: false,
        shade: "light",
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100],
      },
    },
    xaxis: {
      type: "year",
    },
    labels: [
      "2011",
      "2012",
      "2013",
      "2014",
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
      "2021",
    ],
    tooltip: {
      shared: true,
      intersect: false,
      x: { show: true },
      y: {
        formatter: (val) => (val !== undefined ? `${val.toFixed(0)} m` : val),
      },
      style: {
        fontFamily: "inherit",
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
    },
  };

  return (
    <DashCard>
      <DashCardHeader
        title="Net income/revenues (2011-2021)"
        subheader="in million dollars"
      />

      <DashCardBox>
        <Chart options={options} series={SERIES} type="line" height={280} />
      </DashCardBox>
    </DashCard>
  );
};

export default ChartSiteVisits;
