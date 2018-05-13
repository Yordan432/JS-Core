function calcPrice(movieTitle, dayOfWeek){
    let toLowerCaseMovieTitle = movieTitle + '';
    toLowerCaseMovieTitle = toLowerCaseMovieTitle.toLowerCase();
    let toLowerCaseDayOfWeek = dayOfWeek + '';
    toLowerCaseDayOfWeek = toLowerCaseDayOfWeek.toLowerCase();

    let price = 0;
    switch(toLowerCaseMovieTitle){
        case 'the godfather':
            switch(toLowerCaseDayOfWeek){
                case 'monday':
                     price = 12;
                    break;
                case 'tuesday':
                    price = 10;
                    break;
                case 'wednesday':
                    price = 15;
                    break;
                case 'thursday':
                    price = 12.50;
                    break;
                case 'friday':
                    price = 15;
                    break;
                case 'saturday':
                    price = 25;
                    break;
                case 'sunday':
                    price = 30;
                    break;
        }
           break;
           case 'schindler\'s list':
           switch(toLowerCaseDayOfWeek){
                case 'monday':
                     price = 8.50;
                    break;
                case 'tuesday':
                    price = 8.50;
                    break;
                case 'wednesday':
                    price = 8.50;
                    break;
                case 'thursday':
                    price = 8.50;
                    break;
                case 'friday':
                    price = 8.50;
                    break;
                case 'saturday':
                    price = 15;
                    break;
                case 'sunday':
                    price = 15;
                    break;
        }
           break;
           case 'casablanca':
           switch(toLowerCaseDayOfWeek){
                case 'monday':
                     price = 8;
                    break;
                case 'tuesday':
                    price = 8;
                    break;
                case 'wednesday':
                    price = 8;
                    break;
                case 'thursday':
                    price = 8;
                    break;
                case 'friday':
                    price = 8;
                    break;
                case 'saturday':
                    price = 10;
                    break;
                case 'sunday':
                    price = 10;
                    break;
        }
           break;
           case 'the wizard of oz':
           switch(toLowerCaseDayOfWeek){
                case 'monday':
                     price = 10;
                    break;
                case 'tuesday':
                    price = 10;
                    break;
                case 'wednesday':
                    price = 10;
                    break;
                case 'thursday':
                    price = 10;
                    break;
                case 'friday':
                    price = 10;
                    break;
                case 'saturday':
                    price = 15;
                    break;
                case 'sunday':
                    price = 15;
                    break;
        }
           break;
           default:
           return 'error';
    }
    console.log(price);
}