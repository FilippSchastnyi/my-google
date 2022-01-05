import Head from "next/head";
import Header from "../components/Header/Header";
import {API_KEY, CONTEXT_KEY} from "../keys";
import Response from "../Response"
import {useRouter} from "next/router";
import SearchResults from "../components/SearchResults/SearchResults";

function Search({ results }) {

  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{router.query.term} - Google2.0 Search</title>
        <link rel="icon" href="" />
      </Head>
      {/*  Header  */}
      <Header />
      {/* Search Results */}
      <SearchResults results={results} />
    </div>
  )
}

export default Search;

export async function getServerSideProps(context) {
  const useDummy = false;

  const startPagination = context.query.start || '0'

  const data = useDummy
    ? Response
    : await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startPagination}`).then((response) => response.json());

  return {
    props: {
      results: data,
    }
  }
}