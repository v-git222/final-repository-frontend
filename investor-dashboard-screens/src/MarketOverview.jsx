import "./MarketOverview.css";
import { FiSearch } from "react-icons/fi";

export default function MarketOverview() {
  const data = [
    {
      iconBg: "#FFECC7",
      iconColor: "#F7A800",
      name: "Aurivox",
      ticker: "AVX",
      price: "$200,000",
      changePercent: "-1.32%",
      changeDollar: "$0.057",
      changeColor: "red",
      marketcap: "$213.8M",
    },
    {
      iconBg: "#E4DCFF",
      iconColor: "#7A5CFF",
      name: "Eminar",
      ticker: "EMN",
      price: "$200,000",
      changePercent: "+1.32%",
      changeDollar: "$0.146",
      changeColor: "green",
      marketcap: "$245.8M",
    },
    {
      iconBg: "#D6FBE2",
      iconColor: "#36B37E",
      name: "Xenara",
      ticker: "XNR",
      price: "$200,000",
      changePercent: "+1.32%",
      changeDollar: "$0.450",
      changeColor: "green",
      marketcap: "$245.8M",
    },
  ];

  return (
    <div className="market-card">

      {/* HEADER TITLE */}
      <h2 className="market-title">📊 Market Overview</h2>
      <p className="market-subtitle">
        Comprehensive token statistics trading information
      </p>

      {/* FILTERS + SEARCH */}
      <div className="market-filters">
        <button className="filter-btn">Lable ⌄</button>
        <button className="filter-btn">Lable ⌄</button>
        <button className="filter-btn">Lable ⌄</button>

        <div className="search-box">
          <FiSearch className="search-icon" />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      {/* TABLE */}
      <div className="market-table">
        <div className="table-header">
          <span>Name</span>
          <span>Price</span>
          <span>Change(%)</span>
          <span>Change($)</span>
          <span>Marketcap</span>
          <span>Trade</span>
        </div>

        {data.map((row, i) => (
          <div key={i} className="table-row">

            {/* NAME */}
            <div className="table-name">
              <div
                className="token-icon"
                style={{ background: row.iconBg, color: row.iconColor }}
              >
                {row.ticker[0]}
              </div>
              <div>
                <strong>{row.name}</strong>
                <p className="ticker">{row.ticker}</p>
              </div>
            </div>

            <span className="price">{row.price}</span>

            <span
              className="change"
              style={{ color: row.changeColor === "red" ? "#E44E4E" : "#1CA44B" }}
            >
              {row.changePercent}
            </span>

            <span
              className="change"
              style={{ color: row.changeColor === "red" ? "#E44E4E" : "#1CA44B" }}
            >
              {row.changeDollar}
            </span>

            <span className="marketcap">{row.marketcap}</span>

            <button className="trade-btn">Trade</button>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="pagination-bar">
        <span className="showing">Showing <b>03</b> / 1280 Results</span>

        <div className="pagination">
          <button className="page-btn">{`<`}</button>
          <button className="page-btn active">1</button>
          <button className="page-btn">2</button>
          <button className="page-btn">3</button>
          <span className="dots">...</span>
          <button className="page-btn">20</button>
          <button className="page-btn">{`>`}</button>
        </div>
      </div>

      <p className="market-footer">
        Market data is updated in real-time. Prices are for reference only and may vary across exchanges.
      </p>
    </div>
  );
}
