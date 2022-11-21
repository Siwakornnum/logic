const getvalue = (left, right, s) => {
    for (left => 0; right < s.length;){
        if(s[left] !== s[right]) break;
        left--;
        right++;
    }
    // while(left >= 0 && right < s.length) {
    //     if(s[left] !== s[right]) break;
    //     left--;
    //     right++;
    // }
    return [left + 1, right]
}
    
let resultpalindromic = function(s) {
    let max = [0, 1];
    for(let i = 0; i < s.length; i++) {
        let even = getvalue(i - 1, i, s);
        let odd = getvalue(i - 1, i + 1, s);
        if(odd[1] - odd[0] > even[1] - even[0]){
            curMax = odd
        }else{
            curMax = even
        }
        /// ----------------------------------------
        if (max[1] - max[0] > curMax[1] - curMax[0]) {
            max = max
        }
        else{
            max = curMax
        }

    }
    return s.slice(max[0], max[1]);
}

let inputText = () => {
    let s = 'abcdba'
    if (s.length > 1000){
        console.log('Error Text > 1000')
    }else{
        console.log(resultpalindromic(s))
    }
}

inputText()







