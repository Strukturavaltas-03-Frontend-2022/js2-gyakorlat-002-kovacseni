
function summarize(... numbers) {
    let sum = BigInt(0);
    for (let index in numbers) {
        sum += BigInt(Math.trunc(numbers[index]));
    }
    return sum;
}

export default summarize;
