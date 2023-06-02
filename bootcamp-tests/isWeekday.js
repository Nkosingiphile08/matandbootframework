function isWeekday(name){
    if(name.startsWith('Mon')||name.startsWith('Tue')||name.startsWith('Wed')||name.startsWith('Thurs')||name.startsWith('Fri')){
    return true}else{
      return false
      }                 
    }
    console.log(isWeekday('Monday, Tuesday, Wednesday, Thursday, Friday'));
    
                 