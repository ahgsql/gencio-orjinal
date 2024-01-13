import React from "react";
import SEO from "../common/seo";
import HomeOne from "../components/homes/home";
import Wrapper from "../layout/wrapper";

export async function getServerSideProps() {
  console.log("settings/menu");
  const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "settings/menu", {
    cache: "no-store",
  });

  const menu = await res.json();
  return { props: { menu } };
}

const Home = ({ menu }) => {
  return (
    <Wrapper>
      <SEO pageTitle={"Gencio"} />
      <HomeOne menu={menu} />
    </Wrapper>
  );
};

export default Home;
