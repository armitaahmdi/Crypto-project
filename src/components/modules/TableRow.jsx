import chartUp from "../../assets/chart-up.svg";
import chartDown from "../../assets/chart-down.svg";
import { BiAddToQueue } from "react-icons/bi";
// Api
import { getSocialInfo, marketChart } from "../../services/CryptoApi";
import { formatCurrency } from "../../helper/currencyUtils";

export default function TableRow({ setChart, currency, coins, setInfo }) {
    const {
        id,
        image,
        name,
        total_volume,
        current_price,
        price_change_percentage_24h,
        symbol,
    } = coins;

    const showHandler = async () => {
        try {
            const res = await fetch(marketChart(id));
            const json = await res.json();
            setChart({ ...json, coins });
        } catch (error) {
            console.log("Error while fetching Data :", error);
            setChart(null);
        }
    };

    const showInfoHandler = async () => {
        try {
            const res = await fetch(getSocialInfo(id));
            const json = await res.json();
            console.log(json, "sss");
            setInfo(json);
        } catch (error) {
            console.log("Error while fetching Data :", error);
            setInfo(null);
        }
    };

    return (
        <tr className="h-[60px] sm:h-[70px] md:h-[100px] px-2 sm:px-4 md:px-6 border-b-2 border-zinc-800 font-semibold text-[0.9rem] sm:text-[1rem] md:text-[1.2rem]">
            <td>
                <div onClick={showHandler} className="flex items-center cursor-pointer">
                    <img src={image} alt={name} className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                    <span className="font-semibold text-[0.9rem] sm:text-[1rem]">{symbol.toUpperCase()}</span>
                </div>
            </td>
            <td className="text-[0.9rem] sm:text-[1rem] md:text-[1.2rem]">{name}</td>
            <td className="text-[0.9rem] sm:text-[1rem] md:text-[1.2rem]">
                <span>{formatCurrency(coins.price, currency)}</span>
                {current_price.toLocaleString()}
            </td>
            <td
                className={`text-[0.9rem] sm:text-[1rem] md:text-[1.2rem] ${price_change_percentage_24h > 0 ? "text-lime-500" : "text-red-700"}`}
            >
                {price_change_percentage_24h.toFixed(2)} %
            </td>
            <td className="text-[0.9rem] sm:text-[1rem] md:text-[1.2rem]">{total_volume.toLocaleString()}</td>
            <td onClick={showInfoHandler} className="text-[1.2rem] sm:text-[1.5rem] cursor-pointer">
                <BiAddToQueue />
            </td>
            <td>
                <img
                    src={price_change_percentage_24h > 0 ? chartUp : chartDown}
                    alt={name}
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                />
            </td>
        </tr>
    );
}
