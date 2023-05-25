interface Todo {
    title: string;
    description: string;
    completed: boolean;
}
type MyPick<T, K extends keyof T> = { [k in K]: T[k] };
type TodoPreview = MyPick<Todo, "title" | "completed">;

const todo: TodoPreview = {
    title: "Clean room",
    completed: false,
};
