namespace ReplaceAll {
    type ReplaceAll<
        T extends string,
        S extends string,
        U extends string
    > = S extends ""
        ? T
        : T extends `${infer Z}${S}${infer C}`
        ? `${Z}${U}${ReplaceAll<C, S, U>}`
        : T;

    type replaced = ReplaceAll<"foobarfoobar", "ob", "b">; // expected to be 'types'
}
