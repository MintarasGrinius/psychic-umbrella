import * as React from "react";
import Background from "./Background";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import EuroSymbolIcon from "@material-ui/icons/EuroSymbol";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon, InlineIcon } from "@iconify/react";
import bitcoinIcon from "@iconify-icons/mdi/bitcoin";
import euroCircle from "@iconify-icons/uil/euro-circle";

export interface MainPageProps {}

export interface MainPageState {}

class MainPage extends React.Component<MainPageProps, MainPageState> {
  state = {};
  render() {
    return (
      <>
        <Background />
        <div className="container">
          <div className="row">
            <div className="col-7 text-column">
              <h1>
                <b className="green-text">Buy Bitcoin,</b>
                <b> Ethereum, Litecoin and other crypto</b>{" "}
                <b className="green-text">online</b>
              </h1>
              <p className="text">
                Why bother going through complicated exchanges? Buy
                cryptocurrency with top payment methods like SEPA bank transfer,
                Credit and Debit Card, Apple Pay, Mobile balance or Klarna. You
                can buy Bitcoin, Ethereum or any other popular crypto directly
                to your personal wallet without making any initial deposits.
                It's as easy as it gets!
              </p>
              <button className="green-text">
                Start now <ArrowForwardIosIcon className="btn-icon" />
              </button>
            </div>
            <div className="col-5 right-column">
              <div className="currency-app-background">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control currency-input"
                    aria-label="Text input with dropdown button"
                    placeholder="Pay"
                  />
                  <button
                    className="btn btn-outline-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <Icon icon={euroCircle} className="eur-icon" /> EUR{" "}
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Separated link
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control currency-input"
                    aria-label="Text input with dropdown button"
                    placeholder="Buy"
                  />
                  <button
                    className="btn btn-outline-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <Icon className="btc-icon" icon={bitcoinIcon} /> EUR{" "}
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Separated link
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="currency-app-shadow-background"></div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MainPage;
