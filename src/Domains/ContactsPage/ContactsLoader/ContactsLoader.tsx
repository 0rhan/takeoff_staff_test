import { Backdrop, CircularProgress, Typography } from "@mui/material";

const ContactsLoader = ({ isLoading }: { isLoading: boolean }) => {
  if (isLoading) {
    return (
      <Backdrop
        open={true}
        sx={{
          zIndex: 1,
          flexFlow: "column nowrap",
          backdropFilter: "blur(4px)",
        }}
      >
        <Typography variant="h3" sx={{ color: "white", marginBottom: "8px" }}>
          Загрузка списка
        </Typography>
        <CircularProgress />
      </Backdrop>
    );
  } else {
    return null;
  }
};

export default ContactsLoader;
