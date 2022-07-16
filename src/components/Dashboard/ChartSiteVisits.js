import Chart from "react-apexcharts";
import DashCard from "./DashCard";
import DashCardHeader from "./DashCardHeader";
import DashCardBox from "./DashCardBox";

// chart data series
const SERIES = [
  {
    name: "Net revenues",
    type: "column",
    data: [
      32.3, 26.18, 32.49, 34.28, 35.16, 34.63, 37.95, 40.11, 41.54, 48.76,
      59.76,
    ],
  },
  {
    name: "Net income",
    type: "area",
    data: [4.65, 0.72, 3.61, 3.67, 6.28, 6.12, 6.22, 8.88, 9.24, 11.18, 15.12],
  },
  {
    name: "Team C",
    type: "line",
    data: [4.99, 4.76, 5.25, 5.95, 5.59, 4.93, 6, 6.48, 6.16, 7.67, 10.99],
  },
];

const ChartSiteVisits = () => {
  const options = {
    chart: {
      id: "basic-bar",
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "15%",
        borderRadius: 4,
      },
    },
    stroke: { curve: "smooth", width: [0, 2, 3] },
    markers: { size: 0 },
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
      x: { show: false },
      y: {
        formatter: (val) =>
          val !== undefined ? `${val.toFixed(0)} visits` : val,
      },
      style: {
        fontFamily: "inherit",
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
    },
  };

  return (
    <DashCard>
      <DashCardHeader
        title="Website Visits"
        subheader="(+43%) than last year"
      />

      <DashCardBox>
        <Chart options={options} series={SERIES} type="line" height={300} />
      </DashCardBox>
    </DashCard>
  );
};

export default ChartSiteVisits;
