import React from "react";

function Stock({ stock, ticker, name, type, price, isBuying, portfolioStocks, setPortfolioStocks }) {

  function handleBuy(stock) {
    !portfolioStocks.includes(stock) && setPortfolioStocks([...portfolioStocks, stock])
  }

  function handleSell(stock) {
    setPortfolioStocks([...portfolioStocks.filter(i => i.id !== stock.id)])
  }

  return (
    <div>
      <div className="card" onClick={() => isBuying ? handleBuy(stock) : handleSell(stock)}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker + ': ' + price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
