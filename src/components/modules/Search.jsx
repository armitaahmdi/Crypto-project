import { useEffect, useState } from "react";

// API
import { searchCoin } from "../../services/CryptoApi";

// Components
import Loading from "../../assets/loading";

export default function Search({ currency, setCurrency }) {
    const [text, setText] = useState("");
    const [coins, setCoins] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        // if text was empty do NOTHING!
        setCoins([]);
        if (!text) {
            setIsLoading(false);
            return;
        }

        const search = async () => {
            try {
                const res = await fetch(searchCoin(text), { signal: controller.signal });
                const json = await res.json();
                if (json.coins) {
                    setIsLoading(false);
                    setCoins(json.coins);
                }
            } catch (error) {
                if (error.name !== "AbortError") {
                    console.error("Error fetching data:", error);
                }
            }
        };

        setIsLoading(true);
        search();

        // cleanUp Function
        return () => controller.abort();
    }, [text]);

    return (
        <div className="mt-12 relative">
            <input
                className="w-full sm:w-[300px] h-[50px] p-2 text-[1rem] text-white bg-[#23242e] border-none rounded-md"
                type="text"
                value={text}
                placeholder="Search"
                onChange={(e) => setText(e.target.value)}
            />
            <select
                className="focus:outline-none bg-[#22262e] text-white ml-3 w-[100px] sm:w-[55px] h-[49px] rounded-md cursor-pointer mt-2 sm:mt-0"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
            >
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="jpy">JPY</option>
                <option value="gbp">GBP</option>
                <option value="try">TRY</option>
            </select>
            {!!coins.length || isLoading ? (
                <div
                    className="custom-scrollbar absolute text-center h-[400px] sm:h-[300px] w-full sm:w-[300px] rounded-md overflow-y-scroll bg-[#18181c] border-2 border-[#22262e] mt-2 p-5"
                >
                    <style>
                        {`.custom-scrollbar::-webkit-scrollbar {
                        width: 8px;
                        background-color: transparent;}`}
                    </style>
                    {isLoading && <Loading backgroundColor="#18181c" />}
                    <ul>
                        {coins.map((coin) => (
                            <li
                                className="flex mb-3 pb-1 border-b-2 border-[#22262e]"
                                key={coin.id}
                            >
                                <img className="mr-2 w-6 h-6" src={coin.thumb} alt={coin.name} />
                                <p>{coin.name}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : null}
        </div>
    );
}
