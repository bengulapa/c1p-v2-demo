interface BrokerDetails {
  brokerName: string;
  brokerEmail: string;
  brokerMobile: string;
  bdmNames: string[];
}

interface ApplicantDetails {
  abn: string;
  entityName: string;
  entityType: string;
  guarantors: string[];
}

interface ArrangementDetails {
  financeAmount: number;
  repaymentAmount: number;
  repaymentFrequency: string;
  interestRate: number;
  termInYears: number;
  repaymentTiming: string;
  totalObligorExposure: number;
}

interface AssetDetails {
  type: string;
  class: string;
  make: string;
  model: string;
  description?: string;
  year: number;
}

interface StrategyDetails {
  decision: string;
  riskLevel: string;
  assessmentType: string;
  customerStrategy: string;
  program: string;
  riskScore: number;
}

interface ProgressDetails {
  stages: string[];
  currentStatus: string;
}

export interface Application {
  creditArrangementId: string;
  brokerInfo: BrokerDetails;
  applicant: ApplicantDetails;
  arrangement: ArrangementDetails;
  asset: AssetDetails;
  strategy: StrategyDetails;
  progress: ProgressDetails;
  availableActions: string[];
}
