import React, { createContext, useContext, useState } from "react";
import useLocalStorageState from "use-local-storage-state";

const ArtPiecesContext = createContext();

export const useArtPieces = () => useContext(ArtPiecesContext);

export const ArtPiecesProvider = ({ children }) => {
  const [artPiecesInfo, setArtPiecesInfo] = useLocalStorageState(
    "artPiecesInfo",
    {
      defaultValue: {},
    }
  );
  console.log("artPiecesInfo", artPiecesInfo);
  const toggleFavorite = (artPiece) => {
    const { slug } = artPiece;

    setArtPiecesInfo((currentInfo) => ({
      ...currentInfo,
      [slug]: {
        ...artPiece,
        ...currentInfo[slug],
        isFavorite: !currentInfo[slug]?.isFavorite,
      },
    }));
  };

  const addComment = (artPiece, comment) => {
    const { slug } = artPiece;

    setArtPiecesInfo((currentInfo) => {
      const existingComments = currentInfo[slug]?.comments || [];
      const currentDate = new Date();

      return {
        ...currentInfo,
        [slug]: {
          ...currentInfo[slug],
          comments: [
            {
              date: currentDate.toLocaleDateString(),
              time: currentDate.toLocaleTimeString(),
              comment: comment,
            },
            ...existingComments,
          ],
        },
      };
    });
  };

  return (
    <ArtPiecesContext.Provider
      value={{ artPiecesInfo, toggleFavorite, addComment }}
    >
      {children}
    </ArtPiecesContext.Provider>
  );
};
