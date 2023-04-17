let x = 1;
switch (typeof(x)) {
  case 'Number': 
    console.log('x - число');
     break;
  case 'String':
    console.log('x - строка');
     break;
  case 'Boolean':
    console.log('x - лочический тип');
      break;
      default:
        console.log('Тип x - неопределен');
}