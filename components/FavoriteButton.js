import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";

const StyledButton = styled.button`
  position: relative;
  ${'' /* top: 0;
  right: 0; */}
  background: none;
  border: none;
  cursor: pointer;
`;

export default function FavoriteButton() {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <StyledButton
      className="favorite-button"
      aria-label="Save this art piece as favorite"
      onClick={toggleFavorite}
    >
      {isFavorite ? (
        <Image
          src="/assets/heart-filled.svg"
          alt="A filled heart"
          width={24}
          height={24}
        />
      ) : (
        <Image
          src="/assets/heart-outline.svg"
          alt="An outlined heart"
          width={24}
          height={24}
        />
      )}
    </StyledButton>
  );
}
