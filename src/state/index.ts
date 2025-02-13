import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { CreditStatus } from "../models/enums";
import { Criteria } from "../models/interfaces";
import { Loan } from "../models/loan.models";

interface State {
  loan: Loan | null;
  setLoan: (newLoan: Loan) => void;
  status: CreditStatus;
  setStatus: (status: CreditStatus) => void;
  updateChecklist: (
    checkpoint: string,
    updatedCriteriaList: Criteria[]
  ) => void;
}

export const useLoanStore = create<State>()(
  devtools(
    persist(
      (set) => ({
        loan: null,
        status: CreditStatus.UnderAssessment,
        setStatus: (status: CreditStatus) => set({ status }),
        setLoan: (newLoan: Loan) => set({ loan: newLoan }),
        updateChecklist: (
          checkpoint: string,
          updatedCriteriaList: Criteria[]
        ) => {
          set((state) => ({
            loan: {
              ...state.loan,
              checklists: state.loan?.checklists.map((c) =>
                c.checkpoint === checkpoint
                  ? {
                      ...c,
                      criteriaList: updatedCriteriaList,
                      // If 1 criteria failed, outcome is already failed
                      outcome: updatedCriteriaList.some(
                        (c) => c.result === "FAIL" && !c.isOverridden
                      )
                        ? "FAIL"
                        : "PASS",
                    }
                  : c
              ),
            } as Loan,
          }));
        },
      }),
      { name: "loanStore" }
    )
  )
);
