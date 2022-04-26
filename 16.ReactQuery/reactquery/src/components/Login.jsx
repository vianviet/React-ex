import React, { useState } from "react";
import axios from "axios";
import { useMutation } from "react-query";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const mutation = useMutation((object) =>
    axios.post("https://vianviet.herokuapp.com/authenticate", object)
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    const info = {
      username: username,
      password: password,
    };
    mutation.mutate(info);
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
      <div>
        {mutation.isLoading ? (
          <div>Waiting...</div>
        ) : (
          <>
            {mutation.isError ? <div>Đăng nhập thất bại</div> : null}

            {mutation.isSuccess ? (
              <div>
                {mutation.data.data.message}
                {"! "} Xin chào {mutation.data.data.user.username}
              </div>
            ) : null}
          </>
        )}
      </div>
    </div>
  );
}
