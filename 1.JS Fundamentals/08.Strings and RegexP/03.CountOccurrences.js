function countOccurrences(findWord, text){
    let counter = 0;
    let arr = text.split(" ");
    for(let i = 0; i < arr.length; i++){
        let word = arr[i];
        if(word.includes(findWord)){
            counter++;
        }
    }
    console.log(counter);
}