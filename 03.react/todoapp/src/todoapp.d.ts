interface TodoItem {
  _id: number;
  title: string;
  content: string;
  done: boolean;
  createdAt: string;
  updatedAt: string;
}

interface TodoListMain {
  _id: number;
  title: string;
  done: boolean;
  createdAt?: string;
  updatedAt: string;
}

interface TodoListResponse {
  ok: number;
  items: TodoItem[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

interface TodoResponse {
  ok: number;
  item: TodoItem;
}

interface TodoListType {
  getAxios: () => Promise<AxiosResponse[]>;
  getTodo: (id: string) => Promise<TodoItem>;
  postTodo(obj: object): void;
  deleteTodo(id: string): void;
  patchTodo(id: string, obj: object): void;
}

interface DoneEditType {
  selected: string;
  setSelected(selected: string): void
  sort: boolean;
  setSort(sort: boolean): void;
  edit: boolean;
  setEdit(edit: boolean): void;
  data: TodoListMain[];
  setData(data: TodoListMain[]): void;
  empty: boolean;
  setEmpty(empty: boolean): void;
}

interface TextInputType {
  inputId: string,
  areaId: string,
  inputClassName: string,
  areaClassName: string,
  inputValue: string,
  textValue: string,
  inputOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  textOnChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
  inputHolder?: string,
  textHolder?: string,
  required?: boolean
}

interface Button {
  children: string;
  id: string;
  disabled?: boolean;
  onClick(): void;
}
