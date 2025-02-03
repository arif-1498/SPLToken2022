
const web3 = require("@solana/web3.js");
const {
  Keypair,
  Connection,
  clusterApiUrl,
  LAMPORTS_PER_SOL,
  SystemProgram,
  PublicKey,
} = web3;
const Spltoken = require("@solana/spl-token");
const {
  TOKEN_2022_PROGRAM_ID,
  MINT_SIZE,
  createInitializeMint2Instruction,
  createInitializeInstruction,
  createInitializeTransferFeeConfigInstruction,
  createInitializeMetadataPointerInstruction,
  createInitializeMintInstruction,
  ExtensionType, getMint
} = Spltoken;
/*const metaplex = require("@metaplex-foundation/mpl-token-metadata");
const { MPL_TOKEN_METADATA_PROGRAM_ID } = metaplex;*/
const keys = require("./Keypairs");
const metadata=require("@solana/spl-token-metadata");
const airdrop = require("./airdrop");
const connection = new Connection(clusterApiUrl("devnet"));
const { SendSol, checkBalance } = airdrop;
const { payerSecretkey, mintSecretkey } = keys;



/*const tokenmetadata = {
  name: "Pak Rupees Token",
  symbol: "PKRT",
  uri: "https://ibb.co/znmNjyY",
};*/
const tokenmetadata = {
  name: "Pak Rupees Token",
  symbol: "PKRT",
  uri: "https://ibb.co/znmNjyY",
};
payerSK = new Uint8Array(payerSecretkey);
mintSK = new Uint8Array(mintSecretkey);
const payer = Keypair.fromSecretKey(payerSK);
const mintkeypair = Keypair.fromSecretKey(mintSK);

console.log("payer:", payer.publicKey.toBase58());
console.log("mint keypair:", mintkeypair.publicKey.toBase58());

(async () => {
  //SendSol(payer.publicKey)
  checkBalance(payer.publicKey)
  checkBalance(mintkeypair.publicKey)


  const extensions = [
    ExtensionType.TransferFeeConfig,
    
  ];
  const mintlen = await Spltoken.getMintLen(extensions);
  console.log("mint length is :", mintlen)
  const fees = await connection.getMinimumBalanceForRentExemption(mintlen);

  console.log("rent for mint account is:", fees / LAMPORTS_PER_SOL)

   const mintInfo= await connection.getAccountInfo(mintkeypair.publicKey)
      console.log("mint info:", mintInfo);

  const mintAccountInstruction = SystemProgram.createAccount({
    fromPubkey: payer.publicKey,
    newAccountPubkey: mintkeypair.publicKey,
    space: mintlen,
    lamports: fees,
    programId: TOKEN_2022_PROGRAM_ID,
  });


  const tranferFeeConfig = createInitializeTransferFeeConfigInstruction(
    mintkeypair.publicKey,
    payer.publicKey,
    payer.publicKey,
    500,
    5000000,
    TOKEN_2022_PROGRAM_ID
  );

  /*const metadataInstruction = createInitializeMetadataPointerInstruction(
    mintkeypair.publicKey,
    payer.publicKey,
    mintkeypair.publicKey,
    TOKEN_2022_PROGRAM_ID
  );*/
  const initializeMintInstruction = createInitializeMintInstruction(
    mintkeypair.publicKey,
    6,
    payer.publicKey,
    payer.publicKey,
    TOKEN_2022_PROGRAM_ID
  );

  /*const InitializeInstruction = createInitializeInstruction({
    programId: TOKEN_2022_PROGRAM_ID,
    mint: mintkeypair.publicKey,
    metadata: mintkeypair.publicKey,
    name: tokenmetadata.name,
    symbol: tokenmetadata.symbol,
    uri: tokenmetadata.uri,
    mintAuthority: payer.publicKey,
    updateAuthority: payer.publicKey,
  });*/



  const transactions = new web3.Transaction().add(
    mintAccountInstruction, 
    tranferFeeConfig,
    initializeMintInstruction,
    
  );
  


  const signature = await web3.sendAndConfirmTransaction(connection, transactions, [payer, mintkeypair], undefined)

  console.log(`🔗 Explorer URL: https://explorer.solana.com/tx/${signature}?cluster=devnet`);
  console.log("mint is : ", mintkeypair.publicKey);
  console.log("payer is : ", payer.publicKey)



})();
