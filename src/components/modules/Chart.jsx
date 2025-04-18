import { useState } from "react";
import LineChartComponent from "./chartUI/LineChartComponent";
import { formatCurrency } from "../../helper/currencyUtils";

// API
import { convertData } from "../../helper/convertData";

export default function Chart({ chart, setChart, currency }) {
  const [type, setType] = useState("prices");

  const typeHandler = (event) => {
    if (event.target.tagName === "BUTTON") {
      const type = event.target.innerText.toLowerCase().replace(" ", "_");
      setType(type);
    }
  };

  // button style
  const baseBtnClass = "my-2 mx-5 text-[1rem] py-2 px-4 rounded-md cursor-pointer border transition-all duration-300";
  const activeBtnClass = "bg-[#3874ff] text-white border-[#3874ff] shadow-lg hover:scale-105";
  const inactiveBtnClass = "bg-[#18181cdb] text-[#3874ff] border-[#3874ff] hover:bg-[#3874ff] hover:text-white";

  return (
    <div className="fixed top-0 left-0 w-full h-full backdrop-blur-sm">
      <span
        className="bg-red-700 inline-block font-bold text-white 
        w-8 h-8 text-[1.5rem] text-center mt-8 ml-8 rounded-md cursor-pointer transition-all duration-300 transform hover:scale-110"
        onClick={() => setChart(null)}
      >
        X
      </span>
      <div className="flex justify-center items-center mt-20">
        <div className="w-full max-w-4xl p-6 mt-5 bg-[#18181ce6] border-2 rounded-2xl shadow-2xl overflow-y-auto max-h-[80vh]">
          <div className="flex items-center mb-5">
            <img className="w-12 h-12 mr-3" src={chart.coins.image} alt={chart.coins.name} />
            <p className="text-[1.8rem] font-bold text-white">{chart.coins.name}</p>
          </div>
          <div className="w-full h-[300px]">
            <LineChartComponent data={convertData(chart, type)} type={type} />
          </div>
          <div className="mt-8" onClick={typeHandler}>
            <button
              className={`${baseBtnClass} ${type === "prices" ? activeBtnClass : inactiveBtnClass}`}
            >
              Prices
            </button>

            <button
              className={`${baseBtnClass} ${type === "market_caps" ? activeBtnClass : inactiveBtnClass}`}
            >
              Market Caps
            </button>

            <button
              className={`${baseBtnClass} ${type === "total_volumes" ? activeBtnClass : inactiveBtnClass}`}
            >
              Total Volumes
            </button>
          </div>
          <div className="flex flex-wrap justify-between mt-8 gap-4">
            <div className="flex text-[1.2rem] text-white">
              <p className="mr-2 text-[#3874ff] font-semibold">Prices:</p>
              <span>{formatCurrency(chart.coins.current_price, currency)}</span>
            </div>
            <div className="flex text-[1.2rem] text-white">
              <p className="mr-2 text-[#3874ff] font-semibold">ATH:</p>
              <span>{formatCurrency(chart.coins.ath, currency)}</span>
            </div>
            <div className="flex text-[1.2rem] text-white">
              <p className="mr-2 text-[#3874ff] font-semibold">Market Cap:</p>
              <span>{formatCurrency(chart.coins.market_cap, currency)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
