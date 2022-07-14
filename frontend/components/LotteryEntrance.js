import { useState } from "react";
import { useWeb3Contract } from "react-moralis";
import { contractAddresses } from "../constants";
import { abi } from "../constants/constants";
import { useMoralis } from "react-moralis";
import { useEffect } from "react";
import { ethers } from "ethers";
import { useNotification } from "web3uikit";

export default function LotteryEntrace() {
  const { runContractFunction } = useWeb3Contract();
  const { chainId, isWeb3Enabled } = useMoralis();
  const [entranceFee, setEntranceFee] = useState(0);
  const [numberOfPlayers, setNumberOfPlayers] = useState(0);
  const [recentWinner, setRecentWinner] = useState(null);

  const dispatch = useNotification();

  const getNetwork = (chainId) => {
    switch (parseInt(chainId)) {
      case 1:
        return "mainnet";
      case 4:
        return "rinkeby";
      case 1337:
        return "hardhat";
      case 31337:
        return "hardhat";
      default:
        return "unknown";
    }
  };

  const raffleAddress =
    getNetwork(chainId) in contractAddresses
      ? contractAddresses[getNetwork(chainId)][0]
      : null;

  const {
    runContractFunction: enterRaffle,
    isLoading,
    isFetching,
  } = useWeb3Contract({
    abi,
    contractAddress: raffleAddress, //specify the network
    functionName: "enterRaffle",
    params: {},
    msgValue: entranceFee,
  });

  const { runContractFunction: getEntranceFee } = useWeb3Contract({
    abi,
    contractAddress: raffleAddress, //specify the network
    functionName: "getEntranceFee",
    params: {},
  });

  const { runContractFunction: getNumberOfPlayers } = useWeb3Contract({
    abi,
    contractAddress: raffleAddress, //specify the network
    functionName: "getNumberOfPlayers",
    params: {},
  });

  const { runContractFunction: getRecentWinner } = useWeb3Contract({
    abi,
    contractAddress: raffleAddress, //specify the network
    functionName: "getRecentWinner",
    params: {},
  });

  async function updateUI() {
    const fee = (await getEntranceFee()).toString();
    setEntranceFee(fee);
    const noP = (await getNumberOfPlayers()).toString();
    setNumberOfPlayers(noP);
    const recentWinner = await getRecentWinner();
    setRecentWinner(recentWinner);
  }

  useEffect(() => {
    if (isWeb3Enabled) {
      updateUI();
    }
  }, [isWeb3Enabled]);

  const handleSuccess = async (tx) => {
    await tx.wait(1);
    handleNewNotification(tx);
    updateUI();
  };

  const handleNewNotification = (tx) => {
    dispatch({
      type: "info",
      message: "Transaction Complete!",
      title: "Tx Notification",
      position: "topR",
      icon: "bell",
    });
  };

  return (
    <div>
      {raffleAddress ? (
        <div>
          <div className="px-5 m-5">
            <div>
              {" "}
              <span className="font-black">Entrance Fee:</span>{" "}
              {ethers.utils.formatUnits(entranceFee)}
            </div>
            <div>
              {" "}
              <span className="font-black"> Num of Players:</span>{" "}
              {numberOfPlayers}
            </div>
            <div>
              {" "}
              <span className="font-black">Recent Winner: </span>
              {recentWinner}
            </div>
          </div>
          <div className="relative top-32 pl-10">
            <button
              disabled={isLoading || isFetching}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={async () =>
                await enterRaffle({
                  onSuccess: handleSuccess,
                  onError: (error) => {
                    console.log(error);
                  },
                })
              }
            >
              {isLoading || isFetching ? (
                <div className="animate-spin spinner-border h-8 w-8 border-b-2 rounded-full"></div>
              ) : (
                "Enter Raffle"
              )}
            </button>
          </div>
        </div>
      ) : (
        <div>No Contract Deployed on this Network</div>
      )}
    </div>
  );
}
