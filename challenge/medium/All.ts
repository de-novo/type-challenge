namespace All {
    type Test1 = [1, 1, 1];
    type Test2 = [1, 1, 2];
    type Equal<T, U> = (<G>() => G extends T ? 1 : 2) extends <
        G
    >() => G extends U ? 1 : 2
        ? true
        : false;
    type All<T extends any[], U> = T extends [infer F, ...infer R]
        ? Equal<F, U> extends true
            ? All<R, U>
            : false
        : true;

    type A = Equal<unknown, any>;
    type Todo = All<Test1, 1>; // should be same as true
    type Todo2 = All<Test2, 1>; // should be same as false
    type Todo3 = All<[any], unknown>;

    type Todo4 = any extends unknown ? "A" : "B";
}
