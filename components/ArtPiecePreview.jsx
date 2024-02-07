import { Card, Image, Text, Group, RingProgress } from "@mantine/core";
import classes from "./ArtPiecePreview.module.css";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";

export function ArtPiecePreview({
  image,
  title = "",
  artist,
  slug,
  handleToggleFavorite,
}) {
  return (
    <Card withBorder padding="lg" className={classes.card}>
      <Card.Section>
        <Link href={`/art-pieces/${slug}`}>
          <Image src={image} alt={title} height={400} />
        </Link>
      </Card.Section>
      <caption>
        <FavoriteButton
          slug={slug}
          handleToggleFavorite={handleToggleFavorite}
        />
        <Group justify="space-between" mt="xl">
          <Text fz="sm" fw={700} className={classes.title}>
            {title}
          </Text>
          <Group gap={5}>
            <Text fz="sm" fw={700}>
              {artist}
            </Text>
          </Group>
        </Group>
      </caption>
    </Card>
  );
}
