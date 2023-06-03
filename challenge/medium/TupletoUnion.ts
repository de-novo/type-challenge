namespace TupleToUnion {
    type Arr = ["1", "2", "3"];
    type TupleToUnion<T extends any[]> = T extends [infer R, ...infer S]
        ? R | TupleToUnion<S>
        : never;
    type TupleToUnion2<T> = T extends Array<infer ITEMS> ? ITEMS : never;
    type Test = TupleToUnion2<Arr>; // expected to be '1' | '2' | '3'
}
