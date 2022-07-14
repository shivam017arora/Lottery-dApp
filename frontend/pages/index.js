import { useMoralis } from "react-moralis";
import Head from "next/head";
import MHeader from "../components/MHeader";
import Header from "../components/Header";
import LotteryEntrace from "../components/LotteryEntrance";

export default function Home() {
  return (
    <div>
      <Head>
        <title> Lottery </title>
        <meta name="description" content="Smart Contract Lottery App" />
      </Head>
      {/* <MHeader /> */}
      <div className="h-screen bg-right bg-cover mybackground">
        <Header />
        <LotteryEntrace />
      </div>
    </div>
  );
}
