const fs = require("fs");

const datas = JSON.parse(fs.readFileSync("./Datas/Walets.json"));


console.log("data are",datas.wallets[0])


//const payer=Uint8Array(datas.wallets.payer.seccretKeys);
//console.log(payer)