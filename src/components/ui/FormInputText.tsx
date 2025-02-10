import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { FormInputProps } from ".";

const FormInputText = ({
  name,
  control,
  label,
  className,
  disabled,
  multiline,
  rows,
}: FormInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={""}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <TextField
          className={className}
          helperText={error ? error.message : null}
          size="small"
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          label={label}
          disabled={disabled}
          variant="filled"
          multiline={multiline}
          rows={rows}
        />
      )}
    />
  );
};

export default FormInputText;
