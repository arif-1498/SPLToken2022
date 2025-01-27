const web3 =require("@solana/web3.js");
const {Connection, clusterApiUrl, LAMPORTS_PER_SOL}=web3;

const connectio=new Connection(clusterApiUrl("devnet"));

if (Connection){
    console.log("successfully connected to devnet")

}


async function SendSol(address, amount){
    
    const sig=awaitconnectio.requestAirdrop(address, amount*LAMPORTS_PER_SOL)

}

module.exports={SendSol};
