import ReactApexChart from "react-apexcharts";
import DashCard from "./DashCard";
import DashCardBox from "./DashCardBox";
import DashCardHeader from "./DashCardHeader";

const SERIES_DATA = [
  {
    data: [
      78.05, 76.06, 86.14, 79.9, 86.66, 89.97, 100.96, 96.65, 93.36, 100.5,
      95.16, 102.12,
    ],
  },
];

const chartOptions = {
  chart: { toolbar: { show: true } },
  //markers: { show: false },
  xaxis: {
    categories: [
      "Jul 2022",
      "Jun 2022",
      "Apr 2022",
      "May 2022",
      "Mar 2022",
      "Feb 2022",
      "Jan 2022",
      "Dec 2021",
      "Nov 2021",
      "Oct 2021",
      "Sep 2021",
      "Aug 2021",
      "Jul 2021",
    ],
  },
  plotOptions: {
    bar: {
      barHeight: "25%",
      borderRadius: 4,
      horizontal: false,
      colors: {
        ranges: [
          {
            color: "#ff0",
          },
        ],
      },
    },
  },
  dataLabels: { enabled: false },
  tooltip: {
    marker: { show: false },

    x: { show: true },
    y: {
      title: {
        formatter: (sname) => `price (USD):`,
      },
    },
  },
};

const ConversionRate = () => {
  return (
    <DashCard>
      <DashCardHeader title="Stock prices" subheader="last 12 month in USD" />

      <DashCardBox>
        <ReactApexChart
          type="bar"
          series={SERIES_DATA}
          options={chartOptions}
          height={300}
        />
      </DashCardBox>
    </DashCard>
  );
};

export default ConversionRate;
