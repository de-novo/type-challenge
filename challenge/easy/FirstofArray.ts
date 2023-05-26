namespace First {
    type arr1 = ["a", "b", "c"];
    type arr2 = [3, 2, 1];
    type First1<T extends any[]> = T extends [] ? never : T[0];
    type First2<T extends any[]> = T["length"] extends 0 ? never : T[0];
    type First3<T extends any[]> = T[number] extends never ? T[0] : never;
    type First4<T extends any[]> = T extends [infer A, ...any[]] ? A : never;
    type head1 = First4<arr1>; // expected to be 'a'
    type head2 = First4<arr2>; // expected to be 3
}
