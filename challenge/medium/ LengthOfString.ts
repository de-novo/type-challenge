namespace LengthOfString {
    type LengthOfString<
        S extends string,
        T extends string[] = []
    > = S extends `${infer F}${infer R}`
        ? LengthOfString<R, [...T, F]>
        : T["length"];

    type Test1 = LengthOfString<"1asdfasfd3">; // should be 3
}
