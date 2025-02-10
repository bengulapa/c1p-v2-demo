import { InputBaseProps } from "@mui/material";
import React from "react";
import { type Control } from "react-hook-form";

export interface FormInputProps extends InputBaseProps {
  name: string;
  control?: Control;
  label?: string;
  children?: React.ReactNode;
}
