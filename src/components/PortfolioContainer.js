import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolioStocks, setPortfolioStocks }) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolioStocks.map(stock =>
        <Stock
          key={stock.id}
          stock={stock}
          ticker={stock.ticker}
          name={stock.name}
          price={stock.price}
          isBuying={false}
          portfolioStocks={portfolioStocks}
          setPortfolioStocks={setPortfolioStocks}
        />
      )}
    </div>
  );
}

export default PortfolioContainer;
