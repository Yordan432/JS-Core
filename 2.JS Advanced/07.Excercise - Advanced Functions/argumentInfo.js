function argumentInfo(){
    for(let item of arguments)
    {
        console.log(item);
    }
}
argumentInfo('cat', 42, function () { console.log('Hello world!'); });