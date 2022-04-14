import { useState } from "react";

function Main(props) {
  const storage = JSON.parse(localStorage.getItem("jobs"));
  const [job, setJob] = useState("");
  const [result, setResult] = useState(storage ?? []);

  const AddJob = () => {
    setResult((prev) => {
      const newResult = [...prev, job];

      const jsonJobs = JSON.stringify(newResult);
      localStorage.setItem("jobs", jsonJobs);
      return newResult;
    });
    setJob("");
  };
  return (
    <div>
      <input type="text" onChange={(e) => setJob(e.target.value)} />
      <button onClick={(e) => AddJob()}>Add job</button>
      <br />
      <ul>
        {result.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
}
export default Main;
