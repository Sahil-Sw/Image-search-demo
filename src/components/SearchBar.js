import styled from "styled-components";
import { useState } from "react";

const SearchInput = styled.input`
  width: 80%;
  padding: 10px 12px;
  border: none;
  color: #777;
  font-size: 16px;
  box-shadow: 2px 3px 4px 0 rgba(0, 0, 0, 0.2);
  font-family: "Roboto Condensed", sans-serif;
  width: 80%;
  &:hover {
    opacity: 0.8;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 400px) {
    width: 250px;
  }
`;

const SearchBarContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 30px;

  @media (max-width: 400px) {
    flex-direction: column;
    justify-content: space-between;
  }
`;

const SearchButton = styled.div`
  width: 50px;
  height: 40px;
  background: #000;
  color: #fff;
  font-family: "Roboto Condensed", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 5px;
  margin-left: 20px;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  @media (max-width: 400px) {
    width: 240px;
    margin-top: 20px;
    margin-left: 0;
  }
`;

const SearchBar = (props) => {
  const [keyword, setKeyword] = useState("");

  const onChangeHanlder = (e) => {
    setKeyword(e.target.value);
  };

  const onSearchHandler = async (e) => {
    props.getKeyword(keyword);
    props.makeIntialRequest(keyword, 1);
    props.resetPageNo(1);
  };

  return (
    <SearchBarContainer>
      {" "}
      <SearchInput
        type="search"
        onChange={onChangeHanlder}
        placeholder="Enter a search term"
      ></SearchInput>
      <SearchButton onClick={onSearchHandler}>Search</SearchButton>
    </SearchBarContainer>
  );
};

export default SearchBar;
