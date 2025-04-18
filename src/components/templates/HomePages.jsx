import { useEffect, useState } from "react"
import { getCoinList } from "../../services/CryptoApi";

import TableCoin from "../modules/TableCoin";
import Pagination from "../modules/Pagination";
import Search from "../modules/Search";
import Chart from "../modules/Chart";
import SocialInformation from "../modules/SocialInformation";

export default function HomePages() {
    const [coins, setCoins] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [currency, setCurrency] = useState('usd');
    const [chart, setChart] = useState(null);
    const [info, setInfo] = useState(null);

    useEffect(() => {
        setIsLoading(true)
        const getData = async () => {
            try {
                const res = await fetch(getCoinList(page, currency));
                const json = await res.json();
                console.log(json);
                setCoins(json); 
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        getData();
    }, [page, currency]);
  return (
    <>
        <Search currency={currency} setCurrency={setCurrency} />
        <TableCoin coins={coins} isLoading={isLoading} currency={currency} setChart={setChart} setInfo={setInfo} />
        <Pagination page={page} setPage={setPage} />
        {!!chart && <Chart chart={chart} setChart={setChart} currency={currency} />}
        {!!info && <SocialInformation info={info} setInfo={setInfo} />}
    </>
  )
}
