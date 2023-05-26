namespace Awaited {
    type ExampleType = Promise<string>;
    type Thenable<T> = Promise<T> | PromiseLike<T>;
    type MyAwaited<T extends Thenable<any>> = T extends Thenable<infer R>
        ? R extends Thenable<any>
            ? MyAwaited<R>
            : R
        : never;

    type Result = MyAwaited<ExampleType>; // string

    type T = { then: (onfulfilled: (arg: number) => any) => any };
    type TResult = MyAwaited<T>;
}
