import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "@/components/layout";

export default function App({ Component, pageProps }) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  if (error) return <div>Failed to load, Dumb-dumb</div>;
  if (isLoading) return <div>Wait! Don&apos;t shoot! Loading...</div>;
  return (
    <>
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} data={data} />
      </Layout>
    </>
  );
}
