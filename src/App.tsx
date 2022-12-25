import { LengthUnits } from 'convert-units';
import { useState } from 'react';
import { ConvertingInput } from '~/components/ConvertingInput';
import { Result } from './components/Results';
import { convert } from './utils/convert';

function App() {
  const [currentUnit, setCurrentUnit] = useState('m');
  const units = ['m', 'ft'];
  const baseUnit = 'm';
  const [outputValue, setOutputValue] = useState('');

  const converterFn = (from: string, to: string, value: string) => {
    const result = convert(+value)
      .from(from as LengthUnits)
      .to(to as LengthUnits);
    return parseFloat(result.toFixed(2)).toString();
  };

  const handleChange = (value: string) => {
    setOutputValue(value);
  };

  const systemToggle = () => {
    const to = units.filter((unit) => unit !== currentUnit)[0];
    setCurrentUnit(to);
  };

  return (
    <>
      <div className="flex h-[100vh] flex-col items-center justify-center bg-purple-300">
        <h1 className="w-3/4 pb-8 text-center text-4xl font-bold lg:w-1/4">
          Lenght metrical/imperial converting input
        </h1>
        <button
          type="button"
          onClick={systemToggle}
          className="rounded-lg bg-blue-700 px-3.5 py-1.5 text-white hover:bg-blue-800"
        >
          {currentUnit !== baseUnit ? 'to Metrical' : 'to Imperial'}
        </button>
        <ConvertingInput
          units={units}
          baseUnit={baseUnit}
          currentUnit={currentUnit}
          converterFn={converterFn}
          value={outputValue}
          onChange={handleChange}
        />
        <Result outputValue={outputValue} currentUnit={currentUnit} />
      </div>
    </>
  );
}

export default App;
