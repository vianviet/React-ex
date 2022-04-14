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
  const [checked, setChecked] = useState(1);
  return (
    <div>
      {data.map((each) => {
        return (
          <div key={each.id}>
            <input
              type="radio"
              checked={each.id === checked}
              onChange={() => setChecked(each.id)}
            />
            {each.name}
          </div>
        );
      })}
    </div>
  );
}
export default Main;
