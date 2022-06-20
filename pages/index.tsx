import type { NextPage } from "next";
import Head from "../components/reusableComponents/Head";
import Home from "../components/HomeScreen";

const HomePage: NextPage = () => {
  return (
    <>
      <Head title="e-commerce" />
      <Home />
    </>
  );
};

export default HomePage;
