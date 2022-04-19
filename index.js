function superbowlWin(record){
   for(const elem in record){
       if (elem.result === 'W'){
           return elem.year
       } else {
           return undefined
       }
   }
}
recArray.find(superbowlWin(record))
