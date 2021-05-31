import * as React from "react";
import Select from "react-select";
import InputDropdown from "../common/InputDropdown";
import {
  cryptoCurrencys,
  currencys,
  paymentMethodOoptions,
} from "../../data/data";
import { useState } from "react";
import { DropdownItem } from "../common/InputDropdown";
import { useEffect } from "react";
import { getCurrencyRate } from "../../services/services";
import Spinner from "react-bootstrap/Spinner";

export interface Currencys {
  [index: string]: number;
}

const CurrencyApp: React.FC = () => {
  const [currencyAmount, setCurrncyAmount] = useState<number>(0);
  const [cryptoAmount, setCryptoAmount] = useState<number>(0);
  const [currencyType, setCurrncyType] = useState<DropdownItem>(currencys[0]);
  const [cryptoType, setCryptoType] = useState<DropdownItem>(
    cryptoCurrencys[0]
  );
  const [currancyRates, setCurrancyRates] = useState<Currencys | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const isReady: string =
    cryptoAmount === 0 ||
    currencyAmount === 0 ||
    currencyAmount < 0.000001 ||
    cryptoAmount < 0.000001
      ? "gray-bacground"
      : "";

  useEffect(() => {
    setLoading(true);
    getCurrencyRate().then((response) => {
      setCurrancyRates(response.data.merchant[cryptoType.name]);
      setLoading(false);
      console.log(cryptoType.name);
    });
  }, [cryptoType]);

  function countCurrancy(amount: number, cryptoChanged: boolean) {
    if (!loading && currancyRates) {
      return cryptoChanged
        ? currancyRates[currencyType.name] * amount
        : amount / currancyRates[currencyType.name];
    } else {
      return 0;
    }
  }

  function onInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.name);

    if (event.target.name === "crypto") {
      setCurrncyAmount(countCurrancy(+event.target.value, true));
      setCryptoAmount(+event.target.value);
    }
    if (event.target.name === "currency") {
      setCryptoAmount(countCurrancy(+event.target.value, false));
      setCurrncyAmount(+event.target.value);
    }
  }

  function onDropdownChange(type: string, index: number) {
    if (type === "crypto") {
      setCryptoType(cryptoCurrencys[index]);
    } else {
      setCurrncyType(currencys[index]);
    }
    setCryptoAmount(0);
    setCurrncyAmount(0);
  }

  return (
    <>
      <div className="currency-app-background">
        <InputDropdown
          loading={loading}
          placeholder="Pay"
          values={currencys}
          value={currencyAmount}
          onChange={onInputChange}
          name="currency"
          onDropdownChange={onDropdownChange}
          dropdownSelection={currencyType}
        />
        <InputDropdown
          loading={loading}
          placeholder="Buy"
          name="crypto"
          values={cryptoCurrencys}
          value={cryptoAmount}
          onChange={onInputChange}
          onDropdownChange={onDropdownChange}
          dropdownSelection={cryptoType}
        />
        <div className="payment-select-container">
          <p>Payment method</p>

          <Select
            options={paymentMethodOoptions}
            defaultValue={paymentMethodOoptions[0]}
            className="payment-select-dropdown"
          />
        </div>
        <div className="buy-container">
          <button
            disabled={isReady !== ""}
            className={"buy-btn " + isReady}
            onClick={() => window.location.replace("https://coingate.com/")}
          >
            {loading ? (
              <Spinner size="sm" animation="border" />
            ) : (
              "Buy " + cryptoType.name
            )}
          </button>
        </div>
      </div>
      <div className="currency-app-shadow-background" />
      <div className="text-container-mobile mt-4 m-3">
        <p>
          Why bother going through complicated exchanges? Buy cryptocurrency
          with top payment methods like SEPA bank transfer, Credit and Debit
          Card, Apple Pay, Mobile balance or Klarna. You can buy Bitcoin,
          Ethereum or any other popular crypto directly to your personal wallet
          without making any initial deposits. It's as easy as it gets!
        </p>
      </div>
    </>
  );
};

export default CurrencyApp;
