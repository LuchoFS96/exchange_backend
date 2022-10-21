const API_IMAGES = process.env.API_IMAGES;
function combine(OBJ_SHORT_NAME, USD) {
  //   console.log("obj: ", OBJ_SHORT_NAME.data, "usd: ", USD.data.usd);
  const finalArray = [];
  for (let key in OBJ_SHORT_NAME.data) {
    finalArray.push([
      key,
      OBJ_SHORT_NAME.data[key],
      USD.data.usd[key],
      API_IMAGES + `${key}/200`,
    ]);
  }
  return finalArray;
}

module.exports = combine;
