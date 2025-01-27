const web3=require("@solana/web3.js")
const helper=require("./helpers/helpers")
const {addKepairs}=helper;
const {Keypair}=web3;



const payerSecretkey=[
      145, 174, 168, 237, 225,  60, 146, 237, 230,  22, 103,
      25, 194, 128, 154,  66, 151, 114, 116, 231, 101, 131,
     176,  33, 111,  88, 188,  54,  80,  63,  88, 114, 206,
       7, 241, 175, 245,  56, 173, 186, 124, 159, 220,  49,
      48, 240, 253,  94, 160, 177, 133,  36, 105, 140,  17,
     229,  35, 146,  82,  57, 219, 229,  11,  51
   ];
const mintSecretkey=[
       63, 220, 229, 138, 184, 213,  96,   5, 185,  94, 189,
       164,  79,   4, 237, 190,  46, 119,  33,  18, 159, 226,
       242, 119, 103, 214, 107,  29,  82, 180, 227, 167, 194,
       146, 160, 118,  91, 254,  23,  59,   9,   2, 128, 143,
       192, 207,  60, 231, 106,  43,   6, 158,  92,  44, 250,
        67, 203,  62, 138,  51, 120,  50, 141,  52
     ];

const wallet1Secretkey=[
      191, 191, 183,  0, 134, 192, 157, 160,  49, 255, 193,
      14, 119, 137, 15, 214, 204, 211, 244,  12, 235, 185,
     143, 136,  20, 36, 200, 145,  20, 245, 161, 191, 170,
      47, 222,  23, 34, 160, 145,  52, 127, 149,  76,  52,
      50,  35, 226, 59,  22, 109, 213, 223, 234, 225,  93,
     169, 197,  76, 28,  58, 235, 169, 176,  60
   ];
const wallet2Secretkey=[
       64, 133,  19, 144, 210,  81, 149,  15,  41, 176, 156,
       251, 146, 243,   0, 108, 243, 204,  62,  10,  76, 136,
       165,  39, 128,  52,  26,   5, 225,  30,  58,  76,  37,
       146, 202,  26, 245,  26,   0, 232,  43,  22,  30,  46,
        61, 177,  78,  60, 171, 192, 185, 213, 242, 149, 255,
       217,   5, 128,  71, 113, 123, 102,  21, 147
     ];



     module.exports={payerSecretkey, mintSecretkey, wallet1Secretkey, wallet2Secretkey};
