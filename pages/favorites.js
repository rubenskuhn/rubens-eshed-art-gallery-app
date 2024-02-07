import ArtPieces from "@/components/ArtPieces";
import { Card, Image, Text, Group, RingProgress } from "@mantine/core";
import classes from "@/components/ArtPiecePreview.module.css";
import FavoriteButton from "@/components/FavoriteButton";
import Spotlight from "@/components/Spotlight";
import { ArtPiecePreview } from "@/components/ArtPiecePreview";

export default function FavoritePage({ data, artPiecesInfo, isFavorite }) {
  const favoriteList = data.filter((dataPiece) =>
    artPiecesInfo.find(
      (artPiece) => artPiece.slug === dataPiece.slug && dataPiece.isFavorite
    )
  );

  return (
    <div>
      <h1>Art Gallery</h1>

      <h2>Your Favorite Garbage</h2>

      <Card>
        <favoriteList data={favoriteList} />
      </Card>
    </div>
  );
}

// waiting to receive list of favorites
