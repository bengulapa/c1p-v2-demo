export interface Attachment {
  name: string;
  type: string;
  dateUploaded: string;
}

export enum TaskStatus {
  NotStarted = "Not Started",
  InProgress = "In Progress",
  Done = "Done",
}

export interface Task {
  task: string;
  status: TaskStatus;
  assignedTo: string;
  dateCreated: string;
  sla: string;
  attachments: Attachment[];
}
