import * as React from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

export interface LeftSideContentProps {}

const LeftSideContent: React.FC<LeftSideContentProps> = () => {
  return (
    <>
      <h1>
        <b className="green-text">Buy Bitcoin,</b>
        <b> Ethereum, Litecoin and other crypto</b>{" "}
        <b className="green-text">online</b>
      </h1>
      <p className="text">
        Why bother going through complicated exchanges? Buy cryptocurrency with
        top payment methods like SEPA bank transfer, Credit and Debit Card,
        Apple Pay, Mobile balance or Klarna. You can buy Bitcoin, Ethereum or
        any other popular crypto directly to your personal wallet without making
        any initial deposits. It's as easy as it gets!
      </p>
      <button
        className="green-text"
        onClick={() => window.location.replace("https://coingate.com/")}
      >
        Start now <ArrowForwardIosIcon className="btn-icon" />
      </button>
    </>
  );
};

export default LeftSideContent;
