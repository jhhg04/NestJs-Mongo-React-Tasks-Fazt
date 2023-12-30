export interface Task {
  _id: string;
  title: string;
  description?: string;
  done?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export type CreateTask = Omit<Task, '_id' | 'createdAt' | 'updatedAt'>;

export type UpdateTask = Partial<CreateTask>;

export interface TaskContextValue {
  tasks: Task[];
  createTask: (task: CreateTask) => Promise<void>;
  deleteTask: (id: string) => Promise<void>;
  updateTask: (id: string, task: UpdateTask) => Promise<void>;
}
