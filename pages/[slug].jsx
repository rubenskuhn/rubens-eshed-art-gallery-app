import { useRouter } from "next/router";
import Image from "next/image";
import ArtPieceDetails from "@/components/ArtPieceDetails";

export default function artPieceDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const v_d = data.find(({ slug }) => slug === router.query.slug);
  consolog("============", v_d);

  return (
    <>
      <h1>Detailes Of The Piece `${title}`</h1>
      <p>Post: {router.query.slug}</p>;
    </>
  );
}
