const fs = require("fs");
const path = require("path");

const paths = path.join(__dirname, "../Datas/datas.json");
console.log("the path is :", paths);

function addKepairs(name, pubkey, secKey) {
  try {
    const keypair = {
      name: name,
      publicKeys: pubkey,
      secretKeys: secKey,
    };
    const datas = JSON.parse(fs.readFileSync(paths));
    datas.wallets.push(keypair);
    fs.writeFileSync(path, JSON.stringify(datas));
    console.log("succesfully added sucessfully");
  } catch (error) {
    console.log("unable to adde file : ", error);
  }
}

function addMintAddrss(mintAdd) {
  try {
    const datas = JSON.parse(fs.readFileSync(paths));
    datas.mintAddresses.push(mintAdd);
    fs.writeFileSync(paths, JSON.stringify(datas));
    console.log("Succesfully added mint address");
  } catch (error) {
    console.log("Unable to add mint address : ", error);
  }
}

function addSignature(trxsign) {
  try {
    const datas = JSON.parse(fs.readFileSync(paths));
    datas.signature.push(trxsign);
    fs.writeFileSync(paths, JSON.stringify(datas));
    console.log("Succesfully added transaction signature");
  } catch (error) {
    console.log("Unable to add transaction signature : ", error);
  }
}

module.exports = { addKepairs, addMintAddrss, addSignature };
