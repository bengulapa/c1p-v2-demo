import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { Loan } from "../models/loan.models";

interface State {
  loan: Loan | null;
  setLoan: (newLoan: Loan) => void;
}

export const useLoanStore = create<State>()(
  devtools(
    persist(
      (set) => ({
        loan: null,
        setLoan: (newLoan: Loan) => set({ loan: newLoan }),
      }),
      { name: "loanStore" }
    )
  )
);
