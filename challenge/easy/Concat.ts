namespace Concat {
    type Concat<T extends readonly any[], U extends readonly any[]> = [
        ...T,
        ...U
    ];

    type Result = Concat<[1], [2]>; // expected to be [1, 2]
    type error = Concat<null, undefined>
}
