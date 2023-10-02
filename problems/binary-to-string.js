function binaryToString(binaryBlob) {
  let binaries = []

  for(let i =0; i <binaryBlob.length; i +=8) {
    binaries.push(binaryBlob.slice(i, i+8))
  }
  return (binaries.map(blob => String.fromCharCode(parseInt(blob, 2))).join(''))
}

/* Comment in the code below to run local tests */
// console.log(binaryToString('010000010100001001000011')); // 'ABC'
// console.log(binaryToString('001101100011011100111000')); // '678'


module.exports = binaryToString;