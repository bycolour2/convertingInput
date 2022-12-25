import { FC } from 'react';

interface IResultProps {
  currentUnit: string;
  outputValue: string;
}

export const Result: FC<IResultProps> = ({ currentUnit, outputValue }) => {
  return (
    <div className="mt-8 w-3/4 rounded-lg border border-gray-600 bg-purple-200 p-4 lg:w-1/4">
      <h2 className="text-center text-xl font-medium">Converted value to m/s</h2>
      <p className="mt-2 text-center text-lg">Current unit: {currentUnit}</p>
      <p className="mt-2 text-center text-lg">
        Value after submit: {outputValue ? outputValue + ' m' : 'none'}
      </p>
    </div>
  );
};
