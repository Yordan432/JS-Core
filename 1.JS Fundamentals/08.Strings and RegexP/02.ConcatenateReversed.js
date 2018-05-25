function concatAndReverseString(array){
    let concat = '';

    for(let item of array){
        concat +=item;
    }
    let reversed = '';
    for(let i = concat.length - 1; i >= 0; i--){
        reversed +=concat[i];
    }
    console.log(reversed);
}