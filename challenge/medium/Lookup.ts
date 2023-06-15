namespace LookUp {
    interface Cat {
        type: "cat";
        breeds: "Abyssinian" | "Shorthair" | "Curl" | "Bengal";
    }

    interface Dog {
        type: "dog";
        breeds: "Hound" | "Brittany" | "Bulldog" | "Boxer";
        color: "brown" | "white" | "black";
    }
    type LookUp<T extends { type: string }, U extends T["type"]> = T extends {
        type: U;
    }
        ? T
        : never;
    type MyDogType = LookUp<Cat | Dog, "dog">; // expected to be `Dog`
}
