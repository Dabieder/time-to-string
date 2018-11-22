const addLeadingZero = v => v >= 10 ? `${v}` : `0${v}`;

const timeToString = (value, withHours = false) => {
  if (typeof value !== 'number' || isNaN(value)) {
    return '';
  }

  const timeInSecs = Math.floor(value);

  const hours = Math.floor(timeInSecs / 3600);
  const mins = Math.floor(timeInSecs / 60) % 60;
  const secs = timeInSecs % 60;

  return withHours ? 
    `${ hours }:${ addLeadingZero(mins) }:${ addLeadingZero(secs) }`:
    `${ mins }:${ addLeadingZero(secs) }`;  
}

export default timeToString
