function rounding(input){
    let number = input[0];
    let precision = input[1];

    let result = Math.pow(10, precision);
    let round = Math.round(number * result) / result;

    console.log(round);
}