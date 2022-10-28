function compare(a, b) {
    //use split(" ") for a and b into arr
    let aArr = a.split(" ");
    let bArr = b.split(" ");
    //create arraies for a and b to keep track of score

    const selectorValue = (selectors) => {
      let score = [0,0,0]
      selectors.forEach(selector => {
        if (selector.split("#").length > 1) {
          score[0] += (selector.split("#").length -1)
        }
        
        if (selector.split(".").length >1) {
          score[1] += (selector.split(".").length -1)
        }
        
        if(!selector.startsWith("#") && !selector.startsWith(".") && !selector.startsWith('*')) {
          score[2] += 1
        }
      })
      return score;
    }

    let aScore = selectorValue(aArr);
    let bScore = selectorValue(bArr);
    console.log("a score:", aScore)
    console.log("b score:", bScore)

    if (aScore[0] > bScore[0]) {
      return a;
    } else if (bScore[0] > aScore[0]) {
      return b;
    }
    
    if (aScore[1] > bScore[1]) {
      return a;
    } else if (aScore[1] < bScore[1]){
      return b;
    } else if (aScore[0] === bScore[0] && aScore[1] === bScore[1] &&  bScore[2] === aScore[2] ) {
      return b
    }
    
    if (aScore[2] > bScore[2]) {
      return a;
    } else if (bScore[2] > aScore[2]) {
      return b;
    }
}

console.log(compare("div #id.class", ".class div p"))