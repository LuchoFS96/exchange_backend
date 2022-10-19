function combine(OBJ_SHORT_NAME, USD) {
  //   console.log("obj: ", OBJ_SHORT_NAME.data, "usd: ", USD.data.usd);
  const finalArray = [];
  for (let key in OBJ_SHORT_NAME.data) {
    finalArray.push([key, OBJ_SHORT_NAME.data[key], USD.data.usd[key]]);
  }
  return finalArray;
}

module.exports = combine;
