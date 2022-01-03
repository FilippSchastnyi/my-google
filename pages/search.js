import Head from "next/head";
import Header from "../components/Header/Header";
const Search = () => {
  return (
    <div>
      <Head>
        <title>Search Results</title>
      </Head>

      <Header/>
      {/*searchResult*/}
    </div>
  );
};

export default Search;

export async function getServerSideProps(context) {
  const useDummyData = false;
  
}