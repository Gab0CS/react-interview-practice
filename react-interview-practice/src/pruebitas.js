// 'ABCDDEFGH'
const getLongestSubString = (str) =>{
    let subStr = '';
    let subArr = [];
    for (let i = 0; i < str.length; i++){
        let currentChar = str[i];
            if(subStr.includes(currentChar)){
                subArr.push(subStr);
                subStr = currentChar;
            } else{
                subStr += currentChar;
            }
    }
    subArr.push(subStr);
    // return subArr;
    let maxLength = 0;
    let maxSubStr = '';
    for(let i = 0; i < subArr.length; i++){
        if(subArr[i].length >= maxLength){
            maxLength = subArr[i].length;
            maxSubStr = subArr[i];
        }
    }
    return maxSubStr;
}

console.log(getLongestSubString('dvdf'));