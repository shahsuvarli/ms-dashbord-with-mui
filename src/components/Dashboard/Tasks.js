import { FormGroup, Typography } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import DashCard from "./DashCard";
import DashCardHeader from "./DashCardHeader";
import TasksItem from "./TasksItem";

// style
const FormGroupStyle = styled(FormGroup)(({ theme }) => ({
  padding: theme.spacing(3),
  paddingBottom: theme.spacing(2),
}));

// list of tasks
const TASK_LIST = [
  {
    id: "chk_1",
    label: "Growing client assets under management to $10 trillion",
    status: true,
  },
  {
    id: "chk_2",
    label: "Wealth business to earn a 30% pre-tax profit margin.",
    status: false,
  },
  {
    id: "chk_3",
    label: "Earning a return on tangible common equity of at least 20%",
    status: false,
  },
];

const Tasks = () => {
  return (
    <DashCard>
      <DashCardHeader title="Annual targets" />

      <FormGroupStyle>
        {TASK_LIST.map((el) => (
          <TasksItem
            key={el.id}
            id={el.id}
            status={el.status}
            label={el.label}
          />
        ))}
      </FormGroupStyle>
      <Typography paragraph style={{ marginLeft: "23px" }}>
        Source:{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.reuters.com/breakingviews/morgan-stanleys-10-trln-target-leads-another-2022-01-19/"
        >
          Morgan Stanley’s $10 trln target leads to another
        </a>
      </Typography>
    </DashCard>
  );
};

export default Tasks;
