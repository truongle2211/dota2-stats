import { Input } from "antd";

// const { Search } = Input;

const SearchBox = ({ onChangeSearchBox }) => {
  return (
    <Input placeholder="Search Hero" allowClear onChange={onChangeSearchBox} />
  );
};

export default SearchBox;
