namespace ReverseCurrying {
    type Pop<T extends any[]> = T extends [...infer R, infer _] ? R : never;
    type Peek<T extends any[]> = T extends [...infer _, infer R] ? R : never;
    type ReverseCurrying<
        Fn extends (...args: any[]) => any,
        Args extends any[] = Parameters<Fn>
    > = Args extends []
        ? ReturnType<Fn>
        : (arg: Peek<Args>) => ReverseCurrying<Fn, Pop<Args>>;

    type Curryingr = ReverseCurrying<(a: number, b: boolean, c: string) => any>;
}
