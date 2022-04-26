import React from "react";
import { useQuery } from "react-query";

const getProduct = async () => {
  const response = await fetch("https://vianviet.herokuapp.com/product");
  return response.json();
};
export default function Product() {
  const { data, isFetching, isLoading, error, isError } = useQuery(
    "product",
    getProduct
  );

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <ul>
        {data.list.map((each, index) => (
          <li key={index}>{each.name}</li>
        ))}
      </ul>
      {isFetching && <p>updating...</p>}
    </div>
  );
}
