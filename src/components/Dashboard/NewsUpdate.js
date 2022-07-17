import { Link as RouterLink } from "react-router-dom";
import DashCard from "./DashCard";
import DashCardHeader from "./DashCardHeader";

// icon & images
import { GrFormNext } from "react-icons/gr";
import coverImg_1 from "../../images/newsList/cover_1.jpg";
import coverImg_2 from "../../images/newsList/cover_2.jpg";
import coverImg_3 from "../../images/newsList/cover_3.jpg";
import coverImg_4 from "../../images/newsList/cover_4.jpg";
import coverImg_5 from "../../images/newsList/cover_5.jpg";
import NewsUpdateItem from "./NewsUpdateItem";
import { Box, Button, Divider } from "@material-ui/core";

// News List
// const loremText = `Quisquam sunt ipsa nihil ratione. Dolorum earum occaecati et sequi et eius asperiore...`;

const newsList = [
  {
    title: "Executive Women's Conference",
    subtitle:
      "Learn how women are shaking up boardrooms and investing in the metaverse, from the firm’s Executive Women’s Conference.",
    photo: coverImg_1,
    postingTime: "2 hours ago",
  },
  {
    title: "2022 Midyear Outlook: What's Ahead for Markets?",
    subtitle:
      "Headwinds from inflation, central bank tightening, supply chain disruption and COVID-19 will continue to pressure growth in 2022.",
    photo: coverImg_2,
    postingTime: "2 hours ago",
  },
  {
    title:
      "Our Future Generation Scholarship Program Welcomes Its Initial Cohort",
    subtitle:
      "We celebrate the first participants in our program designed to help young people from diverse backgrounds in the U.K. pursue careers in the financial industry.",
    photo: coverImg_3,
    postingTime: "7 hours ago",
  },
  {
    title: "Midterm Elections: 4 Areas to Watch ",
    subtitle:
      "What the 2022 midterm election outcome could mean for equities and how investors can benefit from bipartisanship. ",
    photo: coverImg_4,
    postingTime: "10 hours ago",
  },
  {
    title: "Breaking Down Gatekeeping in the World of Publishing",
    subtitle:
      "Khalisa Rae and Dawn Michelle Hardy speak about the barriers that exist for authors of color to publish their work and how to best navigate the historically white publishing industry.",
    photo: coverImg_5,
    postingTime: "12 hours ago",
  },
];

const NewsUpdate = () => {
  return (
    <DashCard>
      <DashCardHeader title="News Update" />

      {/* Main Content */}

      <Box
        overflow="auto"
        sx={{
          padding: { xs: 2, sm: 3 },
        }}
      >
        {newsList.map((news) => (
          <NewsUpdateItem
            key={news.title}
            title={news.title}
            subtitle={news.subtitle}
            photo={news.photo}
            postingTime={news.postingTime}
          />
        ))}
      </Box>

      {/* footer */}

      <Divider />
      <Box
        sx={{
          py: 2,
          px: 3,
          textAlign: "right",
        }}
      >
        <Button
          to="/"
          component={RouterLink}
          size="small"
          color="inherit"
          endIcon={<GrFormNext />}
        >
          View All
        </Button>
      </Box>
    </DashCard>
  );
};

export default NewsUpdate;
