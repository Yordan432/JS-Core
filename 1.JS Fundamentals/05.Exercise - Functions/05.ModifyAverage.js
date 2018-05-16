function modifiAverage(number){
    let isAverageHigerThan5 = false;

    let sumDigit = sumDigit(number);
        console.log(sumDigit);
    while(!isAverageHigerThan5){
    
        //let averageSumDigit;
        break;
    }
    function sumDigit(number){
        let sum = 0;
        while(number > 0){
            let digit = number % 10;
            sum +=digit;
            number /=10;
        }
        return sum;
    }
}