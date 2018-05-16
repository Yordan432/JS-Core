function helix(number){
    let result = '';
    for(let i = 0; i <number; i++){
        result += printStart();
        result += printSymbols('AT');
        result += printStart();
        result +='\n';
        
    }

    function printStart(){
        return '*'.repeat(2);
    }
    function printSymbols(str){
        return str.repeat(1);
    }
    console.log(result);
}