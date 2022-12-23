import { ChangeEvent, FC, useEffect, useState } from 'react';

interface IConvertingInputProps {
  units: string[];
  baseUnit: string;
  currentUnit: string;
  converterFn: (from: string, to: string, value: string) => string;
  value: string;
  onChange: (value: string) => void;
}

export const ConvertingInput2: FC<IConvertingInputProps> = ({
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
    const to = units.filter((unit) => unit !== baseUnit)[0];
    return converterFn(to, baseUnit, inputValue);
  };

  useEffect(() => {
    if (currentUnit === baseUnit) {
      console.log('i to m', convertImperialToMetric());
      setInputValue(convertImperialToMetric());
    } else {
      console.log('m to i: ', convertMetricToImperial());
      setInputValue(convertMetricToImperial());
    }
  }, [currentUnit]);

  // useEffect(() => {
  //   if (currentUnit !== baseUnit) {
  //     // console.log(converterFn(baseUnit, baseUnit, v));
  //     setInputValue(converterFn(currentUnit, baseUnit, inputValue));
  //     onChange(converterFn(currentUnit, baseUnit, inputValue));
  //   }
  //   if (currentUnit === baseUnit) {
  //     // onChange(converterFn(baseUnit, currentUnit, inputValue));
  //     // console.log(converterFn(currentUnit, baseUnit, v));
  //   }
  // }, [currentUnit]);

  // const onInputChange = (v: string) => {
  //   if (currentUnit !== baseUnit) {
  //     // console.log(converterFn(baseUnit, baseUnit, v));
  //     setInputValue(converterFn(currentUnit, baseUnit, v));
  //     onChange(converterFn(currentUnit, baseUnit, v));
  //   }
  //   if (currentUnit === baseUnit) {
  //     setInputValue(v);
  //     onChange(v);
  //     // console.log(converterFn(currentUnit, baseUnit, v));
  //   }
  // };

  // const inputValue =
  //   currentUnit === baseUnit
  //     ? console.log(converterFn(baseUnit, baseUnit, value))
  //     : console.log(converterFn(currentUnit, baseUnit, value));
  return (
    <>
      <div className="relative mt-8 flex w-2/4 lg:w-1/4">
        <div className="flex w-full">
          <input
            type="text"
            className="block w-full rounded-lg bg-gray-50 p-2.5 text-sm text-gray-900"
            placeholder="Number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            required
          />
        </div>
      </div>
    </>
  );
};
