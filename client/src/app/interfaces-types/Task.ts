enum Status {
  Todo = 'todo',
  InProgress = 'in-progress',
  Done = 'done',
}

interface Task {
  title: string;
  description: string;
  status: Status;
  dueDate: Date;
  createdAt: Date;
  updatedAt: Date;
  reminder: boolean;
  active: boolean;
  createBy: User;
}
