# usetime

(P)react hook for realtime Date object

![npm (scoped)](https://img.shields.io/npm/v/@uneksija/usetime.svg)
![GitHub](https://img.shields.io/github/license/uneksija/usetime.svg)

## Installation

```sh
npm install @uneksija/usetime
```

## Importing the hook

```js
import useTime from `@uneksija/usetime` // for Preact
import useTime from `@uneksija/usetime/react` // for React
```

## Example usage

```js
function App() {
  const time = useTime() // returns a Date object
  return <span>{time.toLocaleString()}</span>
}
```
