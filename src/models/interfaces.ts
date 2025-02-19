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

  constructor(message: string) {
    this.message = message;
    this.id = newGuid();
    this.source = "C1P v2 API";
    this.date = new Date().toJSON();
  }
}

export interface UserData {
  id: string;
  name: string;
  email: string;
  role: string;
}
