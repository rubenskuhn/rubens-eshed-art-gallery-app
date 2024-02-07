import { useRouter } from "next/router";
import Image from "next/image";
import ArtPieceDetails from "@/components/ArtPieceDetails";
import data from "pages/_app.js";
import Link from "next/link";

import Head from "next/head";


export default function artPieceDetail() {
  const router = useRouter();
  const { slug } = router.query;
  console.log("slug: ", slug);

  // const v_d = data.find(({ slug }) => slug === router.query.slug);
  // console.log("v_d: ", v_d);

  return (
    <>
      <h1>Detailes Of The Piece</h1>
       <image></image>
      <p>Post: {router.query.slug}</p>;
    </>
  );
}
