import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

export default function LineChartComponent({ data, type }) {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart width={400} height={400} data={data}>
                <CartesianGrid stroke="#404042" />
                <Line type="monotone"
                    dataKey={type}
                    stroke="#3874ff"
                    strokeWidth="2px" />
                <YAxis dataKey={type} domain={["auto", "auto"]} />
                <XAxis dataKey="date" hide />
                <Legend />
                <Tooltip />
            </LineChart>
        </ResponsiveContainer>
    )
}
