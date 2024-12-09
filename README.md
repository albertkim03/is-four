# is-four

[![Join us on Gitter](https://img.shields.io/badge/GITTER-join%20chat-green.svg)](https://gitter.im/gytdau/is-four)

Check if a number is equal to 4.

## Installation

Install the package using npm:

```sh
npm install is-four
```

## Usage

The ```is-four``` package allows you to determine if a number (or other representations of "four") is equal to 4. It also provides methods to check for approximate equality or proximity to 4.

## Basic Example
```js
var isFour = require('is-four');

// Exact match
console.log(isFour(4).four()); // true
console.log(isFour(5).four()); // false

// Works with string representations of "four"
console.log(isFour("four").four()); // true
console.log(isFour("cuatro").four()); // true
console.log(isFour("IV").four()); // true

// Works with binary
console.log(isFour(0b100).four()); // true
```

## roughly.four

```js
// Rough equality
console.log(isFour(3.9).roughly.four()); // true
console.log(isFour(4.4).roughly.four()); // true
console.log(isFour(4.6).roughly.four()); // false
```

## within(y).of.four

```js
// Within 1 of 4
console.log(isFour(3).within(1).of.four()); // true
console.log(isFour(5).within(1).of.four()); // true
console.log(isFour(6).within(1).of.four()); // false

// Within 2 of 4
console.log(isFour(6).within(2).of.four()); // true
console.log(isFour(7).within(2).of.four()); // false
```

## Test
```
npm test
```


