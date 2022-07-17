import ReactApexChart from "react-apexcharts";
import { styled, useTheme } from "@material-ui/styles";
import DashCard from "./DashCard";
import DashCardHeader from "./DashCardHeader";
import { Box } from "@mui/system";

const DivStyle = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(1),
  "& .apexcharts-legend": {
    borderTop: `1px solid ${theme.palette.gray.light}`,
    padding: `${theme.spacing(2.5)}px ${theme.spacing(1)}px`,
  },
  "& .apexcharts-tooltip": {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    border: `1px solid ${theme.palette.gray.light}`,
    borderRadius: 25,
    paddingTop: 2,
  },
}));

const SERIES_DATA = [29.8, 24.2, 6.2];

const CurrentVisits = () => {
  const theme = useTheme();

  const chartOptions = {
    labels: [
      "Institutional Securities",
      "Wealth Management",
      "Investment Management",
    ],
    stroke: { colors: [theme.palette.background.paper] },
    colors: [
      theme.palette.success.main,
      theme.palette.info.main,
      theme.palette.warning.light,
      theme.palette.error.main,
    ],
    legend: {
      position: "bottom",
      horizontalAlign: "center",
    },
    dataLabels: { enabled: true, dropShadow: { enabled: false } },
    tooltip: {
      fillSeriesColor: false,
      y: {
        title: {
          formatter: (seriesName) => `#${seriesName}`,
        },
      },
    },
  };

  return (
    <DashCard>
      <DashCardHeader
        title="Net revenues (FY 2021)"
        subheader="in billion dollars"
      />

      <DivStyle>
        <ReactApexChart
          type="pie"
          series={SERIES_DATA}
          options={chartOptions}
          height={350}
        />
      </DivStyle>
    </DashCard>
  );
};

export default CurrentVisits;
