import React, { useEffect } from "react";
import Stock from "./Stock";

function StockContainer({ allStocks, setAllStocks, displayedStocks, setDisplayedStocks, portfolioStocks, setPortfolioStocks }) {

  useEffect(() => {
    fetch('http://localhost:3001/stocks')
      .then(resp => resp.json())
      .then(data => {
        setAllStocks(data)
        setDisplayedStocks(data)
      })
  }, [])


  return (
    <div>
      <h2>Stocks</h2>
      {displayedStocks.map(stock => 
        <Stock
          key={stock.id}
          stock={stock}
          ticker={stock.ticker}
          name={stock.name}
          type={stock.price}
          price={stock.price}
          isBuying={true}
          portfolioStocks={portfolioStocks}
          setPortfolioStocks={setPortfolioStocks}
        />
      )}
    </div>
  );
}

export default StockContainer;
