namespace Omit {
    interface Todo {
        title: string;
        description: string;
        completed: boolean;
    }
    type Exclude<T, K> = T extends K ? never : T;
    type MyOmit<T, K extends keyof T> = {
        [k in Exclude<keyof T, K>]: T[k];
    };

    type MyOmit2<T, K extends keyof T> = {
        [P in keyof T as P extends K ? never : P]: T[P];
    };
    type TodoPreview = MyOmit<Todo, "description" | "title">;
    type TodoPreview2 = MyOmit2<Todo, "description" | "title">
    const todo: TodoPreview = {
        completed: true,
    };
    const todo2: TodoPreview2 = {
        completed: true,
    };
    type error = MyOmit<Todo, "description" | "invalid">;
    type error2 = MyOmit2<Todo, "description" | "invalid">;
}
