import type { NextPage } from "next";
import Head from "../components/reusableComponents/Head";
import Home from "../components/Home"

const HomePage: NextPage = () => {
  return (
    <>
      <Head title="Sneakers" />
      <Home />
    </>
  );
};

export default HomePage;
