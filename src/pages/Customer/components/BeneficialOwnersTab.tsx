import { Add as AddIcon } from "@mui/icons-material";
import { Button, Card, CardContent, Grid2, Stack } from "@mui/material";
import { useState } from "react";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import DetailCardHeader from "../../../components/DetailCardHeader";
import GuarantorForm from "./GuarantorForm";

const BeneficialOwnersTab = () => {
  const methods = useForm({
    defaultValues: {
      guarantors: [
        {
          name: "Bene Ficial",
          dateOfBirth: "1991-01-01",
          nationality: "Australian",
          email: "bene.ficial@agp.com",
          phone: "041235647878",
          address: "11 SEVEN ST, MELBOURNE VIC 2074",
          homeStatus: "Owning",
          propertiesCount: 5,
          identityValidationReport: "",
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

  const [editIndex, setEditIndex] = useState<number | null>(null);
  const toggleEditMode = (index: number | null) => {
    setEditIndex(index === editIndex ? null : index);
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
    });
    setEditIndex(newIndex);
  };

  return (
    <Grid2 container spacing={2}>
      <Grid2 size={6}>
        <Card variant="outlined">
          <CardContent>
            <DetailCardHeader title="Beneficial Owners" />

            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmit)}>
                {guarantorFields.map((item, index) => (
                  <GuarantorForm
                    key={item.id}
                    index={index}
                    remove={guarantorRemove}
                    isEditing={editIndex === index}
                    toggleEditMode={toggleEditMode}
                    canDeleteAll={true}
                  />
                ))}

                <Stack spacing={1} direction={"row"} justifyContent={"end"}>
                  <Button
                    variant="outlined"
                    startIcon={<AddIcon />}
                    onClick={handleAddGuarantor}
                    size="small"
                  >
                    Add Beneficial Owner
                  </Button>
                </Stack>
              </form>
            </FormProvider>
          </CardContent>
        </Card>
      </Grid2>
      <Grid2 size={6}></Grid2>
    </Grid2>
  );
};

export default BeneficialOwnersTab;
