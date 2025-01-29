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
  ExtensionType,
} = Spltoken;
const metaplex = require("@metaplex-foundation/mpl-token-metadata");
const { MPL_TOKEN_METADATA_PROGRAM_ID, createMetadataAccountV3 } = metaplex;
const keys = require("./Keypairs");
const airdrop = require("./airdrop");
const connection = new Connection(clusterApiUrl("devnet"));
const { SendSol } = airdrop;
const { payerSecretkey, mintSecretkey } = keys;

const tokenmetadata = {
  name: "Pak Rupees Token",
  symbol: "PKRT",
  uri: "https://ibb.co/znmNjyY",
};

payerSK = new Uint8Array(payerSecretkey);
mintSK = new Uint8Array(mintSecretkey);
const payer = Keypair.fromSecretKey(payerSK);
const mintkeypair = Keypair.fromSecretKey(mintSK);

console.log("payer:", payer);
console.log("mint keypair:", mintkeypair);

const metadataProgramId= new PublicKey(MPL_TOKEN_METADATA_PROGRAM_ID)
  console.log( "mpl program id",MPL_TOKEN_METADATA_PROGRAM_ID)
  const metadataAccount = PublicKey.findProgramAddressSync([
    Buffer.from("metadata"),
    metadataProgramId.toBuffer(),
    mintkeypair.publicKey.toBuffer(),
  ], metadataProgramId);

  console.log("metdata account:", metadataAccount)

  const metaDataPDA=metadataAccount[0];
  console.log("metadata PDA:", metaDataPDA)


/*
(async () => {
  const extensions = [ExtensionType.TransferFeeConfig];
const mintlen = await Spltoken.getMintLen(extensions + MINT_SIZE);

const fees = await connection.getMinimumBalanceForRentExemption(mintlen);

const mintAccountInstruction = SystemProgram.createAccount({
  fromPubkey: payer.publicKey,
  newAccountPubkey: mintkeypair.publicKey,
  space: mintlen,
  lamports: fees,
  programId: TOKEN_2022_PROGRAM_ID,
});
console.log("mint account instructuion:", mintAccountInstruction)
})();
*/
