var addBinary = function(a, b) {
    // const aBin = `0b${a}`
    // const bBin = `0b${b}`
    const sum = BigInt(a) + BigInt(b)
 return sum;
  };
  console.log(addBinary("101","1"));