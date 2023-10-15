import React from "react";
import ProductLish from "./ProductLish";

const Table = ({ data }) => {
  return (
    <div className="mt-10">
      <ul className="grid grid-cols-6 gap-x-4 text-3xl">
        <li className="col-span-2">Product Name</li>
        <li className="col-span-1">Price</li>
        <li className="col-span-1">Status</li>
        <li className="col-span-2">Image</li>
      </ul>
      {data.map((item) => (
        <ul
          className="grid grid-cols-6 gap-x-4 my-6 font-bold border py-3 rounded-xl "
          key={item.id}
        >
          <li className="col-span-2 m-auto">{item.productName}</li>
          <li className="col-span-1 m-auto">{item.Price}</li>
          <li className="col-span-1 m-auto">{item.Status}</li>
          <li className="col-span-2 m-auto">
            <img className="max-w-[80px]" src={item.imgLink} alt="" />
          </li>
        </ul>
      ))}
    </div>
  );
};
export default Table;
