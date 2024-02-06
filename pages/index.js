import ArtPieces from "@/components/ArtPieces";
// import spotlightPage from "@/components/SpotLight";

export default function HomePage({ data }) {
  return (
    <div>
      <h1>Art Gallery</h1>

      <h2>Spot Light of the Day:</h2>
      <spotlightPage data={data} />

      <h3>Other garbage:</h3>
      <ArtPieces data={data} />
    </div>
  );
}
