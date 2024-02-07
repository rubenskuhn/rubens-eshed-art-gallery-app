import ArtPieces from "@/components/ArtPieces";
import FavoriteButton from "@/components/FavoriteButton";
import { Card } from "@mantine/core";
import classes from "@/components/ArtPiecePreview.module.css";

export default function HomePage({ data, handleToggleFavorite }) {
  return (
    <>
      <h1>Art Gallery</h1>

      <h2>Your Favorite's List:</h2>

      <div>
        <Card withBorder padding="lg" className={classes.card}>
          <ArtPieces data={data} handleToggleFavorite={handleToggleFavorite} />
        </Card>
      </div>
    </>
  );
}
