export class TaskWithAssigneeDto {
  id: string;
  description: string;
  due_date: Date;
  status: string;
  assignee: string | null;

  assigneeDetails: {
    id: string;
    name: string;
    email: string;
  } | null;
}
