import { useEffect, useState } from "react";

export default function _() {
  // Banana
  const [count, setCount] = useState(0);
  const addCount = () => setCount((cur) => cur + 1);
  const [count2, setCount2] = useState(0);
  const addCount2 = () => setCount2((cur) => cur + 1);

  useEffect(() => {
    console.log("count ++");
  }, [count]);
  useEffect(() => {
    console.log("count2 ++");
  }, [count2]);

  return (
    <main style={{height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <div style={{border: "1px solid black", padding: "24px"}}>
        home | {count} | {count2}
        <button onClick={addCount}>Add Count ++</button>
        <button onClick={addCount2}>Add Count2 ++</button>
      </div>
    </main>
  );
}
