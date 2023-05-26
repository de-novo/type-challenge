namespace TupleToObject {
    const tuple = ["tesla", "model 3", "model X", "model Y"] as const;
    type TupleToObject<T extends readonly any[]> = { [k in T[number]]: k };
    type result = TupleToObject<typeof tuple>; // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
}
