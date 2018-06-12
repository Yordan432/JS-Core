function colorize() {
    let items = document.getElementById('table').children;
    let index = 1;
    for(let item of items)
    {
        if(index % 2 == 0)
        {
          item.style.background = 'teal';
        }
        index++;
    }
  }
colorize();