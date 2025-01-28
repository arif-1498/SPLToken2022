const web3 = require("@solana/web3.js");
const { Connection, clusterApiUrl, LAMPORTS_PER_SOL } = web3;

const connection = new Connection(clusterApiUrl("devnet"));

if (Connection) {
  console.log("successfully connected to devnet");
}

async function SendSol(address, amount) {
  const sig = await connection.requestAirdrop(address, amount * LAMPORTS_PER_SOL);
  console.log("sol sent succesfully ", sig);
}

async function checkBalance(address){
    const balance= await connection.getBalance(address);
    console.log("the balance is: ", balance)
}

module.exports = { SendSol, checkBalance };
