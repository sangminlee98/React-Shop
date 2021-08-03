let 초기값 =  [];
  

function reducer (state = 초기값, action) {

  if( action.type === '항목추가'){
    let copy = [...state];
    let found = copy.findIndex((a)=>{return a.id === action.data.id})
    if(found>= 0) {
      copy[found].quan++;
      return copy
    } else{
    copy.push(action.data);
    return copy;
    }

  } else if(action.type === '수량증가') {
    let copy = [...state];
    let found = copy.findIndex((a)=>{return a.id === action.payload})
    copy[found].quan++;
    return copy;
  } else if(action.type ==='수량감소') {
      let copy = [...state];
      let found = copy.findIndex((a)=>{return a.id === action.payload})
      if(copy[found].quan <= 0){
        return copy;
      } else {
      copy[found].quan--;
      return copy;
      }
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