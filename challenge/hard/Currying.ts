namespace Currying {
    declare function Currying<
        T extends (...arg: any[]) => any,
        Args extends any[] = []
    >(fn: T, ...args: Args): Currying<T, Args>;

    type Currying<
        Fn extends (...arg: any[]) => any,
        Args extends any[] = []
    > = Fn extends () => any
        ? Fn
        : Args["length"] extends Parameters<Fn>["length"]
        ? ReturnType<Fn>
        : (
              arg: Parameters<Fn>[Args["length"]]
          ) => Currying<Fn, [...Args, Parameters<Fn>[Args["length"]]]>;

    const add = (a: number, b: number, c: number) => true;
    const curriedAdd: Currying<typeof add> =
        (a: number) => (b: number) => (c: number) =>
            add(a, b, c);






            const corried = Currying(add);

    const curried1 = Currying((a: string, b: number, c: boolean) => true);

    const curried2 = Currying(
        (
            a: string,
            b: number,
            c: boolean,
            d: boolean,
            e: boolean,
            f: string,
            g: boolean
        ) => true
    );

    const curried3 = Currying(() => true);
}
