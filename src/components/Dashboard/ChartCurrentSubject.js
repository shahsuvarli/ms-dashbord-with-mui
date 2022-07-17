import { styled } from "@material-ui/styles";
import DashCard from "./DashCard";
import DashCardHeader from "./DashCardHeader";
import { Box } from "@mui/system";
import ReactApexChart from "react-apexcharts";

const DivStyle = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(1),
  "& .apexcharts-legend": {
    borderTop: `1px solid ${theme.palette.gray.light}`,
    padding: `20px 4px 4px 4px`,
  },
}));

// series data for radar
const SERIES_DATA = [
  {
    name: "Series 1",
    // data: [80, 50, 30, 40, 100, 20],
    data: [80, 50, 30],
  },
  {
    name: "Series 2",
    // data: [20, 30, 40, 80, 20, 80],
    data: [20, 30, 40],
  },
  {
    name: "Series 3",
    // data: [44, 76, 78, 13, 43, 10],
    data: [44, 76, 78],
  },
];

const ChartCurrentSubject = () => {
  const chartOptions = {
    chart: { toolbar: { show: true } },
    stroke: { width: 2 },
    legend: {
      position: "bottom",
      horizontalAlign: "center",
    },
    markers: { size: 3 },
    xaxis: {
      categories: [
        "English",
        "History",
        "Physics",
        // "Geography",
        // "Chinese",
        // "Math",
      ],
    },
    fill: {
      opacity: 0.3,
    },
  };

  return (
    <DashCard>
      <DashCardHeader title="Current Subject" />

      <DivStyle>
        <ReactApexChart
          options={chartOptions}
          series={SERIES_DATA}
          type="radar"
          height={350}
        />
      </DivStyle>
    </DashCard>
  );
};

export default ChartCurrentSubject;
