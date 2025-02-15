export enum RiskStatus {
  HighRisk = "High Risk",
  LowRisk = "Low Risk",
}

export enum TrustTypeEnum {
  Company = "Company",
  Individual = "Individual",
  Other = "Other",
}

export enum CreditStatus {
  Submitted = "Submitted",
  UnderAssessment = "Under Assessment",
  Escalated = "Escalated For Further Assessment",
  MissingInfo = "Missing Information",
  Pending = "Pending Compliance Call",
  Approved = "Approved",
  Declined = "Declined",
  Withdrawn = "Withdrawn",
  ReadyForSettlement = "Ready for Settlement",
}

export enum Recommendation {
  Approve = "Approve",
  ConditionallyApprove = "Conditionally Approve",
  Decline = "Decline",
  Review = "Review",
}
