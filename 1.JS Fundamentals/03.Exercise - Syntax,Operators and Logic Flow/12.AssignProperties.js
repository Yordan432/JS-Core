function assignProperties(items){
    let itemsArr = [items];
    let array = [];

    for(let i = 0; i < itemsArr.length; i++){
        array[i] = itemsArr[i];
    }
    let result = '';
    let row = 0;
    for(let person of array){
        result +=person;
        result += ': ';
        if(row == 2){
            result +=',\n';
            result +='  ';
            row = 0;
        }
    }
    console.log(result);
}