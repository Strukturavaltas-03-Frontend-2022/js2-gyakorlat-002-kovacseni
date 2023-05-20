
function numericConverter(decimalNumber) {
    let result = {};
    result.binary = decimalNumber.toString(2);
    result.octal = decimalNumber.toString(8);
    result.hexa = decimalNumber.toString(16);
    return result;
}

console.log(numericConverter(31));

// export default numericConverter;