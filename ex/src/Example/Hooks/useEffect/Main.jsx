import { useEffect, useState } from "react";

function Main(props) {
  const [result, setResult] = useState([]);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    console.log("Effect 1 phát");
    console.log(flag);
    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then((res) => res.json())
      .then((result) => {
        setResult(result);
      });
  }, [flag]);
  return (
    <div>
      <button onClick={(event) => setFlag(!flag)}>Add Data</button>
      <br />
      <ul style={{ backgroundColor: "white" }}>
        {flag &&
          result.map((data, index) => (
            <li key={index}>{flag && data.title}</li>
          ))}
      </ul>
    </div>
  );
}
export default Main;
