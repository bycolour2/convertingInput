import { LengthUnits } from 'convert-units';
import { useState } from 'react';
import { ConvertingInput } from '~/components/ConvertingInput';
import { ConvertingInput2 } from './components/ConvertingInput2';
import { Result } from './components/Results';
import { convert } from './utils/convert';

function App() {
  const [currentUnit, setCurrentUnit] = useState('m');
  const units = ['m', 'ft'];
  const baseUnit = 'm';
  const [inputValue, setInputValue] = useState('');

  const converterFn = (from: string, to: string, value: string) => {
    const result = convert(+value)
      .from(from as LengthUnits)
      .to(to as LengthUnits)
      .toFixed(2)
      .toString();
    // console.log(result);
    // console.log(parseFloat(result.toFixed(2)).toString());
    return result;
  };

  const handleChange = (value: string) => {
    setInputValue(value);
  };

  const systemToggle = () => {
    const to = units.filter((unit) => unit !== currentUnit)[0];
    setCurrentUnit(to);
  };

  return (
    <>
      <div className="flex h-[100vh] flex-col items-center justify-center bg-purple-300">
        <h1 className="pb-8 text-4xl font-bold">Speed converting input</h1>
        <button type="button" onClick={systemToggle}>
          {currentUnit}
        </button>
        <ConvertingInput />
        <Result
          converterFn={converterFn}
          inputValue={inputValue}
          currentUnit={currentUnit}
        />
        <ConvertingInput2
          units={units}
          baseUnit={baseUnit}
          currentUnit={currentUnit}
          converterFn={converterFn}
          value={inputValue}
          onChange={handleChange}
        />
      </div>
    </>
  );
}

export default App;
