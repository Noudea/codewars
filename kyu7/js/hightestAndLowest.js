function highAndLow(numbers) {
    numbers = numbers.split(" ");
    let maxNumber = Math.max.apply(null, numbers)
    let minNumber = Math.min.apply(null, numbers)
    console.log(maxNumber, minNumber)
    return maxNumber + ' ' + minNumber
}