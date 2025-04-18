const currencySymbols = {
    eur: "€",
    usd: "$",
    jpy: "¥",
    gbp: "£",
    try: "₺"
};

export const formatCurrency = (value, currency) => {
    return `${currencySymbols[currency] || ""}${value?.toLocaleString() || ""}`;
};