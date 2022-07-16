import { styled } from "@material-ui/styles";
import { Box } from "@mui/system";
import DashCard from "./DashCard";
import DashCardHeader from "./DashCardHeader";
import SocialTrafficItem from "./SocialTrafficItem";

// icons
import {
  RiFacebookFill,
  RiLinkedinFill,
  RiTwitterFill,
  RiYoutubeFill,
} from "react-icons/ri";

const BoxContainerStyle = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  display: "grid",
  gap: theme.spacing(2),
  gridTemplateColumns: `repeat(2, 1fr)`,
}));

// items list
const list = [
  {
    title: "Facebook",
    amount: "102.9k",
    icon: <RiFacebookFill />,
  },
  {
    title: "YouTube",
    amount: "26.3k",
    icon: <RiYoutubeFill />,
  },
  {
    title: "LinkedIn",
    amount: "2.2m",
    icon: <RiLinkedinFill />,
  },
  {
    title: "Twitter",
    amount: "635k",
    icon: <RiTwitterFill />,
  },
];

const SocialTraffic = () => {
  return (
    <DashCard>
      <DashCardHeader title="Traffic by Social Media" />

      <BoxContainerStyle>
        {list.map((el) => (
          <SocialTrafficItem
            key={el.title}
            icon={el.icon}
            amount={el.amount}
            title={el.title}
          />
        ))}
      </BoxContainerStyle>
    </DashCard>
  );
};

export default SocialTraffic;
