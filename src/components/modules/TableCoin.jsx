import Loading from "../../assets/loading.jsx"
import TableRow from './TableRow'

export default function TableCoin({ coins, isLoading, currency, setChart, setInfo }) {
    return (
        <div className="flex justify-center my-12 min-h-[1000px]">
            {isLoading ? (
                <div className="flex justify-center items-center m-20">
                    <Loading backgroundColor="#000" />
                </div>
            )
                : (
                    <div className="w-full overflow-x-auto">
                        <table className='w-full border-collapse min-w-[600px]'>
                            <thead className="border-b-2 border-white mb-5">
                                <tr className="text-left py-2 text-[1.2rem] whitespace-nowrap">
                                    <th>Coin</th>
                                    <th >Name</th>
                                    <th>Price</th>
                                    <th>24h</th>
                                    <th>Total Volume</th>
                                    <th>Info</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    coins.map((coin) => (
                                        <TableRow key={coin.id} coins={coin} currency={currency} setChart={setChart} setInfo={setInfo} />
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                )}
        </div>
    )
}
