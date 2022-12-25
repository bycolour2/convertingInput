import { ChangeEvent, FC, KeyboardEvent, useEffect, useMemo, useState } from 'react';

interface IConvertingInputProps {
  units: string[];
  baseUnit: string;
  currentUnit: string;
  converterFn: (from: string, to: string, value: string) => string;
  value: string;
  onChange: (value: string) => void;
}

export const ConvertingInput: FC<IConvertingInputProps> = ({
  units,
  baseUnit,
  currentUnit,
  converterFn,
  value,
  onChange,
}) => {
  const [inputValue, setInputValue] = useState(value);

  const convertMetricToImperial = () => {
    const to = units.filter((unit) => unit !== baseUnit)[0];
    return converterFn(baseUnit, to, inputValue);
  };
  const convertImperialToMetric = () => {
    const from = units.filter((unit) => unit !== baseUnit)[0];
    return converterFn(from, baseUnit, inputValue);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const result = event.target.value.replace(/[^0-9.]/g, '');
    setInputValue(result);
  };

  const handleSubmit = () => {
    if (currentUnit !== baseUnit) {
      onChange(convertImperialToMetric());
      return;
    }
    onChange(inputValue);
  };

  useEffect(() => {
    if (currentUnit === baseUnit) {
      setInputValue(convertImperialToMetric());
    } else {
      setInputValue(convertMetricToImperial());
    }
  }, [currentUnit]);

  return (
    <>
      <div className="relative mt-8 flex w-3/4 lg:w-1/4">
        <div className="flex w-full">
          <input
            type="text"
            className="block w-full rounded-l-lg bg-gray-50 p-2.5 text-sm text-gray-900 outline-none"
            placeholder="Number"
            value={inputValue}
            onChange={(e) => handleChange(e)}
            required
          />
          <button
            type="button"
            onClick={() => handleSubmit()}
            className="rounded-r-lg bg-blue-700 p-2.5 text-sm font-medium text-white hover:bg-blue-800"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};
