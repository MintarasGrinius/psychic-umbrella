import { Icon } from "@iconify/react";
import dollarCircleOutlined from "@iconify-icons/ant-design/dollar-circle-outlined";
import poundCircleOutlined from "@iconify-icons/ant-design/pound-circle-outlined";
import bitcoinIcon from "@iconify-icons/mdi/bitcoin";
import currencyEthereum from "@iconify-icons/tabler/currency-ethereum";
import currencyLitecoin from "@iconify-icons/tabler/currency-litecoin";
import sepa_small_logo from "../media/sepa_small_logo.svg";
import cheque_small_logo from "../media/cheque_small_logo.svg";
import euroCircle from "@iconify-icons/uil/euro-circle";
import creditCard from "@iconify-icons/noto/credit-card";
import { DropdownItem } from "../components/common/InputDropdown";

export const paymentMethodOoptions = [
  {
    value: "bank",
    label: (
      <div>
        <img src={sepa_small_logo} height="20" />
        {"  "}
        Bank transfer{" "}
      </div>
    ),
  },
  {
    value: "cheque",
    label: (
      <div>
        <img src={cheque_small_logo} height="18" />
        {"  "}
        Cheque{" "}
      </div>
    ),
  },
  {
    value: "credit",
    label: (
      <div>
        <Icon height="30" icon={creditCard} />
        {"  "}
        Credit Card{" "}
      </div>
    ),
  },
];

export const currencys: DropdownItem[] = [
  {
    icon: euroCircle,
    name: "EUR",
  },
  {
    icon: dollarCircleOutlined,
    name: "USD",
  },
  {
    icon: poundCircleOutlined,
    name: "GBP",
  },
];

export const cryptoCurrencys: DropdownItem[] = [
  {
    icon: bitcoinIcon,
    name: "BTC",
  },
  {
    icon: currencyEthereum,
    name: "ETH",
  },
  {
    icon: currencyLitecoin,
    name: "LTC",
  },
];
