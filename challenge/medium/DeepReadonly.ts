namespace DeepReadonly {
    type X = {
        x: {
            a: 1;
            b: "hi";
        };
        y: "hey";
    };

    type Expected = {
        readonly x: {
            readonly a: 1;
            readonly b: "hi";
        };
        readonly y: "hey";
    };

    type DeepReadonly<T> = T extends Function
        ? T
        : T extends object
        ? { readonly [K in keyof T]: DeepReadonly<T[K]> }
        : T;

    type X1 = {
        a: () => 22;
        b: string;
        c: {
            d: boolean;
            e: {
                g: {
                    h: {
                        i: true;
                        j: "string";
                    };
                    k: "hello";
                };
                l: [
                    "hi",
                    {
                        m: ["hey"];
                    }
                ];
            };
        };
    };

    type X2 = { a: string } | { b: number };

    type Todo = DeepReadonly<X1>; // should be same as `Expected`
    type Todo2 = DeepReadonly<X2>; // { a: string } | { b: number
}
