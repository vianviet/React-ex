import axios from "axios";
import React, { useEffect, useState } from "react";
import Message from "./Message";

export default function Main() {
  const [state, setState] = useState([]);
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("admin");
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get(`https://vianviet.herokuapp.com/product`)
      .then((res) => {
        console.log(res.data.list);
        setState(res.data.list);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let req = { username: username, password: password };
    axios
      .post(`https://vianviet.herokuapp.com/authenticate`, req)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setMessage(res.data.message);
      })
      .catch((error) => setMessage("Đăng nhập thất bại"));
  };
  return (
    <div>
      <label>GET Product</label>
      <ul>
        {state.map((each, index) => (
          <li key={index}>{each.name}</li>
        ))}
      </ul>
      <label>POST Login</label>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>username :</label>
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
        <label>password :</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
      <Message message={message}></Message>
    </div>
  );
}
