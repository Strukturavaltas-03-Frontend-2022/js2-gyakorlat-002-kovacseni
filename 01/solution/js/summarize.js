
function summarize(...numbers) {
    let integers = numbers.filter(i => Number.isInteger(i));
    let sum = BigInt(0);
    for (let index in integers) {
        sum += BigInt(integers[index]);
    }
    if (sum > BigInt(Number.MAX_SAFE_INTEGER) || sum < BigInt(Number.MIN_SAFE_INTEGER)) {
        return sum;
    } else {
        return Number(sum);
    }
}
   

export default summarize;
