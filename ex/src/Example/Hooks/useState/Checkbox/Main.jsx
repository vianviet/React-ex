import { useState } from "react";
const data = [
  { id: 1, name: "React" },
  { id: 2, name: "Javascript" },
  { id: 3, name: "Linux" },
  { id: 4, name: "Github" },
  { id: 5, name: "Typescript" },
  { id: 6, name: "NodeJS" },
];

function Main(props) {
  const [checked, setChecked] = useState([]);
  console.log(checked);
  function handleClick(id) {
    setChecked((prev) => {
      const isChecked = checked.includes(id);
      if (isChecked) {
        return checked.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  }

  return (
    <div>
      {data.map((each) => (
        <div key={each.id}>
          <input
            type="checkbox"
            checked={checked.includes(each.id)}
            onChange={() => handleClick(each.id)}
          />
          {each.name}
        </div>
      ))}
    </div>
  );
}
export default Main;
