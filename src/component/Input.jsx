const Input = ({
  searchName = { searchName },
  setSearchName = { setSearchName },
  searchPrice = { searchPrice },
  setSearchPrice = { setSearchPrice },
  status = { status },
  setStatus = { setStatus },
}) => {
  const inputName = (e) => {
    setSearchName(e.target.value);
  };
  const inputPrice = (e) => {
    setSearchPrice(e.target.value);
  };
  const inputStatusHave = (e) => {
    setStatus("con hang");
    console.log("have");
  };
  const inputStatusNot = (e) => {
    setStatus("het hang");
    console.log("not");
  };
  return (
    <div className="flex justify-evenly">
      <div>
        <label htmlFor="">ProductName</label>
        <input
          className="border border-black p-1 ml-2 rounded-lg"
          type="text"
          placeholder="name...."
          onChange={inputName}
        />
      </div>
      <div>
        <label htmlFor="">Price</label>
        <input
          className="border border-black p-1 ml-2 rounded-lg"
          type="number"
          placeholder="$"
          onChange={inputPrice}
        />
      </div>
      <div className="flex items-center text-xl">
        <input className="mx-2" type="radio" name="status" onClick={inputStatusHave} /> Còn hàng
        <input className="mx-2" type="radio" onClick={inputStatusNot} name="status" /> Hết hàng
      </div>
    </div>
  );
};
export default Input;
