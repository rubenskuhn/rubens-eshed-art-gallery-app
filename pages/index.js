import useSWR from "swr";
import Image from "next/image";

export default function HomePage() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  console.log(data);

  if (error) return <div>Failed to load, Dumb-dumb</div>;
  if (isLoading) return <div>Wait! Don't shoot! Loading...</div>;

  // map and render data

  return (
    <div>
      <h1>Vomit... or Modern Art if you must</h1>

      {data.map((artPiece) => {
        return (
          <div className="art-piece">
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
    </div>
  );
}

