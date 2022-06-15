import styled from "styled-components";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux/es/hooks/useSelector";

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: #ccc;
`;

const InsideContainer = styled.div`
  width: 1100px;
  margin: 0 auto;
`;

const ImageContainer = styled.div`
  height: 300px;
  overflow: scroll;
`;

const SearchTab = () => {
  const imageData = useSelector((state) => state.imageData);
  console.log(imageData);
  return (
    <MainContainer>
      <InsideContainer>
        <SearchBar></SearchBar>
        <ImageContainer>
          {imageData.results &&
            imageData.results.map((image) => {
              return (
                <img
                  key={image.id}
                  src={image.urls.small}
                  alt={image.alt_description}
                ></img>
              );
            })}
        </ImageContainer>
      </InsideContainer>
    </MainContainer>
  );
};

export default SearchTab;
