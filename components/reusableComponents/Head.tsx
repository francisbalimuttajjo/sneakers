import Head from "next/head";

type Props = {
  title: string;
};

const Header = (props: Props) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="movies app" content="movies app" />
      <link rel="icon" href="" />
    </Head>
  );
};

export default Header;
