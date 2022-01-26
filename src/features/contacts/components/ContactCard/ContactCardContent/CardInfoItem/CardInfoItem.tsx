import Typography from "@mui/material/Typography";
import { ReactNode } from "react";

interface CardInfoItemProps {
  label: string;
  children: ReactNode;
}

const CardInfoItem = ({ label, children }: CardInfoItemProps) => {
  return (
    <Typography fontWeight="400" variant="h6" component="p">
      {label}:{" "}
      <Typography variant="body1" component="span">
        {children}
      </Typography>
    </Typography>
  );
};

export default CardInfoItem;
