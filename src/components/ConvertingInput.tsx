import { ChangeEvent, useState } from 'react';

const asd: { [key: string]: number } = {
  mps: 1,
  mpmin: 60,
  kmps: 0.001,
  kmph: 3.6,
  mips: 0.00062137119223733,
  miph: 2.2369362920544,
  ftps: 3.28084,
  ftpmin: 196.8504,
};

export const ConvertingInput = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [selectedUnits, setSelectedUnits] = useState('');
  const [conversionResult, setConversionResult] = useState(0);

  const dropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleDropdownClick = (unit: string) => {
    setIsDropdownOpen(false);
    setSelectedUnits(unit);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleConverting = (from: string, value: string) => {
    setConversionResult(+value / asd[from]);
  };

  return (
    <>
      {/* <div className="flex h-[100vh] flex-col items-center justify-center bg-purple-300"> */}
      {/* <h1 className="pb-8 text-4xl font-bold">Speed converting input</h1> */}
      {/* <form className="w-2/4 lg:w-1/4"> */}
      <div className="relative flex w-2/4 lg:w-1/4">
        <button
          id="dropdown-button"
          type="button"
          onClick={dropdownToggle}
          className="b inline-flex w-24 flex-shrink-0 items-center justify-center rounded-l-lg bg-gray-200 py-2.5 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-200"
        >
          {selectedUnits ? selectedUnits.replace('p', '/') : 'Units'}{' '}
          <svg
            aria-hidden="true"
            className="ml-1 h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          id="dropdown"
          className={`${
            isDropdownOpen ? 'absolute top-full left-0' : 'hidden'
          } mt-2 w-44 divide-y divide-gray-100 rounded bg-white shadow`}
        >
          <ul className="py-1 text-sm text-gray-700" aria-labelledby="dropdown-button">
            <li>
              <button
                type="button"
                onClick={() => handleDropdownClick('mps')}
                className="block w-full px-4 py-2 hover:bg-gray-100"
              >
                m/s
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => handleDropdownClick('mpmin')}
                className="block w-full px-4 py-2 hover:bg-gray-100"
              >
                m/min
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => handleDropdownClick('kmps')}
                className="block w-full px-4 py-2 hover:bg-gray-100"
              >
                km/s
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => handleDropdownClick('kmph')}
                className="block w-full px-4 py-2 hover:bg-gray-100"
              >
                km/h
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => handleDropdownClick('mips')}
                className="block w-full px-4 py-2 hover:bg-gray-100"
              >
                mi/s
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => handleDropdownClick('miph')}
                className="block w-full px-4 py-2 hover:bg-gray-100"
              >
                mi/h
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => handleDropdownClick('ftps')}
                className="block w-full px-4 py-2 hover:bg-gray-100"
              >
                ft/s
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => handleDropdownClick('ftpmin')}
                className="block w-full px-4 py-2 hover:bg-gray-100"
              >
                ft/min
              </button>
            </li>
          </ul>
        </div>
        <div className="flex w-full">
          <input
            type="number"
            className="block w-full  bg-gray-50 p-2.5 text-sm text-gray-900"
            placeholder="Number"
            onChange={(e) => handleChange(e)}
            required
          />
          <button
            type="button"
            onClick={() => handleConverting(selectedUnits, inputValue)}
            className="rounded-r-lg border border-blue-700 bg-blue-700 p-2.5 text-sm font-medium text-white hover:bg-blue-800"
          >
            Calculate
          </button>
        </div>
      </div>
      {/* </form>
      <div className="mt-8 w-2/4 rounded-lg border border-gray-600 bg-purple-200 p-4 lg:w-1/4">
        <h2 className="text-center text-xl font-medium">Converted value to m/s</h2>
        <p className="mt-2 text-center text-lg">
          selectedUnits: {selectedUnits ? selectedUnits : 'none'}
        </p>
        <p className="mt-2 text-center text-lg">
          inputValue: {inputValue ? inputValue : 'none'}
        </p>
        <p className="mt-2 text-center text-lg">
          conversionResult: {conversionResult ? conversionResult + ' m/s' : 'none'}
        </p>
      </div> */}
      {/* </div> */}
    </>
  );
};
