import { FC } from 'react';

interface IResultProps {
  currentUnit: string;
  inputValue: string;
  converterFn: (from: string, to: string, value: string) => string;
}

export const Result: FC<IResultProps> = ({ currentUnit, inputValue, converterFn }) => {
  return (
    <div className="mt-8 w-2/4 rounded-lg border border-gray-600 bg-purple-200 p-4 lg:w-1/4">
      <h2 className="text-center text-xl font-medium">Converted value to m/s</h2>
      <p className="mt-2 text-center text-lg">
        inputValue: {inputValue ? inputValue : 'none'}
      </p>
      <p className="mt-2 text-center text-lg">Current unit: {currentUnit}</p>
      {currentUnit === 'm' ? (
        <p className="mt-2 text-center text-lg">
          ft: {converterFn('m', 'ft', inputValue)}
        </p>
      ) : (
        <p className="mt-2 text-center text-lg">
          m: {converterFn('ft', 'm', inputValue)}
        </p>
      )}
    </div>
  );
};
