import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
} from "@mui/material";
import React from "react";

interface IProps {
  onSave: () => void;
  onCancel: () => void;
}

const EditForm = ({ onSave, onCancel }: IProps) => {
  const [value, setValue] = React.useState(true);

  return (
    <>
      <Stack className="mb-2" spacing={1}>
        <TextField label="Field 1" variant="filled" />
        <TextField label="Field 1" variant="filled" />
        <TextField label="Field 1" variant="filled" />
        <TextField label="Field 1" variant="filled" />
        <FormControl>
          <FormLabel>Is true?</FormLabel>
          <RadioGroup
            value={value}
            onChange={(event) => setValue(!!event.target.value)}
          >
            <FormControlLabel value={true} control={<Radio />} label="Yes" />
            <FormControlLabel value={false} control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
      </Stack>

      <Button className="mr-2" variant="contained">
        Save
      </Button>
      <Button variant="outlined" onClick={onSave}>
        Cancel
      </Button>
    </>
  );
};

export default EditForm;
