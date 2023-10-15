import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Input from "./component/Input";
import ProductLish from "./component/ProductLish";
import Table from "./component/Table";

function App() {
  const [searchName, setSearchName] = useState("");
  const [searchPrice, setSearchPrice] = useState(0);
  const [status, setStatus] = useState("");
  const FindProductByName = (data) => {
    return data.filter(
      (item) =>
        item.productName.toLowerCase().includes(searchName) &&
        item.Price.includes(searchPrice) &&
        item.Status.toLowerCase().includes(status)
    );
  };
  return (
    <>
      <Input
        searchName={searchName}
        setSearchName={setSearchName}
        searchPrice={searchPrice}
        setSearchPrice={setSearchPrice}
        status={status}
        setStatus={setStatus}
      />

      <Table data={FindProductByName(ProductLish)} />
    </>
  );
}

export default App;
