const web3=require("@solana/web3.js");
const {Keypair, Connection, clusterApiUrl, PublicKey}=web3;
const spltoken =require("@solana/spl-token")
const {getMint}=spltoken;
const keys=require("./Keypairs");
const {payerSecretkey, }=keys;


const connection = new Connection(clusterApiUrl("devnet"));
//const payer=Keypair.fromSecretKey(new Uint8Array(payerSecretkey));
//console.log("payer:", payer)

const mint=new PublicKey("E6XmiAJV1793En7sjDxKYrbJeEF5hQUxG9x4594bjovj");

(async () => {
    const mintInfo= await getMint(connection,mint, spltoken.TOKEN_2022_PROGRAM_ID );
    console.log("mint info:", mintInfo);
    
} )();
