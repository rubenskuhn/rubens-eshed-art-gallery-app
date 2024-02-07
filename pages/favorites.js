import Image from "next/image";
import isFavorite from "@/components/FavoriteButton";
import { Card, Text, Group, RingProgress } from "@mantine/core";
import classes from "../components/ArtPiecePreview.module.css";
import Link from "next/link";


export default function FavoritePage({
  image,
  title = "",
  artist,
  slug,
  isFavorite,
}) {
  return (
    <>

        <Card withBorder padding="lg" className={classes.card}>
          <h1>Your Favourite Pieces</h1>

          <button isFavorite={isFavorite} />
        </Card>

    </>
  );
}
