import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { Controller } from "react-hook-form";
import { FormInputProps } from ".";

const FormInputDate = ({
  name,
  control,
  label,
  className,
  disabled,
}: FormInputProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Controller
        name={name}
        control={control}
        defaultValue={null}
        render={({ field: { onChange, value } }) => (
          <DatePicker
            value={value || new Date()}
            onChange={onChange}
            className={className}
            label={label}
            disabled={disabled}
            slotProps={{
              textField: {
                variant: "filled",
                size: "small",
              },
            }}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default FormInputDate;
