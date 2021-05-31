import { Icon } from "@iconify/react";
import * as React from "react";

export interface DropdownItem {
  icon: Object;
  name: string;
}

export interface InputDropdownProps {
  values: DropdownItem[];
  value: number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  name: string;
  onDropdownChange: Function;
  dropdownSelection: DropdownItem;
  placeholder: string;
  loading: boolean;
}

const InputDropdown: React.FC<InputDropdownProps> = (prop) => {
  const {
    placeholder,
    values,
    value,
    onChange,
    name,
    onDropdownChange,
    dropdownSelection,
    loading,
  } = prop;

  const valueToPresent =
    value !== 0 ? Math.round((value + Number.EPSILON) * 1000000) / 1000000 : "";

  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">{placeholder}</span>
      </div>
      <input
        min="0"
        disabled={loading}
        name={name}
        onChange={onChange}
        value={valueToPresent}
        type="number"
        className="form-control currency-input"
        aria-label="Text input with dropdown button"
      />
      <button
        className="btn btn-outline-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <Icon icon={dropdownSelection.icon} className="crypto-icon" />{" "}
        {dropdownSelection.name}
      </button>
      <ul className="dropdown-menu dropdown-menu-end">
        {values.length > 1 &&
          values
            .filter((crypto) => crypto !== dropdownSelection)
            .map((crypto) => (
              <li>
                <button
                  name={crypto.name}
                  className="dropdown-item"
                  onClick={() => onDropdownChange(name, values.indexOf(crypto))}
                >
                  <Icon icon={crypto.icon} className="crypto-icon" />{" "}
                  {crypto.name}
                </button>
              </li>
            ))}
      </ul>
    </div>
  );
};

export default InputDropdown;
