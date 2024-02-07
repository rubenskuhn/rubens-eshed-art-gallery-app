import useSWR from "swr";
import Layout from "@/components/Layout";
import "@mantine/core/styles.css";
import { createTheme, MantineProvider, GlobalStyles } from "@mantine/core";
import GlobalStyle from "../styles";
import "../components/teststyles.css";
import React, { useState } from "react";

const theme = createTheme({
  fontFamily: "Open Sans, sans-serif",
  primaryColor: "cyan",
});

const API_URL = "https://example-apis.vercel.app/api/art";
const fetcher = (url) => fetch(url).then((response) => response.json());

// create state art pieces info = array = filter list of favorites, track by slug

export default function App({ Component, pageProps }) {
  const [artPiecesInfo, setArtPiecesInfo] = useState([]);
  const { data, error, isLoading } = useSWR(API_URL, fetcher);
  console.log("========== State", artPiecesInfo);

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Error...</h1>;

  function handleToggleFavorite(slug) {
    const artPiece = artPiecesInfo.find((artPiece) => artPiece.slug === slug);
    if (artPiece) {
      const newArtList = artPiecesInfo.map((pieceInfo) =>
        pieceInfo.slug === slug
          ? { isFavorite: !pieceInfo.isFavorite, slug }
          : pieceInfo
      );
      setArtPiecesInfo(newArtList);
    } else {
      setArtPiecesInfo((prevstate) => [
        ...prevstate,
        { isFavorite: true, slug },
      ]);
    }
  }

  return (
    <Layout>
      <MantineProvider theme={theme} defaultColorScheme="dark">
        <GlobalStyle />
        <Component
          {...pageProps}
          data={data}
          artPiecesInfo={artPiecesInfo}
          handleToggleFavorite={handleToggleFavorite}
        />
      </MantineProvider>
    </Layout>
  );
}
