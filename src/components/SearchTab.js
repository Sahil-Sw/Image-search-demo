import styled from "styled-components";
import SearchBar from "./SearchBar";
import { useDispatch, useSelector } from "react-redux/es/exports";
import ImageCard from "./ImageCard";
import { useState } from "react";
import axios from "axios";
import {
  getImageInitiate,
  imageRecievedSuccess,
  failedToRecieveImage,
} from "./redux/actionCreator";

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: #ccc;
  padding-top: 70px;
`;

const InsideContainer = styled.div`
  width: 1100px;
  margin: 0 auto;
`;

const ImageContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
`;

const SearchTermContainer = styled.div`
  margin: 15px 0;
`;

const SearchTerm = styled.h2`
  font-size: 28px;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 700;
  line-height: 32px;
  text-transform: capitalize;
  margin: 0;
`;

const NoOfResults = styled.h4`
  font-size: 12px;
  font-family: "Roboto Condensed", sans-serif;
  line-height: 15px;
  margin: 0;
  color: #888;
`;

const LoadMoreButton = styled.div`
  width: 100px;

  height: 40px;
  background: #000;
  color: #fff;
  font-family: "Roboto Condensed", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 5px;
  margin: 20px auto;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const StatusMessage = styled.div`
  font-size: 28px;
  font-family: "Roboto Condensed", sans-serif;
  text-align: center;
  font-weight: 700;
  line-height: 32px;
  text-transform: capitalize;
  margin: 0 auto;
`;

const SearchTab = () => {
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const imageData = useSelector((state) => state.imageData);
  const [keyword, setKeyword] = useState("");
  const CLIENT_ID = "rbvpxYawPfdzhWr37-abic6ehzzYG0oO0tBEy59F17U";
  const dispatch = useDispatch();
  const [pageNo, setPageNo] = useState(1);

  const getImages = async (query, pageNo) => {
    try {
      dispatch(getImageInitiate());
      const url = `https://api.unsplash.com/search/photos/?page=${String(
        pageNo
      )}&query=${query}&client_id=${CLIENT_ID}`;
      const results = await axios.get(url);
      dispatch(imageRecievedSuccess(results.data));
    } catch (err) {
      dispatch(failedToRecieveImage());
    }
  };

  return (
    <MainContainer>
      <InsideContainer>
        <SearchBar
          getKeyword={setKeyword}
          makeIntialRequest={getImages}
          resetPageNo={setPageNo}
        ></SearchBar>

        {error && (
          <StatusMessage>Something went wrong! Try again.</StatusMessage>
        )}
        {loading && <StatusMessage>Loading...</StatusMessage>}
        {!loading && !error && imageData.total && (
          <>
            <SearchTermContainer>
              <SearchTerm>{keyword}</SearchTerm>
              <NoOfResults>
                {imageData.total} results have been found
              </NoOfResults>
            </SearchTermContainer>
            <ImageContainer>
              {imageData.results &&
                imageData.results.map((image) => {
                  return (
                    <ImageCard
                      key={image.id}
                      src={image.urls.small}
                      alt={image.alt_description}
                    ></ImageCard>
                  );
                })}
            </ImageContainer>
            <LoadMoreButton
              onClick={() => {
                setPageNo((prev) => prev + 1);
                getImages(keyword, pageNo + 1);
              }}
            >
              Load more
            </LoadMoreButton>
          </>
        )}
      </InsideContainer>
    </MainContainer>
  );
};

export default SearchTab;
