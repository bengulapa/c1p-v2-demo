import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { CreditStatus, Recommendation } from "../models/enums";
import { AuditLog, Criteria, UserData } from "../models/interfaces";
import { Loan } from "../models/loan.models";
import { Task } from "../models/task.model";
import { newGuid } from "../utils/uuid";

interface State {
  loan: Loan | null;
  setLoan: (newLoan: Loan) => void;
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
  addTask: (task: Task) => void;
  recommendation: Recommendation;
  setRecommendation: (recommendation: Recommendation) => void;
  status: CreditStatus;
  setStatus: (status: CreditStatus) => void;
  auditLogs: AuditLog[];
  log: (message: string) => void;
  updateChecklist: (
    checkpoint: string,
    updatedCriteriaList: Criteria[]
  ) => void;
  currentUser: UserData;
}

export const useLoanStore = create<State>()(
  devtools(
    persist(
      (set) => ({
        loan: null,
        currentUser: {
          id: newGuid(),
          name: "Ben Gulapa",
          email: "ben@anglefinance.com.au",
          role: "CreditAnalyst",
        },
        auditLogs: [
          new AuditLog(`Bro Ker submitted the deal.`, "Broker Portal"),
        ],
        status: CreditStatus.Submitted,
        tasks: [],
        recommendation: Recommendation.Review,
        setRecommendation: (recommendation: Recommendation) =>
          set({ recommendation }),
        setTasks: (tasks: Task[]) => set({ tasks }),
        addTask: (task: Task) =>
          set((state) => ({
            tasks: [...state.tasks, task],
            auditLogs: [
              new AuditLog(`${state.currentUser.name} added a new task.`),
              ...state.auditLogs,
            ],
          })),
        setStatus: (status: CreditStatus) =>
          set((state) => ({
            status,
            auditLogs: [
              new AuditLog(
                `${state.currentUser.name} updated the status to ${status}.`
              ),
              ...state.auditLogs,
            ],
          })),
        setLoan: (newLoan: Loan) => set({ loan: newLoan }),
        log: (message: string) =>
          set((state) => ({
            auditLogs: [new AuditLog(message), ...state.auditLogs],
          })),
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
      {
        version: 1,
        name: "loanStore",
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);
