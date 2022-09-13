import './App.css';
import { useEffect } from 'react';
import { ethers } from "ethers";
function App() {

  const connect = async()=>{
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const res = await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner()
  console.log(res);
  }

const blockExplorerUrl = "https://bscscan.com"
const chainId = 56;
const nodes = ["https://bsc-dataseed.binance.org/", "https://bsc-dataseed1.defibit.io/", "https://bsc-dataseed1.ninicoin.io/"]

async function setupNetwork() {
  const {ethereum}= window;
    await ethereum.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          chainId: `0x${chainId.toString(16)}`,
          chainName: `Binance Smart Chain Mainnet`,
          nativeCurrency: {
            name: "BNB",
            symbol: "BNB",
            decimals: 18,
          },
          rpcUrls: nodes,
          blockExplorerUrls: [`${blockExplorerUrl}/`],
        },
      ],
    });
    return true;
}
  return (
    <div className="App">
  <button className="button" onClick={connect}>Connect to MetaMask</button>
  <button className="button" onClick={setupNetwork}>Change Chain</button>
    </div>
  );
}
export default App;