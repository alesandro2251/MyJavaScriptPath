// Function for finding the unique integer in array.

function lonelyinteger(a) {
  
    let breakFlag = false; // use to find if the array item is unique 
    let uniqueItem;
    const n = a.length; // number fo loops

    for (let i = 0; i < n; i++) {
        let item = a[0]; // takes everytime the first item of the array
        a.shift(item); // removes the first item

        for (let j = 0; j < a.length; j++) {
            
            if( item === a[j]){
                breakFlag = true // if items is in array
            }
        }
        
        if ( breakFlag === false){  // if item is not in array break the loop and return the result
            uniqueItem = item;
            break
        }
        
        breakFlag = false // if wasn't found an unique item reset the breakFlag
        a.push(item) // return the used item on last position

    }
    
    return uniqueItem;
}
