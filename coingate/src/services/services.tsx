import axios from "axios";
import * as React from "react";

export function getCurrencyRate() {
  return axios.get("https://api.coingate.com/v2/rates");
}
