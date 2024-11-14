import { Typography } from "@mui/material";

interface IProps {
  title: string;
}

const PageHeader = ({ title }: IProps) => {
  return (
    <>
      <Typography variant="h6" textTransform="uppercase" color="primary">
        {title}
      </Typography>
    </>
  );
};

export default PageHeader;
