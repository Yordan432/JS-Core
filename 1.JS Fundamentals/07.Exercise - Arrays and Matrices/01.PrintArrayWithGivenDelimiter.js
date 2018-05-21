function printArrayWithGiveDelimiter(array){
    let delimiter = array[array.length - 1];
    
    let result = '';
    for(let i = 0; i< array.length - 1; i++){
        result +=array[i];
        if(i != array.length - 2){
            result +=delimiter;
        }
    }
    console.log(result);
}