namespace Trim {
    type Space = " " | "\n" | "\t";
    type Trim<T extends string> = T extends
        | `${Space}${infer R}${Space}`
        | `${Space}${infer R}`
        | `${infer R}${Space}`
        ? Trim<R>
        : T;
    type trimmed = Trim<"  str">; // expected to be 'Hello World'
}
