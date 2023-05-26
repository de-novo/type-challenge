namespace Parameters {
    const foo = (arg1: string, arg2: number): void => {};
    type MyParameters<T extends (...arg: any[]) => any> = T extends (
        ...arg: infer S
    ) => any
        ? S
        : any;
    type FunctionParamsType = MyParameters<typeof foo>; // [arg1: string, arg2: number]
}
