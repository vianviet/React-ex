import { useParams } from "react-router-dom";

export default function Invoice() {
  let params = useParams();
  return <h1>Invoice {params.invoiceId}</h1>;
}
