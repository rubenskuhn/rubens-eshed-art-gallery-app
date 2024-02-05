// import { ArtPiecePreview } from "@/components/ArtPiecePreview";
import Image from "next/image";

export default function ArtPieces({ data }) {
  return (
    <ul>
      {data.map((artPiece) => {
        return (
          <div key={artPiece.slug} className="art-piece">
            <p>{artPiece.artist}</p>
            <p>{artPiece.name}</p>
            <Image
              src={artPiece.imageSource}
              width={500}
              height={500}
              alt="Image of the art piece"
            />
          </div>
        );
      })}
    </ul>
  );
}
