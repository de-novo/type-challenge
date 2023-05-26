namespace Readonly {
    interface Todo {
        title: string;
        description: string;
    }

    type Key<T> = keyof T;

    type MyReadonly<T> = { readonly [k in Key<T>]: T[k] };

    const todo: MyReadonly<Todo> = {
        title: "Hey",
        description: "foobar",
    };

    todo.title = "Hello"; // Error: cannot reassign a readonly property
    todo.description = "barFoo"; // Error: cannot reassign a readonly property
}
