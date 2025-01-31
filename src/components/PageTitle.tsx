import { Typography } from "@mui/material";

interface IProps {
  title: string;
}

const PageTitle = ({ title }: IProps) => {
  return (
    <>
      <Typography variant="h6" textTransform="uppercase" color="primary">
        {title}
      </Typography>
    </>
  );
};

export default PageTitle;
