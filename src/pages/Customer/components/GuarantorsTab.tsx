import { Add as AddIcon } from "@mui/icons-material";
import { Button, Card, CardContent, Grid2, Stack } from "@mui/material";
import { useState } from "react";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import DetailCardHeader from "../../../components/DetailCardHeader";
import CoSupportForm from "./CoSupportForm";
import GuarantorForm from "./GuarantorForm";

const GuarantorsTab = () => {
  const methods = useForm({
    defaultValues: {
      guarantors: [
        {
          name: "Red Velvet",
          dateOfBirth: "1991-01-01",
          nationality: "Australian",
          email: "ben.gula@agp.com",
          phone: "041235647878",
          address: "11 BAKER ST, MELBOURNE VIC 2074",
          homeStatus: "Owning",
          propertiesCount: 5,
          identityValidationReport: "",
          alternateContact: {
            fullName: "Nate Alter",
            email: "nate.alter@agp.com",
            phone: "041235647878",
            relationship: "Cousin",
          },
        },
        {
          name: "Black Forest",
          dateOfBirth: "1991-01-01",
          nationality: "Australian",
          email: "ben.gula@agp.com",
          phone: "041235647878",
          address: "11 BAKER ST, MELBOURNE VIC 2074",
          homeStatus: "Owning",
          propertiesCount: 5,
          identityValidationReport: "",
        },
      ],
      coSupport: [
        {
          abn: "22605215227",
          acn: "605215227",
          entityName: "SAL DE PAN",
          legalName: "SAL DE PAN",
          incorporationDate: "2023-06-05",
          entityType: "Private Company",
          businessAddress: "12 BAKER ST, MELBOURNE VIC 2074",
        },
      ],
    },
  });

  const { control, handleSubmit } = methods;
  const {
    fields: guarantorFields,
    append: guarantorAppend,
    remove: guarantorRemove,
  } = useFieldArray({
    control,
    name: "guarantors",
  });

  const {
    fields: coSupportFields,
    append: coSupportAppend,
    remove: coSupportRemove,
  } = useFieldArray({
    control,
    name: "coSupport",
  });

  const [editIndex, setEditIndex] = useState<number | null>(null);
  const toggleEditMode = (index: number | null) => {
    setEditIndex(index === editIndex ? null : index);
  };

  const [editCoSupportIndex, setEditCoSupportIndex] = useState<number | null>(
    null
  );
  const toggleEditCoSupportMode = (index: number | null) => {
    setEditCoSupportIndex(index === editCoSupportIndex ? null : index);
  };

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
  };

  const handleAddGuarantor = () => {
    const newIndex = guarantorFields.length;
    guarantorAppend({
      name: "",
      dateOfBirth: "",
      nationality: "",
      email: "",
      phone: "",
      address: "",
      homeStatus: "",
      propertiesCount: 0,
      identityValidationReport: "",
      alternateContact: {
        fullName: "",
        email: "",
        phone: "",
        relationship: "",
      },
    });
    setEditIndex(newIndex);
  };

  const handleAddCoSupport = () => {
    const newIndex = coSupportFields.length;
    coSupportAppend({
      abn: "",
      acn: "",
      entityName: "",
      legalName: "",
      incorporationDate: "",
      entityType: "",
      businessAddress: "",
    });
    setEditCoSupportIndex(newIndex);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid2 container spacing={2}>
          <Grid2 size={6}>
            <Card variant="outlined">
              <CardContent>
                <DetailCardHeader title="Guarantors" />

                {guarantorFields.map((item, index) => (
                  <GuarantorForm
                    key={item.id}
                    index={index}
                    remove={guarantorRemove}
                    isEditing={editIndex === index}
                    toggleEditMode={toggleEditMode}
                  />
                ))}

                <Stack spacing={1} direction={"row"} justifyContent={"end"}>
                  <Button
                    variant="outlined"
                    startIcon={<AddIcon />}
                    onClick={handleAddGuarantor}
                    size="small"
                  >
                    Add Guarantor
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid2>
          <Grid2 size={6}>
            <Card variant="outlined" className="mb-3">
              <CardContent>
                <DetailCardHeader title="Company Guarantors"></DetailCardHeader>

                {coSupportFields.map((item, index) => (
                  <CoSupportForm
                    key={item.id}
                    index={index}
                    remove={coSupportRemove}
                    isEditing={editCoSupportIndex === index}
                    toggleEditMode={toggleEditCoSupportMode}
                  />
                ))}

                <Stack spacing={1} direction={"row"} justifyContent={"end"}>
                  <Button
                    variant="outlined"
                    startIcon={<AddIcon />}
                    onClick={handleAddCoSupport}
                    size="small"
                  >
                    Add Company Guarantor
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid2>
        </Grid2>
      </form>
    </FormProvider>
  );
};

export default GuarantorsTab;
