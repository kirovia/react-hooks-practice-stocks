import React, { useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";
import Stock from "./Stock";

function MainContainer() {

  const [allStocks, setAllStocks] = useState([])
  const [displayedStocks, setDisplayedStocks] = useState([])
  const [portfolioStocks, setPortfolioStocks] = useState([])

  return (
    <div>
      <SearchBar
        allStocks={allStocks}
        displayedStocks={displayedStocks}
        setDisplayedStocks={setDisplayedStocks}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer
            allStocks={allStocks}
            setAllStocks={setAllStocks}
            displayedStocks={displayedStocks}
            setDisplayedStocks={setDisplayedStocks}
            portfolioStocks={portfolioStocks}
            setPortfolioStocks={setPortfolioStocks}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer
            portfolioStocks={portfolioStocks}
            setPortfolioStocks={setPortfolioStocks}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
