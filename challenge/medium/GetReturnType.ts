namespace GetReturnType {
    const fn = (v: boolean) => {
        if (v) return 1;
        else return 2;
    };

    type MyReturnType<T extends Function> = T extends (...arg: any) => infer R
        ? R
        : never;

    type a = MyReturnType<typeof fn>; // should be "1 | 2"
}
