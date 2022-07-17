import { Timeline } from "@material-ui/lab";
import { styled } from "@material-ui/styles";
import DashCard from "./DashCard";
import DashCardHeader from "./DashCardHeader";
import OrderTimelineItem from "./OrderTimelineItem";

const TimelineStyle = styled(Timeline)(({ theme }) => ({
  paddingLeft: theme.spacing(6),

  "& .MuiTimelineItem-missingOppositeContent:before": {
    display: "none",
  },
  "& .MuiTimelineContent-root": {
    paddingTop: 3,
  },
}));

// timeline list
const timelineList = [
  {
    title: "Do the Right Thing",
    time: "Act with integrity",
    type: "order1",
  },
  {
    title: "Put Clients First",
    time: "Keep the client's interests first",
    type: "order2",
  },
  {
    title: "Lead with Exceptional Ideas",
    time: "Win by breaking new ground",
    type: "order3",
  },
  {
    title: "Commit to Diversity & Inclusion",
    time: "Value individual and cultural differences as a defining strength",
    type: "order4",
  },
  {
    title: "Give Back",
    time: "Serve our communities generously with our expertise, time and money",
    type: "order5",
  },
];

const OrderTimeline = () => {
  return (
    <DashCard>
      <DashCardHeader title="Core values" />

      <TimelineStyle>
        {timelineList.map((item, index) => (
          <OrderTimelineItem
            key={item.type}
            type={item.type}
            title={item.title}
            time={item.time}
            isLast={index === timelineList.length - 1}
          />
        ))}
      </TimelineStyle>
    </DashCard>
  );
};

export default OrderTimeline;
