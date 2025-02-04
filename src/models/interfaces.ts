import { Loan } from "./loan.models";

export interface Criteria {
  key: string;
  text: string;
  value: string;
  result: string;
  section?: string;
  isOverridden: boolean;
}

export interface LoanContext {
  loan: Loan;
  setLoan: React.Dispatch<React.SetStateAction<Loan>>;
}
