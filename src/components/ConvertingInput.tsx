import { useState } from 'react';

export const ConvertingInput = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  return (
    <>
      <div>
        <button type="button">Type</button>
        <div>
          <ul>
            {/* Сделать 2 селекта и конверт на итор будет km/h */}
            <li>km</li>
            <li>m</li>
            <li>mile</li>
            <li>ft</li>
          </ul>
        </div>
        <div>
          <ul>
            {/* Сделать 2 селекта и конверт на итор будет km/h */}
            <li>h</li>
            <li>min</li>
            <li>h</li>
            <li>m</li>
          </ul>
        </div>
        <div>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="button">S</button>
        </div>
      </div>
      <div>
        <p>{/* type of inputs */}</p>
        <p>{inputValue}</p>
      </div>
    </>
  );
};
