import { sanityFetch } from "../../sanity/lib/live";
import { NAVIGATION_QUERY } from "../../sanity/lib/queries";
import Navigation from "./Navigation";

const NavigationData = async () => {
  const { data } = await sanityFetch({
    query: NAVIGATION_QUERY,
  });

  return <Navigation nav={data.genres} />;
};

export default NavigationData;
