import styled from "styled-components";
// import SearchIcon from "./icon.png";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getImageInitiate, imageRecievedSuccess } from "./redux/actionCreator";

const SearchInput = styled.input`
  width: 600px;
  padding: 10px 12px;
`;

const SearchBarContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
`;

const SearchButton = styled.div`
  width: 50px;
  height: 40px;
  background: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 5px;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const SearchBar = () => {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();

  const CLIENT_ID = "rbvpxYawPfdzhWr37-abic6ehzzYG0oO0tBEy59F17U";

  const onChangeHanlder = (e) => {
    setKeyword(e.target.value);
  };

  const onSearchHandler = async (e) => {
    dispatch(getImageInitiate());
    const url = `https://api.unsplash.com/search/photos/?page=1&query=${keyword}&client_id=${CLIENT_ID}`;
    const results = await axios.get(url);
    dispatch(imageRecievedSuccess(results.data));
    console.log(results);
  };

  return (
    <SearchBarContainer>
      {" "}
      <SearchInput type="search" onChange={onChangeHanlder}></SearchInput>
      <SearchButton onClick={onSearchHandler}>Search</SearchButton>
    </SearchBarContainer>
  );
};

export default SearchBar;
