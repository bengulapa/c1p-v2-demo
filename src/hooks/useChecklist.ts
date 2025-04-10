import { Criteria } from "../models/interfaces";
import { useLoanStore } from "../state";

export function useChecklist(checkpoint: string) {
  const { checklists, updateChecklist, log, currentUser } = useLoanStore();
  const checklist = checklists.find((c) => c.checkpoint === checkpoint)!;

  const updateCriteria = (dirty: Criteria) => {
    const updatedCriteriaList = checklist.criteriaList.map((c) => {
      if (c.key === dirty.key) {
        if (dirty.isOverridden && dirty.overrideReason) {
          log(
            `${currentUser.name} has overridden ${c.text}. Reason ${dirty.overrideReason}`
          );
        }
      }

      return c.key === dirty.key ? dirty : c;
    });

    updateChecklist(checkpoint, updatedCriteriaList);
  };

  return { checklist, updateCriteria };
}
