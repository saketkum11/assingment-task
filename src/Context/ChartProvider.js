import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const ChartContext = createContext();
const useChart = () => useContext(ChartContext);
const ChartProvider = ({ children }) => {
  const [chartData, setChartProvider] = useState({});
  const [cryptoComponayData, setCryptoComponayData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://rest.coinapi.io/v1/exchanges/BINANCE",
          {
            headers: {
              "X-CoinAPI-Key": "C7D09B06-83D0-499E-B66C-39E0800ED9BC",
            },
          }
        );
        const result = await response.json();
        setChartProvider(result);
      } catch (error) {
        console.error(error);
        toast.error(error);
      }
    };
    fetchData();
  }, []);

  const getCryptoCompanyData = async ({ id }) => {
    try {
      const response = await fetch(
        `https://rest.coinapi.io/v1/exchanges/${id}`,
        {
          headers: {
            "X-CoinAPI-Key": "C7D09B06-83D0-499E-B66C-39E0800ED9BC",
          },
        }
      );
      const result = await response.json();
      setCryptoComponayData(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ChartContext.Provider
      value={{
        chartData,
        setChartProvider,
        getCryptoCompanyData,
        cryptoComponayData,
      }}
    >
      {children}
    </ChartContext.Provider>
  );
};
export { ChartProvider, useChart };
