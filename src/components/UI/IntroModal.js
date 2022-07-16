import { Button, Link, Modal, Typography } from "@material-ui/core";
import { Box } from "@mui/system";

const IntroModal = ({ showModal, onToggle }) => {
  return (
    <Modal
      open={showModal}
      onClose={onToggle}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90%",
          margin: "auto",
          maxWidth: 450,
          bgcolor: "#ffffff",
          outline: "none",
          borderRadius: 3,
          minHeight: 150,
          p: 3,
          textAlign: "justify",
          boxShadow: `5px 5px 10px #67787f, -5px -5px 10px #637c66`,
        }}
      >
        <Typography variant="h6" gutterBottom>
          Hi Morgan Stanley team 👋{" "}
        </Typography>

        <Typography paragraph>
          Thanks for having interview this me. This is for the Human metrics of
          Morgan Stanley
        </Typography>
        <Typography paragraph>
          {/* The main focus of this project was the UI. I know there are some bugs
          in it. If you can suggest me any way, I'll appreciate it very much. */}
          <ul>
            <li>Put Clients First</li>
            <li>Do the Right Thing</li>
            <li>Lead with Exceptional Ideas</li>
            <li>Commit to Diversity and Inclusion</li>
            <li>Give Back</li>
          </ul>
        </Typography>

        <Typography paragraph>
          PS: I'm looking for an entry level job. If you've any opportunity,
          please knock me. 🙏
        </Typography>

        {/* Buttons */}
        <Box
          sx={{
            pt: 1,
            display: "grid",
            gap: 2,
            gridAutoFlow: "column",
            justifyContent: "end",
          }}
        >
          <Button
            component={Link}
            underline="none"
            variant="contained"
            disableElevation
            href="https://github.com/TutulDevs/mui-practice"
            target="_blank"
            rel="noopener noreferrer"
          >
            view code
          </Button>

          <Button
            variant="contained"
            disableElevation
            onClick={onToggle}
            color="primary"
          >
            Close
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default IntroModal;
