namespace Capitalize {
    type MyCapitalize<T extends string> = T extends `${infer R}${infer _}`
        ? `${Uppercase<R>}${_}`
        : T;
    type capitalized = MyCapitalize<"hello world">; // expected to be 'Hello world'
}
