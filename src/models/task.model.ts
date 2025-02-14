export interface Attachment {
  name: string;
  type: string;
  dateUploaded: Date;
}

export enum TaskStatus {
  NotStarted = "Not started",
  WorkingOnIt = "Working on it",
  Done = "Done",
}

export enum TaskType {
  General = 1,
  Internal,
  CreditCondition,
}

export class Task {
  id!: string;
  title!: string;
  description!: string;
  status!: TaskStatus;
  assignedTo!: string;
  dateCreated!: Date;
  dueDate!: Date;
  attachments: Attachment[] = [];
  conditionMet?: boolean;
  taskType?: TaskType;
}
