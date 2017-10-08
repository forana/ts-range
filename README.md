# ts-range

A little Typescript module that adds a function like [Python's `range()`](https://docs.python.org/3/library/functions.html#func-range), because I got tired of not having it.

## Installing

```
npm i --save forana/ts-range
```

## Usage

```typescript
import range from 'ts-range';

for (let i of range(10)) {
    console.log(i);
}

range(5).forEach(i => console.log(i)); // 0, 1, 2, 3, 4
range(5, 10).forEach(i => console.log(i)); // 5, 6, 7, 8, 9
range(0, 10, 2).forEach(1 => console.log(i)); // 0, 2, 4, 6, 8
```

## Implementation Note

Yes, this could have been a generator, but:

1. There isn't generator support until ES2015, and `tsc --init` currently defaults to ES5
2. That wouldn't allow `forEach` usage, which is most of what I want to do with it.
