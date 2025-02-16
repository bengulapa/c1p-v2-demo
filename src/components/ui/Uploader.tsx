import { Typography } from "@mui/material";
import React from "react";
import { Attachment } from "../../models/task.model";

export const acceptedFileExtensions = ["jpg", "doc", "docx", "pdf", "xlsx"];
export const acceptedFileTypes = [
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "image/jpeg",
  "application/vnd.ms-excel",
];
export const maxAllowedFiles = 10;
export const maxFileSizeInKb = 10000;

interface IProps {
  docType: string;
  documents?: Attachment[];
  disabled?: boolean;
}

const Uploader = ({ documents, docType, disabled }: IProps) => {
  const inputRef = React.createRef<HTMLInputElement>();

  return (
    <div className="form-file-upload">
      <input
        ref={inputRef}
        type="file"
        id={`input-file-upload-${docType}`}
        className="d-none"
        accept={acceptedFileTypes.join(",")}
        multiple={true}
        disabled={disabled}
      />
      <label
        htmlFor={`input-file-upload-${docType}`}
        className={"label-file-upload"}
      >
        <div>
          <div className="upload-text">
            <Typography variant="body1">
              Drag and drop your file here or Click to upload a file
            </Typography>

            <Typography variant="caption">
              Accepts <strong>{acceptedFileExtensions.join(", ")}</strong>{" "}
              files.
              <br />
              Max size of <strong>{maxFileSizeInKb / 1000} MB</strong> per file
              and maximum of <strong>{maxAllowedFiles}</strong> files per
              upload.
            </Typography>

            <ul className="w-50 mx-auto text-left">
              {documents?.map((t) => <li>{t.name}</li>)}
            </ul>
          </div>
        </div>
      </label>
    </div>
  );
};

export default Uploader;
