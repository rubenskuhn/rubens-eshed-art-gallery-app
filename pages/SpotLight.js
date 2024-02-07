import Image from "next/image";
import Spotlight from "@/components/Spotlight";
import FavoriteButton from "@/components/FavoriteButton";
import ArtPieces from "@/components/ArtPieces";
import classes from "@/components/ArtPiecePreview.module.css";
import { Card } from "@mantine/core";

export default function spotlightPage({ data }) {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  let randomNumber = getRandomInt(data.length);

  const randomArtPiece = data[randomNumber];

  return (
    <>
      <h1>Spotlight Art</h1>
      <Card withBorder padding="lg" className={classes.card}>
        <Spotlight randomArtPiece={randomArtPiece} />
      </Card>
    </>
  );
}
