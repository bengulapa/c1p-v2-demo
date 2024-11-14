import { Typography } from "@mui/material";

interface IProps {
  title: string;
}

const CardTitleHeader = ({ title }: IProps) => {
  return (
    <Typography
      variant="subtitle2"
      textTransform="uppercase"
      color="secondary"
      gutterBottom
    >
      {title}
    </Typography>
  );
};

export default CardTitleHeader;
