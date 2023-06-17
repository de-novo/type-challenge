namespace AppendArgyment {
    type Fn = (a: number, b: string) => number;
    type AppendArgument<
        T extends (...args: any[]) => any,
        U extends any
    > = T extends (...args: infer S) => infer R
        ? (...args: [...S, U]) => R
        : never;

    type Result = AppendArgument<Fn, boolean>;
    // expected be (a: number, b: string, x: boolean) => number
}
