import useSWR from "swr";

export default function HomePage() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  console.log(data);

  if (error) return <div>Failed to load, Dumb-dumb</div>;
  if (isLoading) return <div>Wait! Don't shoot! Loading...</div>;

  // render data
  // return <div>hello {data.name}!</div>;

  return (
    <div>
      <h1>F#ck off & Die.js</h1>
    </div>
  );
}
