
function summarize(...numbers) {
    let integers = numbers.filter(i => Number.isInteger(i));
    let sum = BigInt(0);
    for (let index in integers) {
        sum += BigInt(integers[index]);
    }
    if (result > Number.MAX_SAFE_INTEGER || result < Number.MIN_SAFE_INTEGER) {
        return result;
    } else {
        return Number(result);
    }
}
   

export default summarize;
