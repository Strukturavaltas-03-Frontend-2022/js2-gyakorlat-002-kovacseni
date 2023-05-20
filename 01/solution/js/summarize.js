
function summarize(...numbers) {
    let integers = numbers.filter(i => Number.isInteger(i));
    let sum = BigInt(0);
    for (let index in integers) {
        sum += BigInt(integers[index]);
    }
    return result;
}

export default summarize;
