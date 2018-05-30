function escaping(array){
    for(let item of array)
    {
        // find < and >  index
        let openTag = item.indexOf('(');
        let closeTag = item.indexOf(')');

        let subStr = item.substr(openTag, 1);
        let closeTagSub = str.substr(endIndx,1);
        // replace tags in item
        let replace = item.replace(subStr,'&lt;');
        let replaceTag = item.replce(closeTagSub, '&gt;');

        item.indexOf(openTag).replace();
    }
}