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

export interface Task {
  title: string;
  description: string;
  status: TaskStatus;
  assignedTo: string;
  dateCreated: Date;
  dueDate: Date;
  sla: string;
  attachments: Attachment[];
  isCondition?: boolean;
  conditionMet?: boolean;
  taskType: TaskType;
}
