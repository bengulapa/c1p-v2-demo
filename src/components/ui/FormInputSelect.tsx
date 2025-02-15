import { FormControl, InputLabel, Select } from "@mui/material";
import { Controller } from "react-hook-form";
import { FormInputProps } from ".";

const FormInputSelect = ({
  name,
  control,
  label,
  className,
  disabled,
  children,
}: FormInputProps) => {
  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Controller
        render={({ field: { onChange, value } }) => (
          <Select
            label={label}
            onChange={onChange}
            value={value}
            className={className}
            disabled={disabled}
            variant="outlined"
          >
            {children}
          </Select>
        )}
        control={control}
        name={name}
        defaultValue={""}
      />
    </FormControl>
  );
};

export default FormInputSelect;
