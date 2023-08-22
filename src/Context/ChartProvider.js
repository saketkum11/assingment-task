import { createContext, useContext, useState } from "react";

const ChartContext = createContext();
const useChart = () => useContext(ChartContext);
const ChartProvider = ({ children }) => {
  const [chartData, setChartProvider] = useState();
  /*
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://rest.coinapi.io/v1/exchanges", {
          headers: {
            "X-CoinAPI-Key": "0273E30F-8BB3-40B8-8D85-3C9E2257CEDD",
          },
        });
        const result = await response.json();
        setChartProvider(result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  console.log(chartData, "linke 28");*/
  return (
    <ChartContext.Provider value={{ chartData, setChartProvider }}>
      {children}
    </ChartContext.Provider>
  );
};
export { ChartProvider, useChart };
