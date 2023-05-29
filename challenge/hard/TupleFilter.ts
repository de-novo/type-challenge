namespace TupleFilter {
    type FilterOut<T extends any[], U> = T extends [infer F, ...infer R]
        ? [F] extends [U]
            ? FilterOut<R, U>
            : [F, ...FilterOut<R, U>]
        : T;

    type Filtered = FilterOut<[1, 2, never, 3], never>; // [1, 2, 3]
}
