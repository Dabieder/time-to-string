# time-to-string

Converts number of seconds to the string value

## Usage

```
import timeToString from 'time-to-string';

const valueInSeconds = 63.3520;

console.log( timeToString(valueInSeconds) ); //  result: "1:03"
console.log( timeToString(valueInSeconds, true) ); // second parameter enables hours, result: "0:01:03"

```