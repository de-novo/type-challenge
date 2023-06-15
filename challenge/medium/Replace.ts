namespace Replace {
    type Replace<
        T extends string,
        U extends string,
        S extends string
    > = T extends `${infer Z}${U}${infer C}`
        ? U extends ""
            ? T
            : `${Z}${S}${C}`
        : T;

    type replaced = Replace<"foobarbar", "", "foo">; // expected to be 'types are awesome!'
}
