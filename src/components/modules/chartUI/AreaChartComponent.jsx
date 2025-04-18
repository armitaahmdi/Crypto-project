import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts";

export default function AreaChartComponent({ data, type }) {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart
                width={200}
                height={100}
                data={data}>
                <YAxis dataKey={type} domain={["auto", "auto"]} />
                <XAxis dataKey="date" hide />
                <Area
                    type="monotone"
                    dataKey={type}
                    stroke="#3874ff"
                    fill="#3874ff" />
            </AreaChart>
        </ResponsiveContainer>
    )
}
