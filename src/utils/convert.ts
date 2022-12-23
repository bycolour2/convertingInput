import configureMeasurements, { length } from 'convert-units';

/*
  `configureMeasurements` is a closure that accepts a directory
  of measures and returns a factory function (`convert`) that uses
  only those measures.
*/

export const convert = configureMeasurements({
  length,
});
