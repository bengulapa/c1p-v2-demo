import { newGuid } from "../utils/uuid";
import { Loan } from "./loan.models";

export interface Criteria {
  key: string;
  text: string;
  value: string;
  valueType?: string;
  result: string;
  section?: string;
  isOverridden: boolean;
  overrideReason?: string;
}

export interface LoanContext {
  loan: Loan;
  setLoan: React.Dispatch<React.SetStateAction<Loan>>;
}

export class AuditLog {
  id: string;
  source: string;
  date: string;
  message: string;

  constructor(message: string, source?: string) {
    this.message = message;
    this.id = newGuid();
    this.source = source || "C1P v2 API";
    this.date = new Date().toJSON();
  }
}

export interface UserData {
  id: string;
  name: string;
  email: string;
  role: string;
}

export interface DetailFormProps {
  index: number;
  remove: (index: number) => void;
  isEditing: boolean;
  toggleEditMode: (index: number | null) => void;
  isNew?: boolean;
  canDeleteAll?: boolean;
}

export interface ReportSection {
  title: string;
  result: string;
  header: {
    title: string;
    value: string;
    result: string;
  };
  data: ReportData[];
}

export interface ReportData {
  text: string;
  value: any;
  result: string;
  verified: string;
  resultInfo?: string;
  valueType?: string;
  isChild?: boolean;
}

export interface Report {
  title: string;
  qualifiers: {
    title: string;
    result: string;
    applicant: ReportSection;
    asset: ReportSection;
    arrangement: ReportSection;
  };
  riskRating: ReportSection;
  compliance: ReportSection;
  recommendation: {
    result: string;
    details: string;
  };
}
