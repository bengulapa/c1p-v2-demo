import { Report } from "../models/interfaces";

export const midReportData: Report = {
  title: "CA01 - BEN'S BAKERY",
  applicant: {
    title: "The Applicant",
    result: "PASS",
    data: [
      {
        text: "Legal name",
        value: "MAHOGANY DEVELOPMENTS PTY LTD",
        result: "",
        verified: "ABR",
      },
      {
        text: "Industry",
        value: "Agriculture",
        result: "PASS",
        verified: "",
      },
      {
        text: "Organisation Credit Score",
        value: "520",
        result: "PASS",
        verified: "Equifax",
      },
      {
        text: "Guarantor 1 Credit Score",
        value: "510",
        result: "PASS",
        verified: "Equifax",
      },
      {
        text: "Key Contributing Factor",
        value: "No negative factors",
        result: "PASS",
        verified: "",
      },
      {
        text: "ABN Age",
        value: "5 years",
        result: "PASS",
        verified: "ABR",
      },
      {
        text: "AML/KYC",
        value: "Pass",
        result: "PASS",
        verified: "GreenID",
      },
    ],
  },
  asset: {
    title: "The Asset",
    result: "PASS",
    data: [
      {
        text: "Asset type",
        value: "Motor Vehicle (up to 4.5t)",
        result: "PASS",
        verified: "",
      },
      {
        text: "Asset class",
        value: "Primary",
        result: "PASS",
        verified: "",
      },
    ],
  },
  arrangement: {
    title: "The Arrangement",
    result: "REVIEW",
    data: [
      {
        text: "Loan amount",
        value: "$35,000.00 ($115,000.00 credit remaining)",
        result: "PASS",
        verified: "",
      },
      {
        text: "Deposit amount",
        value: "$5,250.00 (15%)",
        result: "FAIL",
        resultInfo: "Deposit < 20%",
        verified: "",
      },
      {
        text: "Balloon payment",
        value: "$5,000.00 (14%)",
        result: "PASS",
        verified: "",
      },
      {
        text: "Property backed",
        value: "No",
        result: "FAIL",
        verified: "",
      },
      {
        text: "Asset age (SOT)",
        value: "1 year",
        result: "PASS",
        verified: "",
      },
      {
        text: "Asset age (EOT)",
        value: "6 years",
        result: "PASS",
        verified: "",
      },
    ],
  },
  strategy: {
    title: "The Strategy",
    result: "MED RISK",
    riskFactors: [
      { name: "Overall risk profile:", values: [3, 4, 2, 3, 4, 5, 1] },
      { name: "Financed asset risk", values: [3, 4, 2, 3, 4, 5, 1] },
      { name: "Applicant risk", values: [3, 4, 2, 3, 4, 5, 1] },
      { name: "Arrangement risk", values: [3, 4, 2, 3, 1] },
    ],
    data: [
      {
        text: "Overall risk profile",
        value: 5,
        valueType: "range",
        result: "PASS",
        verified: "",
      },
      {
        text: "Financed asset risk",
        value: 2,
        valueType: "range",
        result: "PASS",
        verified: "",
        isChild: true,
      },
      {
        text: "Applicant risk",
        value: 5,
        valueType: "range",
        result: "PASS",
        verified: "",
        isChild: true,
      },
      {
        text: "Arrangement risk",
        value: 3,
        valueType: "range",
        result: "PASS",
        verified: "",
        isChild: true,
      },
      {
        text: "Assessment type",
        value: "LOW DOC",
        result: "PASS",
        verified: "",
      },
      {
        text: "Customer strategy",
        value: "Standard",
        result: "PASS",
        verified: "Internal",
      },
      {
        text: "Introducer program",
        value: "Partner",
        result: "PASS",
        verified: "Internal",
      },
    ],
  },
  recommendation: "REVIEW",
  recommendationDetails:
    "not property backed, deposit amount less than 20%, medium risk, with credit conditions",
};
