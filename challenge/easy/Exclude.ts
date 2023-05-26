namespace Exclude {
    type MyExclude<T, U> = T extends U ? never : T;
    type Result = MyExclude<"a" | "b" | "c", "a">; // 'b' | 'c'

    //반대 되는것
    type Pick<T, U> = T extends U ? U : never;
    type PickResult = Pick<"a" | "b" | "c", "a" | "b">;
}
