import React, { useState, useEffect } from 'react';
import { FiSearch, FiX } from 'react-icons/fi';

interface SearchInputProps {
  value?: string;
  onChange?: (value: string) => void;
  onClear?: () => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  autoFocus?: boolean;
}

const SearchInput: React.FC<SearchInputProps> = ({ 
  value = '', 
  onChange, 
  onClear,
  placeholder = "Search...", 
  className = "",
  disabled = false,
  autoFocus = false 
}) => {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const handleClear = () => {
    setInputValue('');
    if (onClear) {
      onClear();
    }
    if (onChange) {
      onChange('');
    }
  };

  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder={placeholder}
          disabled={disabled}
          autoFocus={autoFocus}
          className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors disabled:bg-gray-50 disabled:cursor-not-allowed"
        />
        {inputValue && (
          <button
            onClick={handleClear}
            disabled={disabled}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors disabled:cursor-not-allowed"
            title="Clear search"
          >
            <FiX className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchInput;
