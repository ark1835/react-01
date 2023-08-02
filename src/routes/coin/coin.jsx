import { useEffect, useState } from "react";

export default function _() {
  // Banana
  const [coinData, setCoinData] = useState({}); 
  const [isLoadedCoinData, setLoadedCoinData] = useState(false);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((data) => {
        setCoinData(data);
        setLoadedCoinData(true);
      })
      .catch((error) => console.log(error));

    // then 은 async, await 가 나오기 전 방식.
  }, []);

  console.log("Aa")

  const [selectedCoin, setSelectedCoin] = useState("");
  const changeSelectedCoin = (ev) => {
    const value = coinData.filter((value) => value.id === ev.target.value);
    setSelectedCoin(JSON.stringify(value));
  }


  return (
    <main>
      {isLoadedCoinData ? (
        <>
          <p>TOTAL SIZE : {coinData.length}</p>
          <select onChange={changeSelectedCoin}>
            {coinData.map((value) => {
              return <option key={value.id} value={value.id}>{value.symbol}</option>
            })}
          </select>
        </>
      ) : (
        <span>Loading...</span>
      )}
      <p>{selectedCoin}</p>
    </main>
  );
}
