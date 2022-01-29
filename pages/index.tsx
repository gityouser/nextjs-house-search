// import { useState } from "react";
import { useQuery, gql } from "@apollo/client";
// import { useDebounce } from "use-debounce";
import Layout from "src/components/layout";
import Map from "src/components/map";
// import HouseList from "src/components/houseList";
// import { useLastData } from "src/utils/useLastData";
// import { useLocalState } from "src/utils/useLocalState";
// import { HousesQuery, HousesQueryVariables } from "src/generated/HousesQuery";

const HELLO_QUERY = gql`
  query HelloQuery {
    hello
  }
`;

export default function Home() {
  const { data, loading } = useQuery(HELLO_QUERY);

  const navHeight = "64px";
  return (
    <Layout
      main={
        <div className="flex">
          <div
            className="w-1/2 pb-4"
            style={{
              maxHeight: `calc(100vh - ${navHeight}`,
              overflowX: "scroll",
            }}
          >
            HouseList
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
          <div className="w-1/2">{<Map />}</div>
        </div>
      }
    />
  );
}
