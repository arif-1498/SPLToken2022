const fs = require("fs");

const path = "./Datas/Walets.json";

function addKepairs(name, pubkey, prvtkey) {
  try {
    const data = {
      [name]: {
        pubkeys: pubkey,
        scretkey: prvtkey
      },
    };
    const datas = JSON.parse(fs.readFileSync(path));
    datas.wallets.push(data)
    fs.writeFileSync(path, JSON.stringify(datas));
    console.log("succesfully added keypairs in json");
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
