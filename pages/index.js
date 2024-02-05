import ArtPieces from "@/components/ArtPieces";
// import spotlightPage from "@/components/SpotLight";

export default function HomePage({ data }) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  console.log("==========", data);

  // const { data, error, isLoading } = useSWR(
  //   "https://example-apis.vercel.app/api/art",
  //   fetcher
  // );
  // console.log(data);

  // if (error) return <div>Failed to load, Dumb-dumb</div>;
  // if (isLoading) return <div>Wait! Don't shoot! Loading...</div>;

  // map and render data

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
