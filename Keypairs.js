const web3=require("@solana/web3.js")
const helper=require("./helpers/helpers")
const {addKepairs}=helper;
const {Keypair}=web3;


const payer = Keypair.generate();
const mintAuthority=Keypair.generate();
const mintAC=Keypair.generate();
const wallet1=Keypair.generate();
const wallet2=Keypair.generate();

addKepairs("Payer", payer.publicKey, payer.secretKey);

