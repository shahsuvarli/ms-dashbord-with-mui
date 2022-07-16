import { Box, styled } from "@material-ui/core";

// etc
import InfoCard from "./InfoCard";
// import {
//   AiFillAndroid,
//   AiFillApple,
//   AiFillWindows,
//   AiFillBug,
//   AiFillMoneyCollect
// } from "react-icons/ai";
import {MdAttachMoney} from 'react-icons/md'
import {RiPercentLine} from 'react-icons/ri'
import {FaUserFriends} from 'react-icons/fa'



// info card item list
const items = [
  {
    id: "green",
    icon: <MdAttachMoney />,
    count: "$ 59.8b",
    title: "Net Revenues",
  },
  { id: "blue", icon: <MdAttachMoney />, count: "15.0b", title: "Net Income" },
  {
    id: "yellow",
    icon: <RiPercentLine />,
    count: "19.8%",
    title: "ROTCE",
  },
  { id: "maroon", icon: <FaUserFriends />, count: "75.0k", title: "Employees" },
];

const ContainerStyle = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(7.5),
  display: "grid",
  gap: theme.spacing(3),
  gridTemplateColumns: "repeat( auto-fit, minmax(200px, 1fr) )",
}));

const InfoCards = () => {
  return (
    <ContainerStyle>
      {items.map((el) => (
        <InfoCard
          key={el.id}
          colorId={el.id}
          icon={el.icon}
          amount={el.count}
          title={el.title}
        />
      ))}
    </ContainerStyle>
  );
};

export default InfoCards;
