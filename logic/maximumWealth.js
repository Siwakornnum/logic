var maximumWealth = function(accounts) {
    let maxvalue = 0
    for(let i = 0; i< accounts.length; i++){
        let value = 0
        for(let j = 0; j< accounts[i].length; j++){
            value += accounts[i][j]
        }
        if (value > maxvalue){
            maxvalue = value;
        }
    }
    return maxvalue
};

console.log(maximumWealth([[2,8,7],[7,1,3],[1,9,5]]))