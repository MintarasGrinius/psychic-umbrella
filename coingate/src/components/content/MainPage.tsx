import * as React from "react";
import Background from "./Background";
import LeftSideContent from "./LeftSideContent";
import CurrencyApp from "./CurrencyApp";

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
              <LeftSideContent />
            </div>
            <div className="col-5 right-column">
              <CurrencyApp />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MainPage;
