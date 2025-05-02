import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { Application } from "../models/Application";
import { CreditStatus, Recommendation } from "../models/enums";
import { AuditLog, Criteria, Report, UserData } from "../models/interfaces";
import { Checklist } from "../models/loan.models";
import { Task } from "../models/task.model";
import { newGuid } from "../utils/uuid";

interface State {
  loan: Application | null;
  setLoan: (newLoan: Application) => void;
  report: Report | null;
  setReport: (report: Report) => void;
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
  checklists: Checklist[];
  setChecklists: (checklists: Checklist[]) => void;
}

export const useLoanStore = create<State>()(
  devtools(
    persist(
      (set) => ({
        loan: null,
        currentUser: {
          id: newGuid(),
          name: "Cred Itor",
          email: "cred.itanalyst@angle.com.au",
          role: "CreditAnalyst",
        },
        auditLogs: [
          new AuditLog(`Bro Ker submitted the deal.`, "Broker Portal"),
        ],
        status: CreditStatus.Submitted,
        tasks: [],
        report: null,
        setReport: (report: Report) => set({ report }),
        checklists: [],
        setChecklists: (checklists: Checklist[]) => set({ checklists }),
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
        setLoan: (newLoan: Application) => set({ loan: newLoan }),
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
              checklists: state.checklists?.map((c) =>
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
            } as Application,
          }));
        },
      }),
      {
        version: 3,
        name: "loanStore",
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);
