import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";

const StyledButton = styled.button`
  position: absolute;
  top: 3;
  right: 3;
  background: white;
  border: red;
  cursor: pointer;
`;

export default function FavoriteButton({ slug, handleToggleFavorite }) {
  const [isFavorite, setIsFavorite] = useState("");
  // const toggleIsFavorite = () => {
  //   setIsFavorite(!isFavorite);
  // };

  return (
    <StyledButton
      className="favorite-button"
      aria-label="Save this art piece as favorite"
      onClick={handleToggleFavorite}
      position={(10, 10)}
    >
      {isFavorite ? (
        <Image
          src="/assets/heart.svg"
          alt="A filled heart"
          width={100}
          height={100}
          position={(0, 0)}
          // top: 10;
          // right: 0;
          // background: white;
          // border: none;
          // cursor: pointer;
        />
      ) : (
        <Image
          src="/assets/heart.svg"
          alt="An outlined heart"
          width={24}
          height={24}
        />
      )}
    </StyledButton>
  );
}
