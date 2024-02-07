import { useRouter } from "next/router";
import Image from "next/image";
import ArtPieceDetails from "@/components/ArtPieceDetails";
import FavoriteButton from "@/components/FavoriteButton";
import classes from "@/components/ArtPiecePreview.module.css";
import { Card } from "@mantine/core";

export default function artPieceDetail({ data }) {
  const router = useRouter();
  const { slug } = router.query;
  const artPiece = data.find((artpiece) => artpiece.slug === slug);
  console.log("============", artPiece);

  return (
    <>
      <Card withBorder padding="lg" className={classes.card}>
        <h1>Detailes Of The Piece </h1>
        <div>
          <p>{artPiece.name}</p>
          <p>{artPiece.year}</p>
          <p>{artPiece.artist}</p>
          <Image
            src={artPiece.imageSource}
            width={500}
            height={500}
            alt="Image of the art piece"
          />
          <button type="back-button" onClick={() => router.back()}>
            Back to Main
          </button>
        </div>
      </Card>
    </>
  );
}
