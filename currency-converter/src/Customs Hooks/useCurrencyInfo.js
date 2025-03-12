import { useEffect, useState } from "preact/hooks";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://open.er-api.com/v6/latest/${currency}`)
      .then(res => res.json()) // ✅ Return JSON
      .then(res => setData(res.rates)) // ✅ Update state correctly
      .catch(err => console.error("Error fetching currency data:", err)); // ✅ Handle errors
  }, [currency]); // ✅ Correct dependency array

  return data; // ✅ Return data for use in components
}

export default useCurrencyInfo; 