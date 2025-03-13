    import { useEffect, useState } from "preact/hooks";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://open.er-api.com/v6/latest/${currency}`)
      .then(res => res.json())
      .then(res => setData(res.rates)) // Only set the rates data
      .catch(err => console.error("Error fetching currency data:", err));
  }, [currency]);
  
  
  return data; // ✅ Return data for use in components
}

export default useCurrencyInfo; 