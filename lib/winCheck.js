
const check = (currXpoz, currYpoz, source, winplayer) => {
  let count1 = true;
  const maxY = source.length - 1;
  const maxX = source.length - 1;
  let inc1 = 1;
  let counterDir1 = 1;
  let counterDir2 = 1;
  let counterDir3 = 1;
  let counterDir4 = 1;
  let counter = 1;
  const counterarr = [];

  // -------------Dir1: átlósan fel---------------------------------------
  while (count1 && currXpoz - inc1 >= 0 && currYpoz - inc1 >= 0) {
    // console.log('átlósan balra fel');
    if (source[currXpoz - inc1][currYpoz - inc1] === winplayer) {
      counterDir1++;
      inc1++;
      // console.log('Conter:', counterDir1);
    } else {
      count1 = false;
    }
  }
  count1 = true;
  inc1 = 1;
  while ((count1 && currXpoz + inc1 <= maxX) && currYpoz + inc1 < maxY) {
    // console.log('átlósan jobbra le');
    if (source[currXpoz + inc1][currYpoz + inc1] === winplayer) {
      counterDir1++;
      inc1++;
      // console.log('Conter:', counterDir1);
    } else {
      count1 = false;
    }
  }
  counterarr.push(counterDir1);
  // -------------Dir2: átlósan le---------------------------------------
  count1 = true;
  inc1 = 1;
  while (count1 && currXpoz + inc1 <= maxX && currYpoz - inc1 >= 0) {
    // console.log('ástlósan balra le');
    if (source[currXpoz + inc1][currYpoz - inc1] === winplayer) {
      counterDir2++;
      inc1++;
      // console.log('Conter:', counterDir2);
    } else {
      count1 = false;
    }
  }

  count1 = true;
  inc1 = 1;
  while (count1 && currYpoz + inc1 <= maxY && currXpoz - inc1 >= 0) {
    //    console.log('átlósan jobbra fel');
    if (source[currXpoz - inc1][currYpoz + inc1] === winplayer) {
      counterDir2++;
      inc1++;
      //      console.log('Conter:', counterDir2);
    } else {
      count1 = false;
    }
  }
  counterarr.push(counterDir2);
  // -------------Dir3: függőleges---------------------------------------
  count1 = true;
  inc1 = 1;
  while (count1 && currXpoz - inc1 >= 0) {
    //    console.log('fel');
    if (source[currXpoz - inc1][currYpoz] === winplayer) {
      counterDir3++;
      inc1++;
      //      console.log('Conter:', counterDir3);
    } else {
      count1 = false;
    }
  }
  count1 = true;
  inc1 = 1;
  while (count1 && currXpoz + inc1 <= maxX) {
    //    console.log('le');
    if (source[currXpoz + inc1][currYpoz] === winplayer) {
      counterDir3++;
      inc1++;
      //      console.log('Conter:', counterDir3);
    } else {
      count1 = false;
    }
  }
  counterarr.push(counterDir3);
  // -------------Dir4: vízszintes---------------------------------------
  count1 = true;
  inc1 = 1;
  while (count1 && currYpoz - inc1 >= 0) {
    //    console.log('balra');
    if (source[currXpoz][currYpoz - inc1] === winplayer) {
      counterDir4++;
      inc1++;
      //      console.log('Conter:', counterDir4);
    } else {
      count1 = false;
    }
  }
  count1 = true;
  inc1 = 1;
  while (count1 && currYpoz + inc1 <= maxY) {
    //    console.log('jobbra');
    if (source[currXpoz][currYpoz + inc1] === winplayer) {
      counterDir4++;
      inc1++;
      //     console.log('Conter:', counterDir4);
    } else {
      count1 = false;
    }
  }
  counterarr.push(counterDir4);
  counter = Math.max(...counterarr);
  return counter;
};
module.exports = {
  winCheck: check
}
;
