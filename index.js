const web3=require("@solana/web3.js");
const {Keypair}=web3;
const keys=require("./Keypairs");
const {payerSecretkey}=keys;



const payer=Keypair.fromSecretKey(new Uint8Array(payerSecretkey));
console.log("payer:", payer)