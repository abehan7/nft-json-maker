const nftName = "GMZ-HIDDEN-NFT";
const description = "GMZ-HIDDEN-NFT";
const hiddenImgUrl =
  "https://zumbalabstest123123.mypinata.cloud/ipfs/QmVB2Qp2kEwrKAWUfJPGpWxJDBTS866E715m8yWqSR7Hu3/hidden.png";
const totalNum = 100;

try {
  for (let i = 1; i <= totalNum; i++) {
    let json = `{"name":"${nftName} #${i}","description":"${description}","image":"${hiddenImgUrl}","attributes":[{"trait_type": "Unknown","value": "Unknown"}]}`;
    let fs = require("fs");
    fs.writeFile(`json/${i}.json`, json, "utf8", (e) => e);
  }
  console.log("complete!");
} catch (error) {
  console.log(error);
}
