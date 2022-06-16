import styled from "styled-components";

const ImageCont = styled.img`
  width: 180px;
  height: 180px;
  border: solid 1px #bbb;
  margin: 10px;
  box-shadow: 3px 3px 5px 1px rgba(0, 0, 0, 0.7);
`;

const ImageCard = (props) => {
  return <ImageCont src={props.src} alt={props.alt}></ImageCont>;
};

export default ImageCard;
