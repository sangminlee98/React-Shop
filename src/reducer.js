let 초기값 =  [
    {id : 0, name : '멋진신발', quan : 2},
    {id : 1, name : '이쁜신발', quan : 4}
  ];
  

function reducer (state = 초기값, action) {
  if(action.type === '수량증가') {
    let copy = [...state];
    copy[0].quan++;
    return copy;
  } else if(action.type ==='수량감소') {
      let copy = [...state];
      copy[0].quan--;
      return copy;
  } else {
    return state;
  }
}

function reducer2 (state=true, action) {
  if(action.type === 'close') {
    return false;
  } else
  return state;
}

export {reducer,reducer2};